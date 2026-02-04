
import * as THREE from 'three';
import { CONFIG, MULTIPLAYER_COLORS } from './definitions';
import { LeaderboardEntry } from './supabase';
import type { PlayerInfo, RankingEntry } from './net/protocol';

export class UI {
    score: number = 0;

    container: HTMLDivElement;
    scoreEl: HTMLDivElement;
    epContainerEl: HTMLDivElement;
    epBarEl: HTMLDivElement;
    menuEl: HTMLDivElement;
    gameOverEl: HTMLDivElement;
    finalScoreEl: HTMLSpanElement;
    airContainerEl!: HTMLDivElement;
    airBarEl!: HTMLDivElement;
    leaderboardEl!: HTMLDivElement;
    nameInputEl!: HTMLInputElement;
    submitBtnEl!: HTMLButtonElement;
    submitContainerEl!: HTMLDivElement;

    // Multiplayer UI elements
    lobbyEl!: HTMLDivElement;
    lobbyPlayerListEl!: HTMLDivElement;
    lobbyCodeEl!: HTMLDivElement;
    lobbyStartBtnEl!: HTMLButtonElement;
    spectatorEl!: HTMLDivElement;
    killFeedEl!: HTMLDivElement;
    mpResultsEl!: HTMLDivElement;

    onStartClick: () => void = () => { };
    onRestartClick: () => void = () => { };
    onScoreSubmit: (name: string) => void = () => { };

    // Multiplayer callbacks
    onCreateGame: (name: string) => void = () => { };
    onJoinGame: (code: string, name: string) => void = () => { };
    onLobbyStart: () => void = () => { };
    onLobbyLeave: () => void = () => { };
    onMpPlayAgain: () => void = () => { };
    onSpectateNext: () => void = () => { };

    currentAccentColor: string = '#00E5FF';


    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'game-ui';
        document.body.appendChild(this.container);

        const style = (el: HTMLElement, css: any) => Object.assign(el.style, css);

        // Watercolor Paper Texture Overlay
        const paperOverlay = document.createElement('div');
        style(paperOverlay, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '50', // Above everything
            opacity: '0.08', // Extremely subtle
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply'
        });
        this.container.appendChild(paperOverlay);

        // Subtle Vignette
        const vignette = document.createElement('div');
        style(vignette, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '45',
            background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.15) 100%)',
            mixBlendMode: 'multiply'
        });
        this.container.appendChild(vignette);

        // Score - Minimal
        this.scoreEl = document.createElement('div');
        this.scoreEl.innerText = '0';
        style(this.scoreEl, {
            position: 'absolute',
            top: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '64px',
            fontFamily: '"Courier New", Courier, monospace',
            fontWeight: '100',
            letterSpacing: '5px',
            zIndex: '10',
            pointerEvents: 'none',
            textShadow: '0 0 20px rgba(0,229,255,0.5)' // Cyan glow
        });
        this.container.appendChild(this.scoreEl);

        // EP Bar - Slim Line
        this.epContainerEl = document.createElement('div');
        style(this.epContainerEl, {
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '300px',
            height: '2px', // Very thin
            backgroundColor: 'rgba(255,255,255,0.2)',
            zIndex: '10'
        });

        this.epBarEl = document.createElement('div');
        style(this.epBarEl, {
            width: '0%',
            height: '100%',
            backgroundColor: '#00E5FF', // Cyan
            transition: 'width 0.1s linear',
            boxShadow: '0 0 10px #00E5FF'
        });
        this.epContainerEl.appendChild(this.epBarEl);
        this.container.appendChild(this.epContainerEl);

        // Air Bar - Above EP bar
        this.airContainerEl = document.createElement('div');
        style(this.airContainerEl, {
            position: 'absolute',
            bottom: '60px', // Above EP Bar
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '2px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            zIndex: '10',
            display: 'none' // Hidden by default
        });

        const airLabel = document.createElement('div');
        airLabel.innerText = 'OXYGEN';
        style(airLabel, {
            position: 'absolute',
            top: '-15px',
            left: '0',
            fontSize: '8px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '2px'
        });
        this.airContainerEl.appendChild(airLabel);

        this.airBarEl = document.createElement('div');
        style(this.airBarEl, {
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            transition: 'width 0.1s linear'
        });
        this.airContainerEl.appendChild(this.airBarEl);
        this.container.appendChild(this.airContainerEl);

        // Menu - Modern Minimal
        this.menuEl = document.createElement('div');
        style(this.menuEl, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: '20',
            fontFamily: '"Courier New", Courier, monospace',
            userSelect: 'none'
        });

        // Updated text to include Touch controls
        this.menuEl.innerHTML = `
        <h1 style="
            margin: 0 0 20px 0;
            font-size: 80px;
            font-weight: 100;
            letter-spacing: 10px;
            color: #fff;
            text-shadow: 0 0 30px rgba(255,255,255,0.5);
        ">YUME SNAKE</h1>
        <div style="font-size: 14px; color: #aaa; letter-spacing: 2px; margin-bottom: 30px; text-transform: uppercase;">
            Drift . Explore . Ascend
        </div>
        <button id="start-btn" style="
            padding: 15px 60px;
            font-size: 16px;
            background: transparent;
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 0;
            cursor: pointer;
            letter-spacing: 4px;
            transition: all 0.2s;
            font-family: inherit;
        ">INITIALIZE</button>
        <div style="margin-top: 20px; display: flex; gap: 15px; justify-content: center;">
            <button id="create-game-btn" style="
                padding: 12px 30px;
                font-size: 12px;
                background: transparent;
                color: #00E5FF;
                border: 1px solid #00E5FF;
                cursor: pointer;
                letter-spacing: 3px;
                transition: all 0.2s;
                font-family: inherit;
            ">CREATE GAME</button>
            <button id="join-game-btn" style="
                padding: 12px 30px;
                font-size: 12px;
                background: transparent;
                color: #00E5FF;
                border: 1px solid #00E5FF;
                cursor: pointer;
                letter-spacing: 3px;
                transition: all 0.2s;
                font-family: inherit;
            ">JOIN GAME</button>
        </div>
        <div id="join-input-container" style="margin-top: 15px; display: none;">
            <input id="room-code-input" type="text" maxlength="4" placeholder="CODE" style="
                width: 80px;
                padding: 8px 12px;
                font-size: 18px;
                background: transparent;
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                text-align: center;
                letter-spacing: 4px;
                font-family: inherit;
                text-transform: uppercase;
                margin-right: 10px;
            " />
            <button id="join-confirm-btn" style="
                padding: 8px 20px;
                font-size: 12px;
                background: transparent;
                color: #00E5FF;
                border: 1px solid #00E5FF;
                cursor: pointer;
                letter-spacing: 2px;
                font-family: inherit;
            ">JOIN</button>
        </div>
        <div id="mp-name-container" style="margin-top: 15px; display: none;">
            <input id="mp-name-input" type="text" maxlength="10" placeholder="YOUR NAME" style="
                width: 120px;
                padding: 8px 12px;
                font-size: 14px;
                background: transparent;
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                text-align: center;
                letter-spacing: 2px;
                font-family: inherit;
                text-transform: uppercase;
            " />
        </div>
        <div id="leaderboard-container" style="margin-top: 30px;"></div>
        <div style="margin-top: 30px; font-size: 10px; color: #666; letter-spacing: 1px;">
            [A/D / TOUCH SIDES] STEER &nbsp; &nbsp; [HOLD SPACE] BOOST &nbsp; &nbsp; [1-4] SEASONS
        </div>
    `;
        this.leaderboardEl = this.menuEl.querySelector('#leaderboard-container') as HTMLDivElement;
        this.container.appendChild(this.menuEl);

        // Game Over
        this.gameOverEl = document.createElement('div');
        style(this.gameOverEl, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: '30',
            display: 'none',
            fontFamily: '"Courier New", Courier, monospace',
        });
        this.gameOverEl.innerHTML = `
        <h1 style="font-size: 40px; font-weight: 100; letter-spacing: 5px; color: #FF4081;">SEVERED</h1>
        <p style="font-size: 18px; color: #ccc; margin-bottom: 20px;">ECHO: <span id="final-score">0</span></p>
        <div id="submit-container" style="margin-bottom: 30px;">
            <div style="font-size: 12px; color: #aaa; letter-spacing: 2px; margin-bottom: 10px;">ENTER YOUR NAME</div>
            <input id="name-input" type="text" maxlength="10" placeholder="AAA" style="
                width: 120px;
                padding: 10px 15px;
                font-size: 18px;
                background: transparent;
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                text-align: center;
                letter-spacing: 3px;
                font-family: inherit;
                text-transform: uppercase;
                margin-bottom: 15px;
            " />
            <br/>
            <button id="submit-btn" style="
                padding: 10px 40px;
                font-size: 12px;
                background: transparent;
                border: 1px solid #FF4081;
                color: #FF4081;
                cursor: pointer;
                letter-spacing: 2px;
                font-family: inherit;
            ">SUBMIT</button>
        </div>
        <button id="restart-btn" style="
            padding: 12px 50px;
            font-size: 14px;
            background: transparent;
            border: 1px solid #FF4081;
            color: #FF4081;
            cursor: pointer;
            letter-spacing: 3px;
        ">RECONNECT</button>
    `;
        this.container.appendChild(this.gameOverEl);
        this.finalScoreEl = this.gameOverEl.querySelector('#final-score') as HTMLSpanElement;
        this.submitContainerEl = this.gameOverEl.querySelector('#submit-container') as HTMLDivElement;
        this.nameInputEl = this.gameOverEl.querySelector('#name-input') as HTMLInputElement;
        this.submitBtnEl = this.gameOverEl.querySelector('#submit-btn') as HTMLButtonElement;

        // --- LOBBY UI ---
        this.lobbyEl = document.createElement('div');
        style(this.lobbyEl, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: '25',
            display: 'none',
            fontFamily: '"Courier New", Courier, monospace',
            userSelect: 'none',
        });
        this.lobbyEl.innerHTML = `
            <h1 style="font-size: 40px; font-weight: 100; letter-spacing: 5px; margin-bottom: 10px;">LOBBY</h1>
            <div id="lobby-code" style="font-size: 48px; letter-spacing: 10px; color: #00E5FF; margin-bottom: 20px; text-shadow: 0 0 20px rgba(0,229,255,0.5);"></div>
            <div style="font-size: 10px; color: #888; letter-spacing: 2px; margin-bottom: 20px;">SHARE THIS CODE WITH FRIENDS</div>
            <div id="lobby-player-list" style="margin-bottom: 30px;"></div>
            <button id="lobby-start-btn" style="
                padding: 15px 50px;
                font-size: 14px;
                background: transparent;
                color: #00E5FF;
                border: 1px solid #00E5FF;
                cursor: pointer;
                letter-spacing: 3px;
                font-family: inherit;
                display: none;
            ">START GAME</button>
            <button id="lobby-leave-btn" style="
                padding: 10px 30px;
                font-size: 12px;
                background: transparent;
                color: #FF4081;
                border: 1px solid rgba(255,64,129,0.3);
                cursor: pointer;
                letter-spacing: 2px;
                font-family: inherit;
                margin-top: 15px;
            ">LEAVE</button>
        `;
        this.container.appendChild(this.lobbyEl);
        this.lobbyCodeEl = this.lobbyEl.querySelector('#lobby-code') as HTMLDivElement;
        this.lobbyPlayerListEl = this.lobbyEl.querySelector('#lobby-player-list') as HTMLDivElement;
        this.lobbyStartBtnEl = this.lobbyEl.querySelector('#lobby-start-btn') as HTMLButtonElement;

        // --- SPECTATOR BANNER ---
        this.spectatorEl = document.createElement('div');
        style(this.spectatorEl, {
            position: 'absolute',
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.7)',
            zIndex: '15',
            display: 'none',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '14px',
            letterSpacing: '3px',
            pointerEvents: 'none',
        });
        this.spectatorEl.innerHTML = `
            <div>SPECTATING</div>
            <div id="spectator-name" style="font-size: 20px; color: #00E5FF; margin-top: 5px;"></div>
            <div style="font-size: 10px; color: #666; margin-top: 10px;">[TAB] NEXT PLAYER</div>
        `;
        this.container.appendChild(this.spectatorEl);

        // --- KILL FEED ---
        this.killFeedEl = document.createElement('div');
        style(this.killFeedEl, {
            position: 'absolute',
            top: '20px',
            right: '20px',
            textAlign: 'right',
            color: 'white',
            zIndex: '12',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '12px',
            letterSpacing: '1px',
            pointerEvents: 'none',
        });
        this.container.appendChild(this.killFeedEl);

        // --- MULTIPLAYER RESULTS ---
        this.mpResultsEl = document.createElement('div');
        style(this.mpResultsEl, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: '30',
            display: 'none',
            fontFamily: '"Courier New", Courier, monospace',
            userSelect: 'none',
        });
        this.container.appendChild(this.mpResultsEl);

        // Hover Effects
        const addHover = (btn: HTMLElement, color: string) => {
            btn.addEventListener('mouseenter', () => {
                btn.style.background = color;
                btn.style.color = '#000';
                btn.style.boxShadow = `0 0 20px ${color}`;
                btn.style.border = `1px solid ${color}`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'transparent';
                btn.style.color = color;
                btn.style.boxShadow = 'none';
            });
        }

        setTimeout(() => {
            const startBtn = document.getElementById('start-btn');
            if (startBtn) {
                addHover(startBtn, '#fff');
                startBtn.addEventListener('click', () => {
                    if (this.onStartClick) this.onStartClick();
                });
            }

            const restartBtn = document.getElementById('restart-btn');
            if (restartBtn) {
                addHover(restartBtn, '#FF4081');
                restartBtn.addEventListener('click', () => {
                    if (this.onRestartClick) this.onRestartClick();
                });
            }

            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                addHover(submitBtn, '#FF4081');
                submitBtn.addEventListener('click', () => {
                    const name = this.getNameInputValue();
                    if (name && this.onScoreSubmit) {
                        this.onScoreSubmit(name);
                    }
                });
            }

            const nameInput = document.getElementById('name-input') as HTMLInputElement;
            if (nameInput) {
                nameInput.addEventListener('input', () => {
                    nameInput.value = nameInput.value.toUpperCase();
                });
            }

            // --- MULTIPLAYER BUTTON LISTENERS ---
            const createGameBtn = document.getElementById('create-game-btn');
            const joinGameBtn = document.getElementById('join-game-btn');
            const joinInputContainer = document.getElementById('join-input-container');
            const mpNameContainer = document.getElementById('mp-name-container');
            const joinConfirmBtn = document.getElementById('join-confirm-btn');
            const roomCodeInput = document.getElementById('room-code-input') as HTMLInputElement;
            const mpNameInput = document.getElementById('mp-name-input') as HTMLInputElement;

            if (createGameBtn) {
                addHover(createGameBtn, '#00E5FF');
                createGameBtn.addEventListener('click', () => {
                    if (mpNameContainer) mpNameContainer.style.display = 'block';
                    if (joinInputContainer) joinInputContainer.style.display = 'none';
                    const name = mpNameInput?.value?.toUpperCase().trim() || 'HOST';
                    this.onCreateGame(name);
                });
            }

            if (joinGameBtn) {
                addHover(joinGameBtn, '#00E5FF');
                joinGameBtn.addEventListener('click', () => {
                    if (joinInputContainer) joinInputContainer.style.display = 'block';
                    if (mpNameContainer) mpNameContainer.style.display = 'block';
                });
            }

            if (joinConfirmBtn) {
                addHover(joinConfirmBtn, '#00E5FF');
                joinConfirmBtn.addEventListener('click', () => {
                    const code = roomCodeInput?.value?.toUpperCase().trim() || '';
                    const name = mpNameInput?.value?.toUpperCase().trim() || 'PLAYER';
                    if (code.length === 4) {
                        this.onJoinGame(code, name);
                    }
                });
            }

            if (roomCodeInput) {
                roomCodeInput.addEventListener('input', () => {
                    roomCodeInput.value = roomCodeInput.value.toUpperCase();
                });
            }

            if (mpNameInput) {
                mpNameInput.addEventListener('input', () => {
                    mpNameInput.value = mpNameInput.value.toUpperCase();
                });
            }

            // Lobby buttons
            const lobbyStartBtn = document.getElementById('lobby-start-btn');
            if (lobbyStartBtn) {
                addHover(lobbyStartBtn, '#00E5FF');
                lobbyStartBtn.addEventListener('click', () => {
                    this.onLobbyStart();
                });
            }

            const lobbyLeaveBtn = document.getElementById('lobby-leave-btn');
            if (lobbyLeaveBtn) {
                addHover(lobbyLeaveBtn, '#FF4081');
                lobbyLeaveBtn.addEventListener('click', () => {
                    this.onLobbyLeave();
                });
            }
        }, 0);
    }

    updateScore(val: number) {
        this.score = val;
        this.scoreEl.innerText = `${this.score}`;
    }

    updateEp(current: number, max: number) {
        const pct = Math.min(100, Math.max(0, (current / max) * 100));
        this.epBarEl.style.width = `${pct}%`;

        if (current > 0) {
            this.epBarEl.style.backgroundColor = this.currentAccentColor;
            this.epBarEl.style.boxShadow = `0 0 15px ${this.currentAccentColor}`;
        } else {
            this.epBarEl.style.backgroundColor = 'rgba(255,255,255,0.4)';
            this.epBarEl.style.boxShadow = 'none';
        }
    }

    updateAir(current: number, max: number, visible: boolean) {
        this.airContainerEl.style.display = visible ? 'block' : 'none';
        if (!visible) return;

        const pct = Math.min(100, Math.max(0, (current / max) * 100));
        this.airBarEl.style.width = `${pct}%`;

        if (pct < 33) {
            this.airBarEl.style.backgroundColor = '#FF5252'; // Danger Red
            this.airBarEl.style.boxShadow = '0 0 10px #FF5252';
        } else {
            this.airBarEl.style.backgroundColor = 'white';
            this.airBarEl.style.boxShadow = 'none';
        }
    }

    updateAccentColor(color: number) {
        const hex = '#' + new THREE.Color(color).getHexString();
        this.currentAccentColor = hex;

        // Update Score Glow
        this.scoreEl.style.textShadow = `0 0 20px ${hex}80`; // 50% opacity approximation

        // Update EP Bar immediately if active
        // We can just rely on the next loop, but let's force a style update if it's highlighted?
        // Actually updateEp is called every frame, so it will update automatically.
    }


    showMenu() {
        this.menuEl.style.display = 'block';
        this.gameOverEl.style.display = 'none';
        this.epContainerEl.style.display = 'none';
        this.scoreEl.style.display = 'none';
    }

    hideMenu() {
        this.menuEl.style.display = 'none';
        this.epContainerEl.style.display = 'block';
        this.scoreEl.style.display = 'block';
    }

    showGameOver(score: number) {
        this.finalScoreEl.innerText = score.toString();
        this.gameOverEl.style.display = 'block';
    }

    hideGameOver() {
        this.gameOverEl.style.display = 'none';
    }

    updateLeaderboard(entries: LeaderboardEntry[]) {
        if (!this.leaderboardEl) return;

        if (entries.length === 0) {
            this.leaderboardEl.innerHTML = '';
            return;
        }

        let html = `
            <div style="
                background: rgba(0,0,0,0.1);
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 12px;
                padding: 20px 30px;
            ">
                <div style="
                    font-family: 'Courier New', monospace;
                    font-size: 36px;
                    font-weight: 100;
                    color: #fff;
                    letter-spacing: 6px;
                    margin-bottom: 20px;
                    text-align: center;
                    text-shadow: 0 0 30px rgba(255,255,255,0.5);
                ">HIGH SCORES</div>
                <div style="line-height: 1.4;">
        `;

        entries.forEach((entry, i) => {
            const rank = i + 1;
            const rankStr = rank.toString().padStart(2, ' ');
            const name = entry.name.padEnd(10, ' ');
            const score = entry.score.toString().padStart(5, ' ');

            const glow = rank <= 3 ? 'text-shadow: 0 0 20px rgba(255,255,255,0.4);' : '';

            html += `<div style="
                font-family: 'Courier New', monospace;
                font-size: 24px;
                font-weight: 100;
                color: rgba(255,255,255,0.8);
                letter-spacing: 4px;
                padding: 4px 0;
                ${glow}
            ">${rankStr}. ${name} ${score}</div>`;
        });

        html += '</div></div>';
        this.leaderboardEl.innerHTML = html;
    }

    getNameInputValue(): string {
        if (!this.nameInputEl) return '';
        return this.nameInputEl.value.toUpperCase().trim().slice(0, 10);
    }

    resetNameInput() {
        if (this.nameInputEl) {
            this.nameInputEl.value = '';
        }
    }

    hideSubmitForm() {
        if (this.submitContainerEl) {
            this.submitContainerEl.style.display = 'none';
        }
    }

    showSubmitForm() {
        if (this.submitContainerEl) {
            this.submitContainerEl.style.display = 'block';
        }
    }

    setSubmitButtonState(submitting: boolean) {
        if (this.submitBtnEl) {
            this.submitBtnEl.disabled = submitting;
            this.submitBtnEl.innerText = submitting ? 'SUBMITTING...' : 'SUBMIT';
        }
    }

    // --- LOBBY UI ---

    showLobby(roomCode: string, isHost: boolean): void {
        this.menuEl.style.display = 'none';
        this.lobbyEl.style.display = 'block';
        this.lobbyCodeEl.innerText = roomCode;
        this.lobbyStartBtnEl.style.display = isHost ? 'inline-block' : 'none';
    }

    hideLobby(): void {
        this.lobbyEl.style.display = 'none';
    }

    updateLobbyPlayers(players: PlayerInfo[]): void {
        let html = '';
        for (const p of players) {
            const color = MULTIPLAYER_COLORS[p.colorIndex] || MULTIPLAYER_COLORS[0];
            const colorHex = '#' + new THREE.Color(color.head).getHexString();
            const hostBadge = p.isHost ? ' <span style="color: #888;">[HOST]</span>' : '';
            html += `<div style="
                font-size: 18px;
                padding: 6px 0;
                letter-spacing: 3px;
            "><span style="color: ${colorHex}; text-shadow: 0 0 10px ${colorHex};">&#9679;</span> ${p.name}${hostBadge}</div>`;
        }
        if (players.length < 2) {
            html += `<div style="font-size: 12px; color: #666; margin-top: 10px; letter-spacing: 1px;">WAITING FOR PLAYERS...</div>`;
        }
        this.lobbyPlayerListEl.innerHTML = html;

        // Enable start button only if 2+ players
        this.lobbyStartBtnEl.disabled = players.length < 2;
        if (players.length < 2) {
            this.lobbyStartBtnEl.style.opacity = '0.3';
        } else {
            this.lobbyStartBtnEl.style.opacity = '1';
        }
    }

    // --- SPECTATOR UI ---

    showSpectator(playerName: string): void {
        this.spectatorEl.style.display = 'block';
        const nameEl = this.spectatorEl.querySelector('#spectator-name');
        if (nameEl) nameEl.textContent = playerName;
    }

    hideSpectator(): void {
        this.spectatorEl.style.display = 'none';
    }

    // --- KILL FEED ---

    addKillFeedEntry(message: string, color: string = '#FF4081'): void {
        const entry = document.createElement('div');
        entry.textContent = message;
        entry.style.color = color;
        entry.style.marginBottom = '4px';
        entry.style.opacity = '1';
        entry.style.transition = 'opacity 0.5s ease';
        this.killFeedEl.appendChild(entry);

        // Fade out and remove after 5 seconds
        setTimeout(() => {
            entry.style.opacity = '0';
            setTimeout(() => entry.remove(), 500);
        }, 5000);

        // Keep max 5 entries
        while (this.killFeedEl.children.length > 5) {
            this.killFeedEl.removeChild(this.killFeedEl.firstChild!);
        }
    }

    clearKillFeed(): void {
        this.killFeedEl.innerHTML = '';
    }

    // --- MULTIPLAYER RESULTS ---

    showMpResults(rankings: RankingEntry[]): void {
        let html = `
            <h1 style="font-size: 40px; font-weight: 100; letter-spacing: 5px; color: #00E5FF; margin-bottom: 30px;">GAME OVER</h1>
            <div style="
                background: rgba(0,0,0,0.2);
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 8px;
                padding: 20px 40px;
                margin-bottom: 30px;
            ">
        `;

        for (const r of rankings) {
            const medal = r.placement === 1 ? '&#9733; ' : '';
            const glow = r.placement === 1 ? 'text-shadow: 0 0 20px rgba(0,229,255,0.5);' : '';
            html += `<div style="
                font-size: 20px;
                padding: 6px 0;
                letter-spacing: 3px;
                ${glow}
            ">${medal}#${r.placement} ${r.name.padEnd(10)} ${String(r.score).padStart(5)} ${r.kills > 0 ? '(' + r.kills + ' KILLS)' : ''}</div>`;
        }

        html += `</div>
            <button id="mp-play-again-btn" style="
                padding: 15px 50px;
                font-size: 14px;
                background: transparent;
                color: #00E5FF;
                border: 1px solid #00E5FF;
                cursor: pointer;
                letter-spacing: 3px;
                font-family: inherit;
            ">PLAY AGAIN</button>
        `;

        this.mpResultsEl.innerHTML = html;
        this.mpResultsEl.style.display = 'block';

        setTimeout(() => {
            const playAgainBtn = document.getElementById('mp-play-again-btn');
            if (playAgainBtn) {
                playAgainBtn.addEventListener('mouseenter', () => {
                    playAgainBtn.style.background = '#00E5FF';
                    playAgainBtn.style.color = '#000';
                    playAgainBtn.style.boxShadow = '0 0 20px #00E5FF';
                });
                playAgainBtn.addEventListener('mouseleave', () => {
                    playAgainBtn.style.background = 'transparent';
                    playAgainBtn.style.color = '#00E5FF';
                    playAgainBtn.style.boxShadow = 'none';
                });
                playAgainBtn.addEventListener('click', () => {
                    this.onMpPlayAgain();
                });
            }
        }, 0);
    }

    hideMpResults(): void {
        this.mpResultsEl.style.display = 'none';
    }

    // --- HOST DISCONNECTED ---

    showHostDisconnected(): void {
        this.mpResultsEl.innerHTML = `
            <h1 style="font-size: 30px; font-weight: 100; letter-spacing: 5px; color: #FF4081; margin-bottom: 20px;">HOST DISCONNECTED</h1>
            <p style="font-size: 14px; color: #888; margin-bottom: 30px; letter-spacing: 2px;">The game has ended.</p>
            <button id="mp-back-menu-btn" style="
                padding: 12px 40px;
                font-size: 14px;
                background: transparent;
                color: #FF4081;
                border: 1px solid #FF4081;
                cursor: pointer;
                letter-spacing: 3px;
                font-family: inherit;
            ">RETURN TO MENU</button>
        `;
        this.mpResultsEl.style.display = 'block';

        setTimeout(() => {
            const btn = document.getElementById('mp-back-menu-btn');
            if (btn) {
                btn.addEventListener('click', () => {
                    this.hideMpResults();
                    this.showMenu();
                });
            }
        }, 0);
    }
}

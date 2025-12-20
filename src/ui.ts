
import * as THREE from 'three';
import { CONFIG } from './definitions';

export class UI {
    score: number = 0;

    container: HTMLDivElement;
    scoreEl: HTMLDivElement;
    epContainerEl: HTMLDivElement;
    epBarEl: HTMLDivElement;
    menuEl: HTMLDivElement;
    gameOverEl: HTMLDivElement;
    finalScoreEl: HTMLSpanElement;

    onStartClick: () => void = () => { };
    onRestartClick: () => void = () => { };

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
        <div style="font-size: 14px; color: #aaa; letter-spacing: 2px; margin-bottom: 50px; text-transform: uppercase;">
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
        <div style="margin-top: 30px; font-size: 10px; color: #666; letter-spacing: 1px;">
            [A/D / TOUCH SIDES] STEER &nbsp; &nbsp; [HOLD SPACE] BOOST &nbsp; &nbsp; [1-4] SEASONS
        </div>
    `;
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
        <p style="font-size: 18px; color: #ccc; margin-bottom: 40px;">ECHO: <span id="final-score">0</span></p>
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
}

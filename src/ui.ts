
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

  onStartClick: () => void = () => {};
  onRestartClick: () => void = () => {};

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'game-ui';
    document.body.appendChild(this.container);

    const style = (el: HTMLElement, css: any) => Object.assign(el.style, css);

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
            [A/D / TOUCH SIDES] STEER &nbsp; &nbsp; [SPACE / 2-FINGER] BOOST
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
        if(startBtn) {
            addHover(startBtn, '#fff');
            startBtn.addEventListener('click', () => {
                if(this.onStartClick) this.onStartClick();
            });
        }

        const restartBtn = document.getElementById('restart-btn');
        if(restartBtn) {
            addHover(restartBtn, '#FF4081');
            restartBtn.addEventListener('click', () => {
                if(this.onRestartClick) this.onRestartClick();
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
      
      if (current >= CONFIG.EP_COST_BOOST) {
          this.epBarEl.style.backgroundColor = '#00E5FF'; 
          this.epBarEl.style.boxShadow = '0 0 15px #00E5FF';
      } else {
          this.epBarEl.style.backgroundColor = 'rgba(255,255,255,0.4)';
          this.epBarEl.style.boxShadow = 'none';
      }
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

(function (App) {
  "use strict";

  App.sections.heroSparkgrid = function () {
    //Hero Section Code

    const introTime = 10000;
    const grid = document.querySelector(".grid-section");
  
    const container = document.createElement("div");
    container.className = "hero-canvas-container visible";
    container.id = "canvasContainer";
    grid.appendChild(container);
  
    const gridCanvas = document.createElement("canvas"),
    gridCtx = gridCanvas.getContext('2d');
    gridCanvas.id = "gridCanvas";
    container.appendChild(gridCanvas);

    const effectsCanvas = document.createElement("canvas"),
    effectsCtx = effectsCanvas.getContext('2d');
    effectsCanvas.id = "effectsCanvas";
    container.appendChild(effectsCanvas);

    initCelestial(container);

    function initCelestial(container) {

      container.addEventListener('contextmenu', e => e.preventDefault());

      let w, h;
      
      let grid = {
          cols: 0, rows: 0, cellWidth: 0, cellHeight: 0,
          hLines: [], vLines: [], intersections: [], allLines: []
      };
      
      const anim = {
          startTime: 0, phase: 'gridGen', gridGenDuration: 2000,
          pulseDuration: 1000, pulse2Duration: 1000, 
          particlesFadeInDelay: 500, particlesFadeInDuration: 1000,
          sparksStartDelay: 500, particlesAlpha: 0, sparksVisible: false
      };

      const particles = [];
      const layers = [1, 0.6, 0.3];
      const sparks = [];
      // clickPulses array is no longer needed
      const themeColors = {
          ice: {
              spark1: "rgba(0, 119, 255, 1)",
              spark2: "rgba(200, 250, 255, 1)",
              pulse: "rgba(50, 163, 255, 1)"
          },
          fire: {
              spark1: "rgba(255, 80, 0, 1)",
              spark2: "rgba(255, 200, 45, 1)",
              pulse: "rgba(255, 100, 50, 1)"
          }
      };
      const currentTheme = document.documentElement.dataset.theme;

      let mx = -1, my = -1;
      let lastMove = 0;
      let glowAlpha = 0;
      const repelRadius = 80;
      const repelDuration = 300;
      const glowRadius = 240;
      
      // --- New DOM Pulse Function ---
      function createDomPulse(e) {
          const gridOg = document.querySelector(".grid-section");
          
          const pulse = document.createElement("div");
          const size = 30 + Math.random() * 45; // Random size
          
          pulse.className = 'click-pulse';
          pulse.style.width = `${size}px`;
          pulse.style.height = `${size}px`;
          // Center the pulse on the cursor
          pulse.style.left = `${e.clientX - size / 2}px`;
          pulse.style.top = `${e.clientY - size / 2}px`;
          
          gridOg.appendChild(pulse);

          // Remove the pulse element after its animation completes (1.5s)
          setTimeout(() => {
              pulse.remove();
          }, 1500);
      }

      // --- Event Handlers ---
      function updatePointerPosition(e) {
          const event = e.touches ? e.touches[0] : e;
          mx = event.clientX;
          my = event.clientY;
          lastMove = Date.now();
      }

      // Updated click listener to use the new DOM pulse function
      container.addEventListener('click', (e) => {
              if(anim.phase !== 'running') return;
              createDomPulse(e);
      });

      container.addEventListener('contextmenu', (e) => {
              e.preventDefault();
              if(anim.phase !== 'running') return;
              createDomPulse(e);
      });

      window.addEventListener('mousemove', updatePointerPosition);
      window.addEventListener('touchstart', updatePointerPosition, { passive: true });
      window.addEventListener('touchmove', updatePointerPosition, { passive: true });
      window.addEventListener('mouseout', () => { lastMove = 0; });
      window.addEventListener('touchend', () => { lastMove = 0; });

      function resize() {
          w = gridCanvas.width = effectsCanvas.width = window.innerWidth;
          h = gridCanvas.height = effectsCanvas.height = window.innerHeight;
          calculateGrid();
          initParticles();
          initSparks();
          if (anim.phase === 'running') {
              drawRunningGridAndGlow();
          }
      }

      function calculateGrid() {
          const idealCellSize = 80;
          grid.cols = Math.round(w / idealCellSize);
          grid.rows = Math.round(h / idealCellSize);
          grid.cellWidth = w / grid.cols;
          grid.cellHeight = h / grid.rows;

          grid.hLines = Array.from({ length: grid.rows - 1 }, (_, i) => ({ y: (i + 1) * grid.cellHeight }));
          grid.vLines = Array.from({ length: grid.cols - 1 }, (_, i) => ({ x: (i + 1) * grid.cellWidth }));
          
          grid.intersections = [];
          for (let r = 0; r < grid.rows - 1; r++) {
              for (let c = 0; c < grid.cols - 1; c++) {
                      grid.intersections.push({ x: grid.vLines[c].x, y: grid.hLines[r].y });
              }
          }

          grid.allLines = [...grid.hLines.map(l => ({...l, type: 'h'})), ...grid.vLines.map(l => ({...l, type: 'v'}))];
          for (let i = grid.allLines.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [grid.allLines[i], grid.allLines[j]] = [grid.allLines[j], grid.allLines[i]];
          }
      }

      function initParticles() {
          particles.length = 0;
          const baseArea = 1920 * 1080;
          const currentArea = w * h;
          const particleCount = Math.round(80 * (currentArea / baseArea));

          layers.forEach(depth => {
              for (let i = 0; i < particleCount; i++) {
                  const isPole = Math.random() < 0.075;
                  const baseA = isPole ? Math.random() * 0.3 + 0.7 : Math.random() * 0.2 + 0.1;
                  const r = isPole ? Math.random() * 2 + 2 : Math.random() * 2 + 1;
                  particles.push({
                      x: Math.random() * w, y: Math.random() * h, r, baseA, depth,
                      vx: (Math.random() * 2 - 1) * 0.5, vy: (Math.random() * 2 - 1) * 0.5,
                      twPhase: Math.random() * Math.PI * 2, twSpeed: Math.random() * 0.005 + 0.002
                  });
              }
          });
      }

      function initSparks() {
          sparks.length = 0;
          const startPositions = [
              { x: 0, y: h / 2, c: themeColors[currentTheme].spark1 },
              { x: w, y: h / 2, c: themeColors[currentTheme].spark2 }
          ];
          startPositions.forEach(pos => {
              const sp = { x: pos.x, y: pos.y, c: pos.c, ease: 0.03, trail: [] };
              setSparkTarget(sp);
              sparks.push(sp);
          });
      }
            
      function setSparkTarget(sp) {
          if (grid.intersections.length > 0) {
              const targetNode = grid.intersections[Math.floor(Math.random() * grid.intersections.length)];
              sp.tx = targetNode.x;
              sp.ty = targetNode.y;
          } else {
              sp.tx = Math.random() * w;
              sp.ty = Math.random() * h;
          }
      }

      // --- Main Animation Loop ---
      function draw(timestamp) {
          if (!anim.startTime) anim.startTime = timestamp;
          const elapsed = timestamp - anim.startTime;

          effectsCtx.clearRect(0, 0, w, h);

          if (anim.phase === 'gridGen') {
              drawGridGeneration(elapsed);
              if (elapsed >= anim.gridGenDuration) {
                  anim.phase = 'pulse';
                  anim.startTime = timestamp;
              }
          } else if (anim.phase === 'pulse') {
              drawGridPulse(elapsed, themeColors.ice.pulse, 'tl-br');
              if (elapsed >= anim.pulseDuration) {
                  anim.phase = 'pulse2';
                  anim.startTime = timestamp;
              }
          } else if (anim.phase === 'pulse2') {
              drawGridPulse(elapsed, themeColors.fire.pulse, 'tr-bl');
              if (elapsed >= anim.pulse2Duration) {
                  anim.phase = 'running';
                  anim.startTime = timestamp;
                  drawRunningGridAndGlow(); 
              }
          } else if (anim.phase === 'running') {
              const runningElapsed = timestamp - anim.startTime;
              if (runningElapsed > anim.particlesFadeInDelay) {
                  anim.particlesAlpha = Math.min(1, (runningElapsed - anim.particlesFadeInDelay) / anim.particlesFadeInDuration);
              }
              const sparksDelayTotal = anim.particlesFadeInDelay + anim.particlesFadeInDuration + anim.sparksStartDelay;
              if (runningElapsed > sparksDelayTotal) {
                  anim.sparksVisible = true;
              }
              
              drawRunningGridAndGlow();
              // drawClickPulses function is removed
              if (anim.particlesAlpha > 0) drawParticles(timestamp);
              if (anim.sparksVisible) drawSparks(timestamp);
          }
          
          requestAnimationFrame(draw);
      }
                  
      function drawGridLines(ctx, strokeStyle) {
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = 1;
          grid.hLines.forEach(l => { ctx.beginPath(); ctx.moveTo(0, l.y); ctx.lineTo(w, l.y); ctx.stroke(); });
          grid.vLines.forEach(l => { ctx.beginPath(); ctx.moveTo(l.x, 0); ctx.lineTo(l.x, h); ctx.stroke(); });
      }

      function drawGridGeneration(elapsed) {
          gridCtx.clearRect(0, 0, w, h);
          gridCtx.fillStyle = 'rgba(0,0,0,0.9)';
          gridCtx.fillRect(0, 0, w, h);
          const progress = Math.min(1.0, elapsed / anim.gridGenDuration);
          const linesToDraw = Math.ceil(progress * grid.allLines.length);
          gridCtx.strokeStyle = 'rgba(255,255,255,0.1)';
          gridCtx.lineWidth = 1;
          for(let i = 0; i < linesToDraw; i++) {
              const line = grid.allLines[i];
              if (!line) continue;
              gridCtx.beginPath();
              if(line.type === 'h') { gridCtx.moveTo(0, line.y); gridCtx.lineTo(w, line.y); }
              else { gridCtx.moveTo(line.x, 0); gridCtx.lineTo(line.x, h); }
              gridCtx.stroke();
          }
      }
          
      function drawGridPulse(elapsed, color, direction) {
          const progress = elapsed / anim.pulseDuration;
          const pulseRadius = (w + h) * 0.75;
          let pulseX, pulseY;
          if(direction === 'tl-br') {
              pulseX = progress * (w + pulseRadius) - pulseRadius;
              pulseY = progress * (h + pulseRadius) - pulseRadius;
          } else { // tr-bl
              pulseX = w - (progress * (w + pulseRadius) - pulseRadius);
              pulseY = progress * (h + pulseRadius) - pulseRadius;
          }

          gridCtx.clearRect(0, 0, w, h);
          gridCtx.fillStyle = 'rgba(0,0,0,0.9)';
          gridCtx.fillRect(0, 0, w, h);
          const pulseGradient = gridCtx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, pulseRadius);
          pulseGradient.addColorStop(0, color);
          pulseGradient.addColorStop(0.2, color.replace('1)', '0.5)'));
          pulseGradient.addColorStop(0.5, color.replace('1)', '0)'));
          drawGridLines(gridCtx, pulseGradient);
      }

      function drawRunningGridAndGlow() {
          gridCtx.clearRect(0, 0, w, h);
          gridCtx.fillStyle = 'rgba(0,0,0,0.9)';
          gridCtx.fillRect(0, 0, w, h);
          
          drawGridLines(gridCtx, 'rgba(255,255,255,0.1)');

          const isPointerActive = Date.now() - lastMove < 2000 && lastMove !== 0;
          if (isPointerActive) {
              glowAlpha = Math.min(1, glowAlpha + 0.1);
          } else {
              glowAlpha = Math.max(0, glowAlpha - 0.04);
          }

          if (glowAlpha > 0 && mx > -1) {
              const pulseColor = getComputedStyle(document.documentElement).getPropertyValue('--pulse-color').trim();
              const glowGradient = gridCtx.createRadialGradient(mx, my, 0, mx, my, glowRadius);
              const transparentColor = pulseColor.replace(/, 1\)/, `, 0)`);
              glowGradient.addColorStop(0, pulseColor.replace(/, 1\)/, `, ${glowAlpha * 0.8})`));
              glowGradient.addColorStop(1, transparentColor);
              drawGridLines(gridCtx, glowGradient);
          }
      }
      
      function drawParticles(now) {
          const repelActive = Date.now() - lastMove < repelDuration && lastMove !== 0;
          particles.forEach(p => {
              p.x += p.vx; p.y += p.vy;
              if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
              if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
              if (repelActive) {
                  const dx = p.x - mx, dy = p.y - my;
                  const dist = Math.hypot(dx, dy);
                  if (dist < repelRadius) {
                      const force = (1 - dist / repelRadius) * 1.5 * p.depth;
                      p.vx += (dx / dist) * force; p.vy += (dy / dist) * force;
                  }
              }
              p.vx *= 0.99; p.vy *= 0.99;
              const twinkleAlpha = p.baseA * (0.8 + 0.2 * Math.sin(p.twPhase + now * p.twSpeed));
              const finalAlpha = twinkleAlpha * anim.particlesAlpha;
              effectsCtx.beginPath();
              effectsCtx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
              effectsCtx.fillStyle = `rgba(255,255,255,${finalAlpha.toFixed(3)})`;
              effectsCtx.fill();
          });
      }

      function drawSparks(now) {
          sparks.forEach(sp => {
              const dx = sp.tx - sp.x, dy = sp.ty - sp.y;
              sp.x += dx * sp.ease; sp.y += dy * sp.ease;
              if (Math.hypot(dx, dy) < 4) setSparkTarget(sp);
              sp.trail.push({ x: sp.x, y: sp.y, t: now });
              sp.trail = sp.trail.filter(pt => now - pt.t < 1200);

              sp.trail.forEach((pt, i, arr) => {
                  if (i === 0) return;
                  const p0 = arr[i - 1], p1 = pt;
                  const tNorm = (now - p1.t) / 1200;
                  effectsCtx.lineWidth = (1 - tNorm) * 12;
                  effectsCtx.globalAlpha = (1 - tNorm) * 0.7;
                  effectsCtx.beginPath();
                  effectsCtx.moveTo(p0.x, p0.y);
                  effectsCtx.lineTo(p1.x, p1.y);
                  effectsCtx.strokeStyle = sp.c;
                  effectsCtx.stroke();
              });
              
              effectsCtx.globalAlpha = 1;
              const headR = 6;
              effectsCtx.save();
              effectsCtx.filter = 'brightness(1.8) saturate(1.8)';
              effectsCtx.beginPath();
              effectsCtx.arc(sp.x, sp.y, headR, 0, 2 * Math.PI);
              const grad = effectsCtx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, headR * 2);
              grad.addColorStop(0, sp.c);
              grad.addColorStop(1, 'transparent');
              effectsCtx.fillStyle = grad;
              effectsCtx.fill();
              effectsCtx.restore();
          });
      }

      App.sections.refreshCanvasTheme = function() {
          const currentTheme = document.documentElement.dataset.theme;

          // Update spark colors and restart their positions
          sparks.length = 0;
          const startPositions = [
              { x: 0, y: h / 2, c: getComputedStyle(document.documentElement).getPropertyValue('--spark1').trim() },
              { x: w, y: h / 2, c: getComputedStyle(document.documentElement).getPropertyValue('--spark2').trim() }
          ];
          startPositions.forEach(pos => {
              const sp = { x: pos.x, y: pos.y, c: pos.c, ease: 0.03, trail: [] };
              setSparkTarget(sp);
              sparks.push(sp);
          });

          // Reset hover glow color alpha to allow fade-in with new theme color
          glowAlpha = 0;
      }

      document.querySelector("#themeToggle").addEventListener("click", () => {
          if (App.slider.currentlyInSection === 0) {
              App.sections.refreshCanvasTheme();  // <-- add this line
          }
      });

      // Change cursor to pointer on both sparks
      effectsCanvas.addEventListener("mousemove", (e) => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          let cursorChanged = false;

          sparks.forEach((spark) => {
              const dx = mouseX - spark.x;
              const dy = mouseY - spark.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 24) {
              cursorChanged = true;
              }
          });

          // add class to animate custom cursor
          if (cursorChanged) {
              effectsCanvas.style.cursor = 'pointer';
          } else {
              effectsCanvas.style.cursor = 'default';
          }
      });

      // --- Initial Kick-off ---
      window.addEventListener('resize', resize);
      resize();
      requestAnimationFrame(draw);

    }

    function generateNonCanvas() {

      const data = {
        name: "Krishnan K R",
        designation: "Web Developer",
        intro:
          'I’m Krishnan K R – a creative innovator, sparked by curiosity, driven by intent and fueled by passion, committed to building captivating and impactful digital experiences.',
        engravedText: "\"In a world defined by Systems, Algorithms & Protocols,<br>Dare to Raise the Exceptions you Believe in\"",
        resumeLink: "/assets/Krishnan-KR-Resume.pdf",
        cta: {
          getInTouch: "Get in Touch",
        },
      };

      const grid = document.querySelector(".grid-section");

       
      const heroText = document.createElement('div'); 
      heroText.className='kd-hero-text';
      grid.appendChild(heroText);
  
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
      heroText.appendChild(buttonContainer);
      
      function generateIntro() {
        // Create elements
        
        const intro = document.createElement('div'); 
        intro.className='magikriz-intro';
        heroText.appendChild(intro);
        
        const left = document.createElement('div'); left.className='left';
        const brL = document.createElement('span'); brL.className='bracket'; brL.textContent='[';
        const leftText = document.createElement('span'); leftText.className='text icer';
        left.append(brL, leftText);
        const right = document.createElement('div'); right.className='right';
        const rightText = document.createElement('span'); rightText.className='text firer';
        const caretText = document.createElement('span'); caretText.className='text green';
        const brR = document.createElement('span'); brR.className='bracket'; brR.textContent=']';
        right.append(rightText, caretText, brR);
        intro.append( left, right);

        // Scrambler
        class TextScramble {
          constructor(el, speed = 60) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
            this.speed = speed;
          }

          setText(newText) {
            const old = this.el.textContent;
            const length = Math.max(old.length, newText.length);
            this.queue = [];

            for (let i = 0; i < length; i++) {
              const from = old[i] || '';
              const to = newText[i] || '';
              const start = Math.floor(Math.random() * this.speed);
              const end = start + Math.floor(Math.random() * this.speed);
              this.queue.push({ from, to, start, end, char: null });
            }

            cancelAnimationFrame(this.raf);
            this.frame = 0;

            return new Promise(res => {
              this.resolve = res;
              this.update();
            });
          }

          update() {
            let out = '';
            let complete = 0;

            for (const q of this.queue) {
              if (this.frame >= q.end) {
                complete++;
                out += `<span class="char">${q.to}</span>`;
              } else if (this.frame >= q.start) {
                if (!q.char || Math.random() < 0.28) {
                  q.char = this.chars[Math.floor(Math.random() * this.chars.length)];
                }
                out += `<span class="char dud">${q.char}</span>`;
              } else {
                out += `<span class="char">${q.from}</span>`;
              }
            }

            this.el.innerHTML = out;

            if (complete === this.queue.length) {
              this.resolve();
            } else {
              this.frame++;
              this.raf = requestAnimationFrame(this.update);
            }
          }
        }


        const fxL=new TextScramble(leftText,80);
        const fxR=new TextScramble(rightText,80);
        const fxC=new TextScramble(caretText,80);

        // 1. Brackets in
        setTimeout(()=>{brL.classList.add('visible');brR.classList.add('visible');},300);
        // 2. Magi and IZ together
        setTimeout(()=>{
          leftText.classList.add('visible');rightText.classList.add('visible');caretText.classList.add('visible');
          Promise.all([fxL.setText('M A G I'),fxR.setText('I Z')]).then(()=>{
            // 3. Caret
            caretText.classList.add('visible');fxC.setText('❯_').then(()=>{caretText.innerHTML="<span class='caret'>&#10095;_</span>";});
          });
        },900);

          
        // Creator

        const creator = document.createElement('div');
        creator.id = 'creator';
        heroText.appendChild(creator);


        const fxDelay = 0.1;

        function createSpan(char, delay, isAccent) {
          const box = document.createElement('div');
          box.className = 'single-box';
          const span = document.createElement('span');
          span.className = isAccent ? 'spin-char' : 'single-char';
          span.textContent = char;
          span.style.animationDelay = `${delay.toFixed(2)}s`;
          box.appendChild(span);
          return box;
        }

        function generateFooterText(id, text) {
          const container = document.getElementById(id);
          const start = text.indexOf(':') + 2;
          text.split('').forEach((char, i) => {
            const isAccent = i >= start && char !== ' ';
            container.appendChild(createSpan(char, i * fxDelay, isAccent));
          });
          return text.length;
        }

        
        function generateContactButton(len, txt) {
          const btn = document.createElement('button');
          btn.id = 'contact-btn';
          btn.innerHTML = `<span>${txt}</span>`;
          buttonContainer.appendChild(btn);
          setTimeout(() => {
            btn.classList.add('show');
          }, (len * fxDelay + 0.5) * 1000);
        }

        function generateResumeButton(len, txt) {
          const btn = document.createElement('button');
          btn.id = 'resume-btn';
          btn.innerHTML = `<span>${txt}</span>`;
          buttonContainer.appendChild(btn);
          setTimeout(() => {
            btn.classList.add('show');
          }, (len * fxDelay + 0.5) * 1000);
          btn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = 'https://github.com/user-attachments/files/21746051/kriz-resume.pdf'; 
            link.download = 'kriz-resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
        }

        function createHeroLogo() {
          // Create wrapper div
          const wrapper = document.createElement('div');
          wrapper.className = 'hoverable clickable';
          wrapper.id = "kd-hero-logo";

          // Create inner logo container
          const logoContainer = document.createElement('div');
          logoContainer.className = 'logo-container loaded';
          logoContainer.id = 'logoContainer';

          // Create SVG element
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.classList.add('animated-logo', 'loaded');
          svg.setAttribute('width', '3415');
          svg.setAttribute('height', '3608');

          // Create <use> element to reference the <symbol>
          const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
          use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#magikriz-logo');

          // Append use to svg, then to containers
          svg.appendChild(use);
          logoContainer.appendChild(svg);
          wrapper.appendChild(logoContainer);

          // Append to body or specific element
          heroText.appendChild(wrapper); // or replace with document.getElementById('target').appendChild(wrapper);
        }

        setTimeout(() => {
          const len = generateFooterText('creator', 'Weaved By : Krishnan K R'); 
          generateContactButton(len, 'Get in Touch');
          generateResumeButton(len, 'Download Résumé');
          createHeroLogo();

          const scrollButton = document.createElement('div');
          scrollButton.className = 'scroll-next';
          scrollButton.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>'; 
          grid.appendChild(scrollButton);
          scrollButton.addEventListener('click', () => {
            App.slider.scrollToSection(1);
          });

          const btn = document.getElementById('contact-btn');
          btn.addEventListener('click', () => {
            App.slider.scrollToSection(5);
          });
            
          // setTimeout(() => {
          //   Promise.all([
          //     fxL.setText(''), fxR.setText(''), fxC.setText('')
          //   ]).then(()=>{
          //     setTimeout(()=>{
          //       brL.classList.remove('visible');
          //       brR.classList.remove('visible');
          //       brL.classList.add('out');
          //       brR.classList.add('out');
          //     },1000);
          //   });
          // }, 5000); 
        }, 4000);
      }

      generateIntro();
    }

  setTimeout(() => {
    generateNonCanvas();
  }, 0);

    setTimeout(() => {
      App.slider.enableInputs();
    }, introTime);

  }

  App.sections.heroSparkgridUsual = function () {
    App.sections.refreshCanvasTheme();
  }
})(window.App);

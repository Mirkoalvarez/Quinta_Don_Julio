/**
 * Quinta Don Julio — Smooth Cursor (Vanilla JS Port of Magic UI)
 * Archivo: js/smooth-cursor.js
 */

(function () {
  'use strict';

  // Configuración de Resorte por Defecto (Equivalente a Magic UI / Framer Motion)
  const SPRING_CONFIG_POS = { stiffness: 400, damping: 45, mass: 1 };
  const SPRING_CONFIG_ROT = { stiffness: 300, damping: 60, mass: 1 };
  const SPRING_CONFIG_SCALE = { stiffness: 500, damping: 35, mass: 1 };

  const SUB_STEP = 0.001; // Sub-paso de integración física (1ms) para estabilidad
  const DESKTOP_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)";

  // Clase que implementa físicas de resorte amortiguado
  class Spring {
    constructor(initialValue, config) {
      this.value = initialValue;
      this.target = initialValue;
      this.velocity = 0;
      this.stiffness = config.stiffness || 400;
      this.damping = config.damping || 45;
      this.mass = config.mass || 1;
      this.restDelta = config.restDelta || 0.001;
    }

    set(target) {
      this.target = target;
    }

    update(dt) {
      let elapsed = dt;
      // Sub-stepping para evitar inestabilidad numérica a diferentes tasas de refresco (60Hz, 144Hz, etc.)
      while (elapsed > 0) {
        const step = Math.min(elapsed, SUB_STEP);
        const springForce = -this.stiffness * (this.value - this.target);
        const dampingForce = -this.damping * this.velocity;
        const acceleration = (springForce + dampingForce) / this.mass;

        this.velocity += acceleration * step;
        this.value += this.velocity * step;
        elapsed -= step;
      }

      // Umbral de reposo
      if (Math.abs(this.value - this.target) < this.restDelta && Math.abs(this.velocity) < this.restDelta) {
        this.value = this.target;
        this.velocity = 0;
      }

      return this.value;
    }
  }

  // Verificar si es un puntero rastreable de escritorio
  function isTrackablePointer(pointerType) {
    return pointerType !== 'touch' && pointerType !== 'pen';
  }

  // Inicialización
  function initSmoothCursor() {
    // 1. Crear elemento del cursor e inyectarlo en el DOM
    const cursorContainer = document.createElement('div');
    cursorContainer.id = 'custom-cursor';
    cursorContainer.className = 'custom-cursor';
    cursorContainer.setAttribute('aria-hidden', 'true');

    // Flecha SVG de Magic UI con colores del tema Cottagecore (Relleno: Verde Musgo #4A5D4E, Borde: Crema #FDFBF7)
    cursorContainer.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="54"
        viewBox="0 0 50 54"
        fill="none"
        style="transform: scale(0.5); transform-origin: 0 0;"
      >
        <g filter="url(#cursor-shadow)">
          <path
            d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
            fill="#4A5D4E"
          />
          <path
            d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
            stroke="#FDFBF7"
            stroke-width="2.25"
          />
        </g>
        <defs>
          <filter
            id="cursor-shadow"
            x="0.6"
            y="0.95"
            width="49"
            height="52.4"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.2" />
            <feGaussianBlur stdDeviation="2.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="shadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="shadow" result="shape" />
          </filter>
        </defs>
      </svg>
    `;

    document.body.appendChild(cursorContainer);

    // Activar clase en html para ocultar cursor nativo y mostrar el personalizado
    document.documentElement.classList.add('custom-cursor-enabled');

    // 2. Instanciar resortes
    const xSpring = new Spring(0, SPRING_CONFIG_POS);
    const ySpring = new Spring(0, SPRING_CONFIG_POS);
    const rotationSpring = new Spring(0, SPRING_CONFIG_ROT);
    const scaleSpring = new Spring(1, SPRING_CONFIG_SCALE);

    // Variables de estado del mouse
    let mouseX = 0;
    let mouseY = 0;
    let isVisible = false;
    let isInitialized = false;

    // Variables para velocidad y ángulo
    let lastMouseX = 0;
    let lastMouseY = 0;
    let lastUpdateTime = performance.now();
    let previousAngle = 0;
    let accumulatedRotation = 0;
    let scaleTimeout = null;

    // Escuchar el movimiento del puntero
    function onPointerMove(e) {
      if (!isTrackablePointer(e.pointerType)) {
        return;
      }

      // En la primera llamada, posicionar el resorte directo para evitar animar desde (0,0)
      if (!isInitialized) {
        xSpring.value = e.clientX;
        ySpring.value = e.clientY;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        isInitialized = true;
      }

      // Hacer visible el cursor suave al mover el mouse
      if (!isVisible) {
        isVisible = true;
        cursorContainer.classList.add('custom-cursor-visible');
      }

      mouseX = e.clientX;
      mouseY = e.clientY;

      // Calcular velocidad en px/ms
      const now = performance.now();
      const dt = now - lastUpdateTime;
      let vx = 0;
      let vy = 0;

      if (dt > 0) {
        vx = (mouseX - lastMouseX) / dt;
        vy = (mouseY - lastMouseY) / dt;
      }

      lastUpdateTime = now;
      lastMouseX = mouseX;
      lastMouseY = mouseY;

      xSpring.set(mouseX);
      ySpring.set(mouseY);

      // Calcular ángulo de movimiento e inclinación (rotación) si hay velocidad relevante
      const speed = Math.sqrt(vx * vx + vy * vy);
      if (speed > 0.05) {
        // atan2 devuelve radianes, pasamos a grados y compensamos 90 grados para alinear la punta del SVG
        const currentAngle = Math.atan2(vy, vx) * (180 / Math.PI) + 90;

        // Evitar saltos de rotación en 180/-180 grados (interpolar el camino más corto)
        let angleDiff = currentAngle - previousAngle;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;

        accumulatedRotation += angleDiff;
        rotationSpring.set(accumulatedRotation);
        previousAngle = currentAngle;

        // Efecto de deformación/escala leve durante el movimiento rápido (Magic UI)
        scaleSpring.set(0.92);

        if (scaleTimeout !== null) {
          clearTimeout(scaleTimeout);
        }

        scaleTimeout = setTimeout(() => {
          scaleSpring.set(1.0);
        }, 120);
      }
    }

    // Escuchar hover sobre enlaces, botones y formularios para interacción y visibilidad
    function setupInteractions() {
      document.addEventListener('pointerover', (e) => {
        const target = e.target.closest('a, button, [role="button"], .btn, input, select, textarea');
        if (target) {
          if (target.matches('input, textarea, select')) {
            // Ocultar cursor animado y mostrar cursor de texto nativo para escribir cómodamente
            cursorContainer.classList.add('custom-cursor-hidden');
          } else {
            // Agrandar cursor y aplicar clase hover para enlaces e interactivos
            scaleSpring.set(1.25);
            cursorContainer.classList.add('custom-cursor-hover');
          }
        }
      });

      document.addEventListener('pointerout', (e) => {
        const target = e.target.closest('a, button, [role="button"], .btn, input, select, textarea');
        if (target) {
          if (target.matches('input, textarea, select')) {
            cursorContainer.classList.remove('custom-cursor-hidden');
          } else {
            scaleSpring.set(1.0);
            cursorContainer.classList.remove('custom-cursor-hover');
          }
        }
      });

      // Detectar cuando el puntero sale de la ventana del documento
      document.addEventListener('pointerleave', () => {
        isVisible = false;
        cursorContainer.classList.remove('custom-cursor-visible');
      });

      document.addEventListener('pointerenter', () => {
        isVisible = true;
        cursorContainer.classList.add('custom-cursor-visible');
      });
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    setupInteractions();

    // 3. Bucle de renderizado (requestAnimationFrame)
    let lastFrameTime = performance.now();

    function renderLoop(now) {
      const dt = (now - lastFrameTime) / 1000; // a segundos
      lastFrameTime = now;

      // Limitar dt máximo para evitar saltos bruscos tras suspensión de pestaña
      const cappedDt = Math.min(dt, 0.1);

      const x = xSpring.update(cappedDt);
      const y = ySpring.update(cappedDt);
      const rotation = rotationSpring.update(cappedDt);
      const scale = scaleSpring.update(cappedDt);

      // Aplicar transformaciones por GPU para máxima fluidez de pintado
      cursorContainer.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;

      requestAnimationFrame(renderLoop);
    }

    requestAnimationFrame(renderLoop);
  }

  // Inicializar solo si el dispositivo soporta puntero de ratón/fine y hover (dispositivos no táctiles)
  const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);

  function handleMediaChange(e) {
    if (e.matches) {
      if (!document.getElementById('custom-cursor')) {
        initSmoothCursor();
      }
    } else {
      // Dispositivo táctil: limpiar e inactivar
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.remove();
      }
      document.documentElement.classList.remove('custom-cursor-enabled');
    }
  }

  // Inicializar al cargar el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => handleMediaChange(mediaQuery));
  } else {
    handleMediaChange(mediaQuery);
  }

})();

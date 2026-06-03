// component/useTilt.js
import { useRef } from 'react';

/**
 * useTilt
 * Returns a ref to attach to a card element.
 * On hover the card tilts toward the cursor in 3D.
 *
 * @param {object} options
 *   maxTilt   – max degrees to tilt (default 14)
 *   scale     – how much to scale up on hover (default 1.04)
 *   glare     – show a glare overlay (default true)
 *   speed     – CSS transition duration ms (default 400)
 */
export const useTilt = ({
    maxTilt = 14,
    scale = 1.04,
    glare = true,
    speed = 400,
} = {}) => {
    const ref = useRef(null);
    const glareRef = useRef(null);

    const onMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -maxTilt;
        const rotateY = ((x - cx) / cx) * maxTilt;

        el.style.transition = `transform ${speed * 0.3}ms ease`;
        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

        if (glare && glareRef.current) {
            const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI) + 90;
            const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2) / Math.sqrt(cx ** 2 + cy ** 2);
            glareRef.current.style.opacity = String(dist * 0.28);
            glareRef.current.style.transform = `rotate(${angle}deg) scale(2.5)`;
        }
    };

    const onMouseLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transition = `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`;
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';

        if (glare && glareRef.current) {
            glareRef.current.style.opacity = '0';
        }
    };

    // Returns props to spread onto the card + a glare element to render inside
    const tiltProps = {
        ref,
        onMouseMove,
        onMouseLeave,
        style: { transformStyle: 'preserve-3d', willChange: 'transform' },
    };

    const GlareLayer = glare
        ? () => (
              <div
                  ref={glareRef}
                  style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 'inherit',
                      background:
                          'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 60%)',
                      opacity: 0,
                      pointerEvents: 'none',
                      transition: 'opacity 0.3s ease',
                      zIndex: 10,
                      overflow: 'hidden',
                  }}
              />
          )
        : null;

    return { tiltProps, GlareLayer };
};
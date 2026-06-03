import { useEffect, useRef } from 'react';
export const MouseTrail = ({ color = '#ff3366', size = 18, count = 28, thickness = false }) => {
    const circlesRef = useRef([]);

    useEffect(() => {
        const circles = document.querySelectorAll('.circle');
        if (circles.length === 0) return;
        circlesRef.current = [...circles];

        const coords = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const inputs = document.querySelectorAll('input, button, a, textarea, .btn, .nav-link, .magnetic-btn-wrapper');
        const handleOver = () => thickness && circles.forEach(c => c.classList.add('circle-thin'));
        const handleOut  = () => thickness && circles.forEach(c => c.classList.remove('circle-thin'));
        inputs.forEach(el => { el.addEventListener('mouseover', handleOver); el.addEventListener('mouseout', handleOut); });

        circles.forEach(c => { c.x = coords.x; c.y = coords.y; });

        let timeout;
        const onMove = (e) => {
            clearTimeout(timeout);
            circles.forEach(c => c.classList.remove('circle-hidden'));
            coords.x = e.clientX;
            coords.y = e.clientY;
            timeout = setTimeout(() => circles.forEach(c => c.classList.add('circle-hidden')), 2200);
        };
        window.addEventListener('mousemove', onMove);

        const onMouseDown = (e) => createSparkles(e.clientX, e.clientY, color);
        window.addEventListener('mousedown', onMouseDown);

        let animId;
        function loop() {
            let x = coords.x, y = coords.y;
            circles.forEach((circle, index) => {
                const t = (circles.length - index) / circles.length;
                circle.style.left  = (x - size / 2) + 'px';
                circle.style.top   = (y - size / 2) + 'px';
                circle.style.transform = `scale(${t * 0.95 + 0.05})`;
                circle.style.opacity = circle.classList.contains('circle-hidden') ? '0' : String(t * 0.85 + 0.08);
                circle.x = x;
                circle.y = y;
                const next = circles[index + 1] || circles[0];
                const ease = 0.18 + (index / circles.length) * 0.22;
                x += (next.x - x) * ease;
                y += (next.y - y) * ease;
            });
            animId = requestAnimationFrame(loop);
        }
        animId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animId);
            clearTimeout(timeout);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mousedown', onMouseDown);
            inputs.forEach(el => { el.removeEventListener('mouseover', handleOver); el.removeEventListener('mouseout', handleOut); });
        };
    }, [color, size, count, thickness]);

    return Array.from({ length: count }).map((_, i) => (
        <div
            key={i}
            className="circle circle-hidden"
            style={{
                background: `radial-gradient(circle at 35% 35%, ${color}ff, ${color}80 50%, ${color}10)`,
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: `0 0 ${size * 0.7}px ${color}90, 0 0 ${size * 1.4}px ${color}30`,
            }}
        />
    ));
};

function createSparkles(x, y, color) {
    const COUNT = 12;
    for (let i = 0; i < COUNT; i++) {
        const el = document.createElement('div');
        const angle = (360 / COUNT) * i;
        const dist  = 40 + Math.random() * 40;
        const size  = 4 + Math.random() * 5;
        el.style.cssText = `
            position:fixed; pointer-events:none; z-index:9998; border-radius:50%;
            width:${size}px; height:${size}px;
            background: radial-gradient(circle, ${color}, transparent);
            left:${x - size / 2}px; top:${y - size / 2}px;
            box-shadow: 0 0 6px ${color};
        `;
        document.body.appendChild(el);

        const rad = (angle * Math.PI) / 180;
        const tx  = Math.cos(rad) * dist;
        const ty  = Math.sin(rad) * dist;
        el.animate(
            [
                { transform: 'translate(0,0) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px,${ty}px) scale(0)`, opacity: 0 },
            ],
            { duration: 600, easing: 'cubic-bezier(0,0,0.2,1)', fill: 'forwards' }
        ).onfinish = () => el.remove();
    }
}
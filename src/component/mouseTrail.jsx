import { useEffect, useRef } from 'react';

export const MouseTrail = ({ color = '#ff3366', size = 24, count = 40, thickness = false }) => {
    const circlesRef = useRef([]);

    useEffect(() => {
        let circles = document.querySelectorAll('.circle');
        
        if (circles.length === 0) return;
        
        circlesRef.current = circles;
        
        const coords = { x: 0, y: 0 };
        const inputs = document.querySelectorAll('input, button, a, textarea');
        const fields = [...inputs];

        const handleMouseOver = () => {
            if (thickness) {
                circles.forEach((circle) => {
                    circle.classList.add('circle-thin');
                });
            }
        };

        const handleMouseOut = () => {
            if (thickness) {
                circles.forEach((circle) => {
                    circle.classList.remove('circle-thin');
                });
            }
        };

        fields.forEach((input) => {
            input.addEventListener('mouseover', handleMouseOver);
            input.addEventListener('mouseout', handleMouseOut);
        });

        circles.forEach(function (circle) {
            circle.x = 0;
            circle.y = 0;
        });

        let timeout;
        const handleMouseMove = function (e) {
            clearTimeout(timeout);
            circles.forEach((circle) => {
                circle.classList.remove('circle-hidden');
            });
            coords.x = e.clientX;
            coords.y = e.clientY;
            
            timeout = setTimeout(() => {
                circles.forEach((circle) => {
                    circle.classList.add('circle-hidden');
                });
            }, 2000);
        };
        
        window.addEventListener('mousemove', handleMouseMove);

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.forEach(function (circle, index) {
                circle.style.left = x - (size/2) + 'px';
                circle.style.top = y - (size/2) + 'px';
                circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
                circle.x = x;
                circle.y = y;
                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.35;
                y += (nextCircle.y - y) * 0.35;
            });

            requestAnimationFrame(animateCircles);
        }

        const animationId = requestAnimationFrame(animateCircles);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            fields.forEach((input) => {
                input.removeEventListener('mouseover', handleMouseOver);
                input.removeEventListener('mouseout', handleMouseOut);
            });
            cancelAnimationFrame(animationId);
        };
    }, [color, size, thickness, count]);

    return Array.from({ length: count }).map((_, i) => (
        <div
            key={i}
            className='circle circle-hidden'
            style={{
                background: `radial-gradient(circle, ${color}, ${color}80)`,
                width: `${size}px`,
                height: `${size}px`,
            }}></div>
    ));
};
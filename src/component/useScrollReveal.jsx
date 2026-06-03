import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.12, rootMargin = '0px 0px -60px 0px') => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, isVisible];
};

export const ScrollReveal = ({
    children,
    delay = '0s',
    from = 'bottom',
    className = '',
    style = {},
}) => {
    const [ref, visible] = useScrollReveal();

    const initialTransforms = {
        bottom: 'translateY(48px)',
        top: 'translateY(-48px)',
        left: 'translateX(-48px)',
        right: 'translateX(48px)',
        scale: 'scale(0.88)',
        fade: 'none',
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : initialTransforms[from] ?? 'translateY(48px)',
                transition: `opacity 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}, transform 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}`,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

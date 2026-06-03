// component/magneticButton.jsx
import { useRef, useState } from 'react';

/**
 * MagneticButton
 * Wraps any children in a div that magnetically attracts toward the cursor.
 *
 * Props:
 *   strength   – how strongly the element moves (default 0.35)
 *   className  – extra classes forwarded to the wrapper
 *   style      – extra inline styles forwarded to the wrapper
 *   as         – element type or component (default 'div')
 *   ...rest    – forwarded to the root element (e.g. href, onClick)
 */
export const MagneticButton = ({
    children,
    strength = 0.35,
    className = '',
    style = {},
    as: Tag = 'div',
    ...rest
}) => {
    const ref = useRef(null);
    const [transform, setTransform] = useState('translate(0px, 0px)');

    const handleMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        setTransform(`translate(${dx}px, ${dy}px)`);
    };

    const handleMouseLeave = () => {
        setTransform('translate(0px, 0px)');
    };

    return (
        <Tag
            ref={ref}
            className={`magnetic-btn-wrapper ${className}`}
            style={{
                display: 'inline-flex',
                transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                transform,
                ...style,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...rest}
        >
            {children}
        </Tag>
    );
};
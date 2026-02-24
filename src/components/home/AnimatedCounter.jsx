import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, duration = 2, suffix = '', prefix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                
                const numValue = parseInt(value.replace(/\D/g, ''));
                const increment = numValue / (duration * 60);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numValue) {
                        setCount(numValue);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, 1000 / 60);

                return () => clearInterval(timer);
            }
        }, { threshold: 0.3 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, duration]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}
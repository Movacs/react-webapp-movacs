import { useRef, useEffect } from 'react'
import { Star } from './Star';
import { defaultColor } from './starColor';

type Props = {
    numStars?: number;
    glow?: boolean;
    trails?: boolean;
    animation?: boolean;
};

const AppBackground = ({ numStars = 400, animation = true, glow = false, trails = false }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const starsRef = useRef<Star[]>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const W = canvas.width;
            const H = canvas.height;
            const hW = W / 2;
            const hH = H / 2;

            if (starsRef.current.length === 0) {
                starsRef.current = Array.from({ length: numStars }, () => {
                    return new Star({
                        ctx,
                        W,
                        H,
                        hW,
                        hH,
                        minV: 2,
                        maxV: 8,
                        color: { r: 200, g: 200, b: 255, a: 0.5 },
                        glow,
                        trails,
                    });
                });
            }
        };

        initCanvas();
        window.addEventListener('init', initCanvas);

        const animate = () => {

            if (trails) {
                ctx.fillStyle = 'rgba(4, 20, 44, 0.5)';
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'rgba(5, 27, 59, 0.88)';
            }

            ctx.fillRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach(star => star.draw());

            animationRef.current = requestAnimationFrame(animate);

        };

        animate();

        if (!animation)
            cancelAnimationFrame(animationRef.current)

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('init', initCanvas);
        };
    }, [animation]);


    return (
        <canvas
            ref={canvasRef}
            style={{
                display: 'block',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        />
    );
};

export default AppBackground
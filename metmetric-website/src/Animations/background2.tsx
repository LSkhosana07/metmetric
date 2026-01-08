import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    radius: number;
    opacity: number;
}

interface MousePosition {
    x: number | null;
    y: number | null;
}

function AdvancedNetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef<MousePosition>({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Configuration
        const particleCount = 80;
        const maxDistance = 200;
        const mouseRadius = 150;
        const zDepth = 500;

        // Initialize particles with 3D coordinates
        particlesRef.current = [];
        for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * zDepth,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                vz: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.5
            });
        }

        // Animation loop
        const animate = () => {
            if (!ctx) return;

            // Create gradient background
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width / 2
            );
            gradient.addColorStop(0, '#0d1b3a');
            gradient.addColorStop(0.5, '#0a1428');
            gradient.addColorStop(1, '#050a1a');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update particles
            particlesRef.current.forEach(particle => {
                // Move particle
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.z += particle.vz;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                if (particle.z < 0 || particle.z > zDepth) particle.vz *= -1;

                // Mouse interaction
                if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
                    const dx = mouseRef.current.x - particle.x;
                    const dy = mouseRef.current.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        particle.x += (dx / distance) * force * 1.5;
                        particle.y += (dy / distance) * force * 1.5;
                    }
                }

                // Calculate scale based on depth
                const scale = 1 - (particle.z / zDepth) * 0.6;
                const size = particle.radius * scale * 2;

                // Draw particle with glow
                const particleOpacity = particle.opacity * scale;
                
                // Outer glow
                const glowGradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, size * 3
                );
                glowGradient.addColorStop(0, `rgba(21, 181, 248, ${particleOpacity * 0.8})`);
                glowGradient.addColorStop(0.4, `rgba(21, 181, 248, ${particleOpacity * 0.3})`);
                glowGradient.addColorStop(1, 'rgba(21, 181, 248, 0)');
                
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Core particle
                ctx.fillStyle = `rgba(21, 181, 248, ${particleOpacity})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw connections with triangular emphasis
            const sortedParticles = [...particlesRef.current].sort((a, b) => b.z - a.z);
            
            for (let i = 0; i < sortedParticles.length; i++) {
                for (let j = i + 1; j < sortedParticles.length; j++) {
                    const p1 = sortedParticles[i];
                    const p2 = sortedParticles[j];
                    
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dz = p1.z - p2.z;
                    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.4;
                        const avgZ = (p1.z + p2.z) / 2;
                        const scale = 1 - (avgZ / zDepth) * 0.5;
                        
                        // Create gradient for the line
                        const lineGradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                        lineGradient.addColorStop(0, `rgba(21, 181, 248, ${opacity * scale * p1.opacity})`);
                        lineGradient.addColorStop(1, `rgba(21, 181, 248, ${opacity * scale * p2.opacity})`);
                        
                        ctx.strokeStyle = lineGradient;
                        ctx.lineWidth = 1.5 * scale;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();

                        // Draw triangles for close triplets
                        for (let k = j + 1; k < sortedParticles.length; k++) {
                            const p3 = sortedParticles[k];
                            const d13 = Math.sqrt((p1.x - p3.x) ** 2 + (p1.y - p3.y) ** 2 + (p1.z - p3.z) ** 2);
                            const d23 = Math.sqrt((p2.x - p3.x) ** 2 + (p2.y - p3.y) ** 2 + (p2.z - p3.z) ** 2);
                            
                            if (d13 < maxDistance && d23 < maxDistance) {
                                const triOpacity = opacity * 0.15;
                                ctx.fillStyle = `rgba(21, 181, 248, ${triOpacity})`;
                                ctx.beginPath();
                                ctx.moveTo(p1.x, p1.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.lineTo(p3.x, p3.y);
                                ctx.closePath();
                                ctx.fill();
                            }
                        }
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Mouse handlers
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
}

export default AdvancedNetworkBackground;
import React, { useEffect, useRef } from 'react';

interface Star3D {
  x: number;
  y: number;
  z: number;
  pz: number;
  size: number;
  color: string;
}

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let scrollSpeedBoost = 0;
    let lastScrollY = window.scrollY;

    const numStars = Math.min(260, Math.floor((width * height) / 5500));
    const stars: Star3D[] = [];

    const colors = ['#00f0ff', '#7000ff', '#ffffff', '#ff00aa', '#00ff88'];

    const resetStar = (star: Star3D) => {
      star.x = (Math.random() - 0.5) * width * 2;
      star.y = (Math.random() - 0.5) * height * 2;
      star.z = width;
      star.pz = width;
      star.size = 0.5 + Math.random() * 1.8;
      star.color = colors[Math.floor(Math.random() * colors.length)];
    };

    for (let i = 0; i < numStars; i++) {
      const star: Star3D = {
        x: 0,
        y: 0,
        z: 0,
        pz: 0,
        size: 1,
        color: '#ffffff',
      };
      resetStar(star);
      star.z = Math.random() * width;
      star.pz = star.z;
      stars.push(star);
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.2;
      targetMouseY = (e.clientY - height / 2) * 0.2;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      scrollSpeedBoost = Math.min(35, scrollSpeedBoost + delta * 0.6);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const baseSpeed = 2.5;

    const render = () => {
      // Smooth mouse & scroll decay
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      scrollSpeedBoost *= 0.92; // decay scroll boost smoothly
      const currentSpeed = baseSpeed + scrollSpeedBoost;

      ctx.fillStyle = '#05070e';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2 + mouseX;
      const cy = height / 2 + mouseY;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.pz = star.z;
        star.z -= currentSpeed;

        if (star.z <= 0) {
          resetStar(star);
          continue;
        }

        // 3D Projection
        const k = 250 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        const pk = 250 / star.pz;
        const prevPx = star.x * pk + cx;
        const prevPy = star.y * pk + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = Math.min(1, (1 - star.z / width) * 1.2);
          ctx.strokeStyle = star.color;
          ctx.lineWidth = star.size * k * (1 + scrollSpeedBoost * 0.05);
          ctx.globalAlpha = alpha;

          // Motion streak line (lengthens during scroll warp speed)
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(prevPx, prevPy);
          ctx.stroke();

          // Star center core glow
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(px, py, star.size * k * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

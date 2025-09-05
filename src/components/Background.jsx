import { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Data Science related symbols and formulas
    const symbols = [
      '∑', 'μ', 'σ', 'π', '∫', '∇', 'λ', 'β',  // Mathematical symbols
      '📊', '📈', '📉',  // Charts
      'df', 'pd', 'np',  // Python libraries
      'SQL', 'API',      // Data tools
      '[ ]', '{ }',      // Arrays/Objects
      'AI', 'ML',        // AI/ML terms
      'R²', 'p<0.05'     // Statistics
    ];
    
    // Particles array
    let particles = [];

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 10,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          opacity: Math.random() * 0.5 + 0.1,
          rotation: Math.random() * Math.PI * 2,
          color: `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.4)` // Blue to purple range
        });
      }
    };

    // Draw simple graph
    const drawGraph = (x, y, size) => {
      ctx.beginPath();
      ctx.moveTo(x - size/2, y + size/2);
      
      // Generate random data points
      const points = [];
      for(let i = 0; i < 5; i++) {
        points.push({
          x: x - size/2 + (size/4) * i,
          y: y + size/2 - Math.random() * size
        });
      }
      
      // Draw line through points
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for(let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      
      ctx.strokeStyle = 'rgba(99, 179, 237, 0.3)';
      ctx.stroke();
    };

    // Draw scatter plot
    const drawScatter = (x, y, size) => {
      for(let i = 0; i < 5; i++) {
        const dotX = x - size/2 + Math.random() * size;
        const dotY = y - size/2 + Math.random() * size;
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 179, 237, 0.3)';
        ctx.fill();
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += 0.002;

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (particle.symbol === '📈' || particle.symbol === '📉' || particle.symbol === '📊') {
          // Draw actual mini graph instead of emoji
          if (Math.random() < 0.5) {
            drawGraph(0, 0, particle.size * 2);
          } else {
            drawScatter(0, 0, particle.size * 2);
          }
        } else {
          // Draw text symbol
          ctx.font = `${particle.size}px monospace`;
          ctx.fillStyle = particle.color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.symbol, 0, 0);
        }
        
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-header-bg via-header-bg to-header-bg/90"
    />
  );
};

export default Background;
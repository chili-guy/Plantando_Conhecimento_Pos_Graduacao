import { useEffect, useRef } from "react";

interface Molecule {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

export function FloatingBubbles({ count = 10, color = "rgba(248, 156, 34, 0.08)" }: { count?: number; color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const moleculesRef = useRef<Molecule[]>([]);
  const animationFrameRef = useRef<number>();

  // Draw CBD-like molecule structure (hexagonal ring with atoms)
  const drawMolecule = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    opacity: number,
    rotation: number
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    // Hexagonal ring (benzene-like structure)
    const radius = size * 0.6;
    const atomSize = size * 0.15;

    // Draw carbon atoms in hexagon
    const hexagonPoints = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      hexagonPoints.push({ x: px, y: py });

      // Draw atom (carbon)
      const atomGradient = ctx.createRadialGradient(px, py, 0, px, py, atomSize);
      atomGradient.addColorStop(0, color.replace("0.08", (opacity * 2).toString()));
      atomGradient.addColorStop(0.5, color.replace("0.08", opacity.toString()));
      atomGradient.addColorStop(1, color.replace("0.08", "0"));

      ctx.beginPath();
      ctx.arc(px, py, atomSize, 0, Math.PI * 2);
      ctx.fillStyle = atomGradient;
      ctx.fill();

      // Outer glow
      ctx.beginPath();
      ctx.arc(px, py, atomSize * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = color.replace("0.08", (opacity * 0.3).toString());
      ctx.fill();
    }

    // Draw bonds (lines connecting atoms)
    ctx.strokeStyle = color.replace("0.08", (opacity * 0.4).toString());
    ctx.lineWidth = size * 0.05;
    ctx.lineCap = "round";

    for (let i = 0; i < hexagonPoints.length; i++) {
      const next = (i + 1) % hexagonPoints.length;
      ctx.beginPath();
      ctx.moveTo(hexagonPoints[i].x, hexagonPoints[i].y);
      ctx.lineTo(hexagonPoints[next].x, hexagonPoints[next].y);
      ctx.stroke();
    }

    // Central atom (optional, for more CBD-like appearance)
    const centralGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, atomSize * 0.8);
    centralGradient.addColorStop(0, color.replace("0.08", (opacity * 1.5).toString()));
    centralGradient.addColorStop(1, color.replace("0.08", "0"));

    ctx.beginPath();
    ctx.arc(0, 0, atomSize * 0.8, 0, Math.PI * 2);
    ctx.fillStyle = centralGradient;
    ctx.fill();

    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize molecules
    moleculesRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 40 + 25,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.15 + 0.05,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      moleculesRef.current.forEach((molecule) => {
        // Update position
        molecule.x += molecule.speedX;
        molecule.y += molecule.speedY;
        molecule.rotation += molecule.rotationSpeed;

        // Bounce off edges
        if (molecule.x < -100 || molecule.x > canvas.width + 100) molecule.speedX *= -1;
        if (molecule.y < -100 || molecule.y > canvas.height + 100) molecule.speedY *= -1;

        // Keep molecules in bounds with margin
        molecule.x = Math.max(-100, Math.min(canvas.width + 100, molecule.x));
        molecule.y = Math.max(-100, Math.min(canvas.height + 100, molecule.y));

        // Draw molecule
        drawMolecule(ctx, molecule.x, molecule.y, molecule.size, molecule.opacity, molecule.rotation);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}


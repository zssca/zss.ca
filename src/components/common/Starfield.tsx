"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  o: number;
  color: number;
  phase: number; // For twinkle effect
}

const Starfield: React.FC = () => {
  // Increased the number of stars from 2500 to 5000 for a denser starfield.
  const numStars = 5000;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animateRef = useRef<boolean>(true);
  const focalLength = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const c = canvas.getContext("2d", { alpha: false });
    if (!c) return;

    // Initialize stars with random positions, colors, opacities, and twinkle phase.
    const initializeStars = () => {
      starsRef.current = [];
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          o: Math.random() * 0.7 + 0.3,
          color: Math.random() * 360,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Update the position of each star.
    const moveStars = () => {
      for (const star of starsRef.current) {
        // Move the star toward the viewer.
        star.z -= 0.2 + (star.z / canvas.width) * 1.2;
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.o = Math.random() * 0.7 + 0.3;
          star.color = Math.random() * 360;
          star.phase = Math.random() * Math.PI * 2;
        }
      }
    };

    // Draw the stars and background.
    const drawStars = (time: number) => {
      // Resize canvas if window dimensions have changed.
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        focalLength.current = canvas.width * 2;
        initializeStars();
      }

      // --- Black Background ---
      // Clear the canvas with a solid black fill.
      c.globalCompositeOperation = "source-over";
      c.fillStyle = "#000";
      c.fillRect(0, 0, canvas.width, canvas.height);

      // --- Draw Stars ---
      // Use additive blending for a glowing effect.
      c.globalCompositeOperation = "lighter";

      for (const star of starsRef.current) {
        // Perspective transformation for depth.
        const depthFactor = focalLength.current / star.z;
        const pixelX = (star.x - canvas.width / 2) * depthFactor + canvas.width / 2;
        const pixelY = (star.y - canvas.height / 2) * depthFactor + canvas.height / 2;
        const radius = Math.min(3.5, 0.6 * depthFactor);

        // Twinkle effect via a sine wave based on time and each star's phase.
        const twinkle = 0.75 + 0.25 * Math.sin(time / 200 + star.phase);
        const finalOpacity = star.o * twinkle;

        // Create a radial gradient for each star.
        const starGradient = c.createRadialGradient(pixelX, pixelY, 0, pixelX, pixelY, radius);
        starGradient.addColorStop(0, `hsla(${star.color}, 80%, 85%, ${finalOpacity})`);
        starGradient.addColorStop(1, `hsla(${star.color}, 60%, 60%, 0)`);

        c.beginPath();
        c.arc(pixelX, pixelY, radius, 0, Math.PI * 2);
        c.fillStyle = starGradient;
        c.fill();
      }
    };

    // Animation loop using the timestamp from requestAnimationFrame.
    const animate = (time: number) => {
      if (animateRef.current) {
        requestAnimationFrame(animate);
        moveStars();
        drawStars(time);
      }
    };

    // Handle canvas resize.
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      focalLength.current = canvas.width * 2;
      initializeStars();
    };

    // Initial setup.
    handleResize();
    requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      animateRef.current = false;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default Starfield;

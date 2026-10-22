import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn.ts";

interface PixelTenProps {
  text?: string;
  className?: string;
  color?: string;
  accent?: string;
}

interface Dot {
  hx: number;
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  accent: boolean;
}

// Текст из квадратиков: время от времени сами разлетаются и собираются обратно
const PixelTen = ({
  text = "10",
  className,
  color = "#0a0a0a",
  accent = "#93ABD9",
}: PixelTenProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let dots: Dot[] = [];
    let cell = 10;
    let w = 0;
    let h = 0;
    let raf = 0;

    const build = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = 34;
      cell = w / cols;
      const rows = Math.floor(h / cell);
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const o = off.getContext("2d")!;
      o.fillStyle = "#000";
      o.textAlign = "center";
      o.textBaseline = "middle";
      o.font = `bold ${rows * 0.95}px sans-serif`;
      o.fillText(text, cols / 2, rows / 2 + 1);
      const data = o.getImageData(0, 0, cols, rows).data;

      const old = dots;
      dots = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (data[(y * cols + x) * 4 + 3] > 110) {
            const hx = x * cell;
            const hy = y * cell;
            const prev = old[dots.length];
            dots.push({
              hx,
              hy,
              x: prev?.x ?? Math.random() * w,
              y: prev?.y ?? Math.random() * h,
              vx: 0,
              vy: 0,
              accent: Math.random() < 0.08,
            });
          }
        }
      }
      if (reduced) dots.forEach((d) => ((d.x = d.hx), (d.y = d.hy)));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const size = cell * 0.86;
      for (const d of dots) {
        if (!reduced) {
          d.vx += (d.hx - d.x) * 0.045;
          d.vy += (d.hy - d.y) * 0.045;
          d.vx *= 0.82;
          d.vy *= 0.82;
          d.x += d.vx;
          d.y += d.vy;
        }
        ctx.fillStyle = d.accent ? accent : color;
        ctx.fillRect(d.x, d.y, size, size);
      }
      raf = requestAnimationFrame(draw);
    };

    // «взрыв» из случайной точки — анимация живёт без мыши
    const burst = setInterval(() => {
      if (reduced || !dots.length) return;
      const c = dots[Math.floor(Math.random() * dots.length)];
      const r = cell * 7;
      for (const d of dots) {
        const dx = d.x - c.x;
        const dy = d.y - c.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < r) {
          const f = ((r - dist) / r) * cell * 2.2;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }
      }
    }, 4000);

    // случайные «вспышки» акцентных пикселей
    const blink = setInterval(() => {
      for (let i = 0; i < 6; i++) {
        const d = dots[Math.floor(Math.random() * dots.length)];
        if (d) d.accent = Math.random() < 0.15;
      }
    }, 300);

    build();
    draw();
    const ro = new ResizeObserver(build);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(blink);
      clearInterval(burst);
      ro.disconnect();
    };
  }, [text, color, accent]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("block w-full h-full", className)}
    />
  );
};

export default PixelTen;

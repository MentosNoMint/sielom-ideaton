import { useEffect, useState } from "react";
import { cn } from "@/lib/cn.ts";

interface GlitchWordProps {
  text: string;
  className?: string;
  // как часто «перегенерируется» одна буква, мс
  interval?: number;
}

// Буквы случайно переключаются между обычным и пиксельным начертанием
const GlitchWord = ({ text, className, interval = 450 }: GlitchWordProps) => {
  const letters = Array.from(text);
  const [pixel, setPixel] = useState(() =>
    letters.map((_, i) => i % 3 === 1),
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setPixel((prev) => {
        const next = [...prev];
        const i = Math.floor(Math.random() * next.length);
        next[i] = !next[i];
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <span className={cn("inline-flex", className)} aria-label={text}>
      {letters.map((ch, i) => (
        // оба начертания в одной ячейке: ширина = самой широкой, слово не прыгает
        <span key={i} aria-hidden className="inline-grid justify-items-center">
          <span
            className={cn(
              "font-vibe [grid-area:1/1]",
              pixel[i] && "invisible",
            )}
          >
            {ch}
          </span>
          <span
            className={cn(
              "font-wix font-medium [grid-area:1/1]",
              !pixel[i] && "invisible",
            )}
          >
            {ch}
          </span>
        </span>
      ))}
    </span>
  );
};

export default GlitchWord;

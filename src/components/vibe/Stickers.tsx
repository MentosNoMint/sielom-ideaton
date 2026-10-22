import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/cn.ts";

gsap.registerPlugin(useGSAP);

const stickers = Object.values(
  import.meta.glob<string>("../../assets/images/*.png", {
    eager: true,
    import: "default",
  }),
);

// места для стикеров вокруг заголовка, в процентах от его блока; scale — разброс размера
const SLOTS = [
  { left: "-12%", top: "-18%", rotate: -14, scale: 1.15 },
  { left: "42%", top: "-26%", rotate: 10, scale: 0.8 },
  { left: "100%", top: "4%", rotate: 12, scale: 0.9 },
  // эти два ложатся прямо на буквы
  { left: "30%", top: "26%", rotate: -8, scale: 1 },
  { left: "-8%", top: "58%", rotate: 6, scale: 0.85 },
  { left: "70%", top: "52%", rotate: 16, scale: 1.3 },
];

// случайный стикер, которого сейчас нет на экране
const pick = (used: string[]) => {
  const free = stickers.filter((src) => !used.includes(src));
  return free[Math.floor(Math.random() * free.length)];
};

const initial = [...stickers].sort(() => Math.random() - 0.5);

interface StickersProps {
  className?: string;
  // размер стикера
  size?: string;
}

// Стикеры «прилепляются» на заголовок и по очереди сменяют друг друга
const Stickers = ({ className, size = "9rem" }: StickersProps) => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const els = gsap.utils.toArray<HTMLImageElement>(".sticker");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(els, { scale: 1, opacity: 1 });
        return;
      }

      gsap.fromTo(
        els,
        { scale: 0, opacity: 0, rotate: "-=40" },
        {
          scale: 1,
          opacity: 1,
          rotate: "+=40",
          duration: 0.6,
          ease: "back.out(2.2)",
          stagger: 0.18,
          delay: 0.4,
        },
      );

      let last = -1;
      const swap = () => {
        let i = Math.floor(Math.random() * els.length);
        if (i === last) i = (i + 1) % els.length;
        last = i;
        const el = els[i];
        const base = SLOTS[i].rotate;
        gsap
          .timeline()
          .to(el, { scale: 0, rotate: base + 60, duration: 0.3, ease: "back.in(2)" })
          .call(() => {
            el.src = pick(els.map((e) => e.getAttribute("src") ?? ""));
          })
          .fromTo(
            el,
            { scale: 0, rotate: base - 60 },
            { scale: 1, rotate: base, duration: 0.55, ease: "back.out(2.4)" },
          );
      };
      const id = setInterval(swap, 2200);
      return () => clearInterval(id);
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      aria-hidden
      className={cn("absolute inset-0 z-20 pointer-events-none", className)}
    >
      {SLOTS.map((s, i) => (
        <img
          key={i}
          src={initial[i % initial.length]}
          alt=""
          className="sticker absolute object-contain opacity-0 drop-shadow-[0_0.3rem_0.4rem_rgba(0,0,0,0.15)]"
          style={{
            left: s.left,
            top: s.top,
            width: `calc(${size} * ${s.scale})`,
            height: `calc(${size} * ${s.scale})`,
            rotate: `${s.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default Stickers;

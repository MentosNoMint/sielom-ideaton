import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const imageNames = ["fish-bob", "bread", "fish-boots", "duck", "fish-flower", "floor", "cat", "flower-sticker", "hamster", "banana-rip", "parrot-skate", "star", "package", "lemon", "two-finger", "star-logo", "cat-shark", "glasses"];
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const tl = useRef(gsap.timeline({ duration: 0.4 }));

    const points = [
        {x: "30rem", y: "12.5rem"},
        {x: "34rem", y: "15rem"},
        {x: "36rem", y: "17rem"},
        { x: "34rem", y: "20rem" },
        { x: "35rem", y: "23rem" },
    ];

    useGSAP(() => {
        points.forEach((point, i) => {
            const el = imgRefs.current[i];

            if (!el) return;

            gsap.set(el, {
                opacity: 0,
                scale: 0.5,
                x: point.x,
                y: point.y,
            });

            const start = i * 0.12;
            const hideAt = start + 0.9;

            tl.current.to(
                el,
                {
                    duration: 0.3,
                    opacity: 1,
                    scale: 1,
                    x: point.x,
                    y: point.y,
                },
                start
            );

            tl.current.to(
                el,
                {
                    duration: 0.3,
                    opacity: 0,
                },
                hideAt
            );
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative z-50">
            {points.map((_, i: number) => {
                const imgName = imageNames[i % imageNames.length];
                return (
                    <img
                        key={i}
                        ref={(el) => {
                            imgRefs.current[i] = el;
                        }}
                        src={`src/assets/images/${imgName}.png`}
                        className="max-w-35 max-h-35 photo absolute"
                        alt="icon"
                    />
                );
            })}
        </div>
    );
};

export default Preloader;

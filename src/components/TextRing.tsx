import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface TextRingProps {
    text?: string;
    repeat?: number;
    radius?: number; // Значение в REM
    className?: string;
}

export const TextRing: React.FC<TextRingProps> = ({
                                                      text = "sielom",
                                                      repeat = 12,
                                                      radius = 30,
                                                      className = "",
                                                  }) => {
    const ringRef = useRef<HTMLDivElement>(null);

    const items = Array.from({ length: repeat }, (_, i) => i);
    const angleStep = 360 / repeat;

    useGSAP(() => {
        if (!ringRef.current) return;

        gsap.to(ringRef.current, {
            rotationY: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
        });
    }, { scope: ringRef });

    return (
        <div className={`absolute flex items-center justify-center overflow-hidden h-[12rem] w-full text-white ${className}`}>
            <div className="perspective-[100rem] relative flex items-center justify-center">

                <div
                    className="transform-style-3d rotate-x-[5deg] -rotate-z-[15deg]"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <div
                        ref={ringRef}
                        className="relative transform-style-3d"
                        style={{
                            transformStyle: "preserve-3d",
                            width: "10rem",
                            height: "5rem"
                        }}
                    >
                        {items.map((i) => (
                            <div
                                key={i}
                                className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-bold uppercase whitespace-nowrap backface-visible"
                                style={{
                                    transform: `rotateY(${i * angleStep}deg) translateZ(${radius}rem)`,
                                    fontSize: "2.25rem",
                                }}
                            >
                                <span className="text-[#93ABD9] font-epil-normal flex items-center gap-[1rem]">
                                    {text}
                                    <span>•</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

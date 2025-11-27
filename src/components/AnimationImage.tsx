import {useRef, useState, useEffect} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

const AnimationImage = () => {
    const imageNames = ["res", "alien", "apple", "banana-rip", "bread", "cat", "cat-bread", "cat-fish", "cat-shark", "dog-hinkali", "duck", "energy", "fish-beach", "fish-bob", "fish-bob", "fish-boots", "fish-flower", "floor", "flower-sticker", "fruits", "glasses", "hamster", "key", "kodak", "lemon", "package", "pacmen", "parrot-skate", "star", "star-logo", "two-finger"];

    const imageSize = 12;
    const animationLimitRef = useRef(null);
    const animationLimitRefRight = useRef(null);
    const [activeCheckpoint, setActiveCheckpoint] = useState(0);

    const countAdditionalTranslateY = 50;

    const [imagePairs] = useState(() => {
        return Array.from({length: imageNames.length}, () => {
            const shuffled = [...imageNames].sort(() => Math.random() - 0.5);
            return [shuffled[0], shuffled[1]];
        });
    });

    const [imagePairsRight] = useState(() => {
        return Array.from({length: imageNames.length}, () => {
            const shuffled = [...imageNames].sort(() => Math.random() - 0.5);
            return [shuffled[0], shuffled[1]];
        });
    });

    const TOTAL_SLIDES = imagePairs.length - 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCheckpoint((prev) => {
                return prev >= TOTAL_SLIDES ? 1 : prev + 1;
            });

        }, 5000);

        return () => clearInterval(interval);
    }, [TOTAL_SLIDES]);

    useGSAP(() => {
        const stepSize = 100 + countAdditionalTranslateY;
        const totalScrollY = activeCheckpoint * stepSize;

        if (animationLimitRef.current) {
            gsap.to(animationLimitRef.current, {
                y: `-${totalScrollY}%`,
                duration: 1.2,
                ease: 'power3.out',
            });
        }

        if (animationLimitRefRight.current) {
            gsap.to(animationLimitRefRight.current, {
                y: `${totalScrollY}%`,
                duration: 1.2,
                ease: 'power3.out',
            });
        }
    }, {dependencies: [activeCheckpoint]});

    return (
        <div className="w-full h-full">
            <div
                className="absolute bottom-20 -left-20 w-full animation-limit overflow-hidden"
                style={{height: `${imageSize + 2.5}rem`}}
            >
                <div className="w-full h-full relative" ref={animationLimitRef}>
                    {imagePairs.map((pair, i) => {
                        const translateY = i * (100 + countAdditionalTranslateY);

                        return (
                            <div className="w-full h-full absolute"
                                 style={{transform: `translateY(${translateY}%)`}} key={i}>
                                <img
                                    src={`/src/assets/images/${pair[0]}.png`}
                                    className="absolute -rotate-20 object-contain"
                                    style={{
                                        width: `${imageSize}rem`,
                                        height: `${imageSize}rem`
                                    }}
                                    alt="icon"
                                />
                                <img
                                    src={`/src/assets/images/${pair[1]}.png`}
                                    className="absolute rotate-20 left-40 object-contain"
                                    style={{
                                        width: `${imageSize}rem`,
                                        height: `${imageSize}rem`
                                    }}
                                    alt="icon"/>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className="absolute bottom-0 right-0 animation-limit w-full overflow-hidden"
                style={{height: `${imageSize + 8}rem`}}
            >
                <div className="w-full h-full relative" ref={animationLimitRefRight}>
                    {imagePairsRight.map((pair, i) => {
                        const translateY = i * (100 + countAdditionalTranslateY);

                        return (
                            <div className="w-full h-full absolute"
                                 style={{transform: `translateY(-${translateY}%)`}} key={i}>
                                <img
                                    src={`/src/assets/images/${pair[0]}.png`}
                                    className="absolute -rotate-20 right-0 bottom-10 object-contain"
                                    style={{
                                        width: `${imageSize}rem`,
                                        height: `${imageSize}rem`
                                    }}
                                    alt="icon"
                                />
                                <img
                                    src={`/src/assets/images/${pair[1]}.png`}
                                    className="absolute rotate-20 right-30 bottom-25 object-contain"
                                    style={{
                                        width: `${imageSize}rem`,
                                        height: `${imageSize}rem`
                                    }}
                                    alt="icon"/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default AnimationImage;

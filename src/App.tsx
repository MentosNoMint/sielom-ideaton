import AnimationText from "./components/AnimationText.tsx";
import {TextRing} from "@/components/TextRing.tsx";
import {useEffect, useState} from "react";
import {cn} from "@/lib/cn.ts";

function App() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const fullScreenStyle = isFullScreen && "pt-18";

    useEffect(() => {
        const checkFullScreen = () => {
            const isFull =
                window.innerHeight === window.screen.height ||
                window.matchMedia('(display-mode: fullscreen)').matches;

            setIsFullScreen(isFull);
        };

        window.addEventListener("resize", checkFullScreen);

        checkFullScreen();

        return () => window.removeEventListener("resize", checkFullScreen);
    }, []);

    return (
        <div className="bg-black w-full h-screen">
            <div
                className={cn(`bg-[url('/src/assets/images/grid.svg')] bg-cover w-full h-full flex justify-center`, fullScreenStyle)}
            >
                <TextRing className="w-full scale-50" radius={18} text="sielom"/>
                <AnimationText/>
            </div>
        </div>
    )
}

export default App;

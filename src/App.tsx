import AnimationText from "./components/AnimationText.tsx";
import { TextRing } from "@/components/TextRing.tsx";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn.ts";

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullScreenStyle = isFullScreen && "-mt-6";

  useEffect(() => {
    const checkFullScreen = () => {
      const isFull =
        window.innerHeight === window.screen.height ||
        window.matchMedia("(display-mode: fullscreen)").matches;

      setIsFullScreen(isFull);
    };

    window.addEventListener("resize", checkFullScreen);

    checkFullScreen();

    return () => window.removeEventListener("resize", checkFullScreen);
  }, []);

  return (
    <div className="bg-black w-full min-h-[100dvh] overflow-x-hidden flex justify-center md:items-center relative">
      <div className="fixed w-full h-full bg-[url('/src/assets/images/grid.svg')] bg-cover"></div>
      <div className={cn("w-full h-fit flex justify-center", fullScreenStyle)}>
        <TextRing
          className="w-full scale-50 max-md:scale-30 -mt-8 max-md:mt-0"
          radius={18}
          text="sielom"
        />
        <AnimationText />
      </div>
    </div>
  );
}

export default App;

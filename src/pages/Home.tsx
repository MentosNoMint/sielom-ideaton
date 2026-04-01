import AnimationText from "../components/AnimationText.tsx";
import { TextRing } from "@/components/TextRing.tsx";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn.ts";
import Preloader from "../components/Preloader.tsx";

function Home() {
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
    // <Preloader/>
    <div className="bg-black w-full min-h-[100dvh] overflow-x-hidden flex justify-center md:items-center relative">
      <div className="fixed top-0 left-0 w-full h-screen bg-[url('/src/assets/images/grid.svg')] bg-cover bg-center bg-no-repeat"></div>
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

export default Home;

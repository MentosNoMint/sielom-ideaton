import { cn } from "@/lib/cn.ts";
import AnimationText from "@/components/AnimationText.tsx";
import { Scene } from "@/components/canvas/Scene.tsx";
import { AlienModelRender } from "@/components/canvas/alien/AlienModelRender.tsx";

function ViewPage() {
  return (
    <div className="bg-black w-full min-h-[100dvh] flex items-center justify-center flex-col">
      <div className="fixed top-0 left-0 w-full h-screen bg-[url('/src/assets/images/grid.svg')] bg-cover bg-center bg-no-repeat"></div>
      <h1 className="text-[24rem] max-md:text-[5rem] max-md:text-center text-[#F9F4CC] font-pexel z-50">
        ideaton
      </h1>
      <p className="text-[4rem] max-md:text-[1.5rem] text-[#F9F4CC] bg-[#93ABD9] px-10 py-2 font-epil-normal z-50 text-end -mt-25 max-md:-mt-5 max-md:mr-10">
        Лабаратория цифровых идей
      </p>
      <AlienModelRender />
      <Scene />
    </div>
  );
}

export default ViewPage;

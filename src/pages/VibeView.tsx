import GlitchWord from "@/components/vibe/GlitchWord.tsx";
import PixelTen from "@/components/vibe/PixelTen.tsx";
import Rabbit from "@/components/vibe/Rabbit.tsx";
import Stickers from "@/components/vibe/Stickers.tsx";
import GridBg from "@/components/vibe/GridBg.tsx";
import Logo from "@/assets/images/logo.svg";

function VibeView() {
  return (
    <div className="bg-paper text-ink font-epil-normal w-full h-[100dvh] overflow-hidden relative">
      <GridBg />

      <div className="fixed top-10 left-10 right-10 max-md:inset-x-4 max-md:top-4 z-20 flex justify-between items-start">
        <img src={Logo} alt="sielom" className="h-24 max-md:h-12 brightness-0" />
        <p className="bg-sky-soft px-4 py-2 text-4xl max-md:text-sm leading-tight text-end">
          Лаборатория ИИ-инженерии
          <br />
          10 лет sielom
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center gap-20 max-md:flex-col max-md:gap-4 z-10 mt-16">
        <h1 className="relative text-[19rem] max-md:text-[5rem] leading-[0.85] tracking-tight">
          <Stickers size="10rem" />
          <GlitchWord text="Вайбо" interval={350} />
          <br />
          <GlitchWord text="тон" interval={500} />
          <span className="font-epil-bold text-[8rem] max-md:text-[2.25rem] tracking-normal ml-10 max-md:ml-3">
            2026
          </span>
        </h1>
        <div className="w-[50rem] max-md:w-72">
          <div className="aspect-[4/3] relative">
            <PixelTen className="opacity-40" />
            <Rabbit className="absolute inset-0" />
          </div>
          <p className="w-fit ml-auto bg-sky-soft px-5 py-2 text-5xl max-md:text-lg -mt-20 max-md:-mt-7 relative">
            лет институту
          </p>
        </div>
      </div>
    </div>
  );
}

export default VibeView;

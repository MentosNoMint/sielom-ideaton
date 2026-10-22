import GlitchWord from "@/components/vibe/GlitchWord.tsx";
import PixelTen from "@/components/vibe/PixelTen.tsx";
import Rabbit from "@/components/vibe/Rabbit.tsx";
import Stickers from "@/components/vibe/Stickers.tsx";
import GridBg from "@/components/vibe/GridBg.tsx";
import Logo from "@/assets/images/logo.svg";
import { VIBE } from "@/config/vibe.ts";

const ticker = "10 sielom • ";

function Vibe() {
  return (
    <div className="bg-paper text-ink min-h-[100dvh] w-full overflow-x-hidden relative font-epil-normal">
      <GridBg />

      <header className="relative z-10 flex items-center justify-between px-10 max-md:px-4 py-6">
        <img src={Logo} alt="sielom" className="h-20 max-md:h-12 brightness-0" />
        <a
          href={VIBE.registrationUrl}
          className="text-[1.5rem] max-md:text-sm border-b border-ink hover:text-sky hover:border-sky transition-colors"
        >
          Регистрация →
        </a>
      </header>

      <main className="relative z-10 px-10 max-md:px-4">
        <section className="grid grid-cols-12 gap-x-6 items-start pt-10 max-md:pt-4">
          <div className="col-span-7 max-md:col-span-12">
            <h1 className="relative w-fit ml-[8rem] max-md:ml-[3rem] mt-[7rem] max-md:mt-[3rem] leading-[0.85] text-[17rem] max-md:text-[5.2rem] tracking-tight">
              <Stickers size="9rem" />
              <GlitchWord text="Вайба" />
              <br />
              <GlitchWord text="тон" interval={600} />
              {/* год рядом с последней строкой, как подпись на референсе */}
              <span className="font-epil-bold text-[7rem] max-md:text-[2.25rem] tracking-normal ml-8 max-md:ml-3">
                2026
              </span>
            </h1>
          </div>

          <div className="col-span-5 max-md:col-span-12 max-md:mt-10 flex flex-col gap-6">
            <p className="self-start bg-sky-soft px-2 py-1 text-[1.5rem] max-md:text-sm leading-snug">
              Хакатон, где код пишет ИИ,
              <br />а идеи и вайб — ваши
            </p>
            <div className="aspect-[4/3] w-full relative">
              <PixelTen className="opacity-40" />
              <Rabbit className="absolute inset-0" />
            </div>
            <p className="self-end bg-sky-soft px-4 py-1.5 text-[2.5rem] max-md:text-base -mt-20 max-md:-mt-7 relative">
              лет институту
            </p>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-6 pt-24 pb-20 max-md:pt-12 max-md:pb-10 items-end">
          <p className="col-span-6 max-md:col-span-12 text-[1.75rem] max-md:text-base leading-snug">
            Собираете команду, получаете задачу и за один день превращаете идею
            в работающий продукт — промптами, а не строчками кода. Решает не
            скорость печати, а умение думать, формулировать и договариваться с
            машиной.
          </p>
          <div className="col-span-6 max-md:col-span-12 flex md:justify-end">
            <a
              href={VIBE.registrationUrl}
              className="group inline-flex items-center gap-4 bg-ink text-paper px-10 py-6 max-md:px-6 max-md:py-4 text-[2.25rem] max-md:text-lg hover:bg-sky transition-colors"
            >
              <span className="font-pexel">&gt;_</span>
              Ворваться в вайб
            </a>
          </div>
        </section>
      </main>

      <div className="relative z-10 border-y border-ink overflow-hidden py-4 bg-paper">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] animate-marquee">
          {[0, 1].map((k) => (
            <span
              key={k}
              aria-hidden={k === 1}
              className="font-pexel text-[3rem] max-md:text-2xl whitespace-nowrap pr-4"
            >
              {ticker.repeat(12)}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Vibe;

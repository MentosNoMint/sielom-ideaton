import GlitchWord from "@/components/vibe/GlitchWord.tsx";
import PixelTen from "@/components/vibe/PixelTen.tsx";
import Rabbit from "@/components/vibe/Rabbit.tsx";
import Stickers from "@/components/vibe/Stickers.tsx";
import GridBg from "@/components/vibe/GridBg.tsx";
import Logo from "@/assets/images/logo.svg";
import { VIBE } from "@/config/vibe.ts";
import { useEventState, type TeamData } from "@/lib/useEventState.ts";
import { cn } from "@/lib/cn.ts";

interface TeamCornerProps {
  label: string;
  team: TeamData;
  align: "left" | "right";
  live?: boolean;
}

const TeamCorner = ({ label, team, align, live }: TeamCornerProps) => (
  <div
    className={cn(
      "fixed bottom-10 z-20 max-w-[40%] max-md:bottom-5 max-md:max-w-[45%]",
      align === "left" ? "left-10 max-md:left-4" : "right-10 max-md:right-4 text-end",
    )}
  >
    <p
      className={cn(
        "inline-flex items-center gap-3 px-2 py-1 uppercase tracking-wider text-2xl max-md:text-xs",
        live ? "bg-ink text-paper" : "bg-sky-soft",
      )}
    >
      {live && <span className="size-3 max-md:size-2 bg-sky animate-pulse" />}
      {label}
    </p>
    <p className="text-6xl max-md:text-2xl mt-3 leading-none">{team.name}</p>
    <p className="text-3xl max-md:text-base mt-3 opacity-70">
      {team.topic ? `проект «${team.topic.title}»` : "Тема не назначена"}
    </p>
  </div>
);

// /view?demo — показать углы с тестовыми командами
const DEMO_TEAMS = {
  nextTeam: {
    id: "demo-next",
    name: "Промпт-инженеры",
    topic: { id: "t1", title: "ИИ-расписание", description: "" },
  },
  currentTeam: {
    id: "demo-current",
    name: "Vibe Coders",
    topic: { id: "t2", title: "Бот для абитуриентов", description: "" },
  },
};

function VibeView() {
  const live = useEventState(VIBE.eventId);
  const isDemo = new URLSearchParams(window.location.search).has("demo");
  const data = isDemo ? DEMO_TEAMS : live;

  return (
    <div className="bg-paper text-ink font-epil-normal w-full h-[100dvh] overflow-hidden relative">
      <GridBg />

      <div className="fixed top-10 left-10 right-10 max-md:inset-x-4 max-md:top-4 z-20 flex justify-between items-start">
        <img src={Logo} alt="sielom" className="h-24 max-md:h-12 brightness-0" />
        <p className="bg-sky-soft px-4 py-2 text-4xl max-md:text-sm leading-tight text-end">
          Лаборатория вайб-кодинга
          <br />
          10 лет sielom
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center gap-20 max-md:flex-col max-md:gap-4 z-10 -mt-16">
        <h1 className="relative text-[19rem] max-md:text-[5rem] leading-[0.85] tracking-tight">
          <Stickers size="10rem" />
          <GlitchWord text="Вайба" interval={350} />
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

      {data?.nextTeam && (
        <TeamCorner label="Готовится команда" team={data.nextTeam} align="left" />
      )}
      {data?.currentTeam && (
        <TeamCorner
          label="Выступает команда"
          team={data.currentTeam}
          align="right"
          live
        />
      )}
    </div>
  );
}

export default VibeView;

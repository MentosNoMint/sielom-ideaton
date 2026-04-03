import { useState, useEffect } from "react";
import { Scene } from "@/components/canvas/Scene.tsx";
import { AlienModelRender } from "@/components/canvas/alien/AlienModelRender.tsx";
import AnimationImage from "@/components/AnimationImage";
import Logo from "@/assets/images/logo.svg";

interface TeamData {
  id: string;
  name: string;
  topic: {
    id: string;
    title: string;
    description: string;
  } | null;
}

interface ApiResponse {
  success: boolean;
  data: {
    event: {
      id: string;
      title: string;
    };
    currentTeam: TeamData | null;
    nextTeam: TeamData | null;
  };
}

function ViewPage() {
  const [data, setData] = useState<ApiResponse["data"] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "/api/public/events/51e5cbe8-f0ff-4060-86a3-cdb376c10f04/current-state",
      );
      const result: ApiResponse = await response.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch event state:", error);
    }
  };

  useEffect(() => {
    void fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full min-h-[100dvh] flex items-center justify-center flex-col relative overflow-hidden">
      <AnimationImage
        leftClassName="absolute top-120 max-md:top-16 left-40 max-md:left-9 w-full animation-limit overflow-hidden z-60"
        rightClassName="absolute top-150 max-md:top-0 right-40 max-md:right-10 animation-limit w-full overflow-hidden z-60"
      />
      <div className="fixed top-0 left-0 w-full h-screen bg-[url('/src/assets/images/grid.svg')] bg-cover bg-center bg-no-repeat"></div>
      <h1 className="text-[24rem] max-md:text-[5rem] max-md:text-center text-[#F9F4CC] font-pexel z-10">
        ideaton
      </h1>
      <div className="flex gap-4 items-stretch z-10 -mt-25 max-md:-mt-5 h-28 max-md:h-14">
        <p className="text-[4rem] max-md:text-[2rem] text-[#F9F4CC] bg-[#93ABD9] px-10 flex items-center justify-end font-epil-normal whitespace-nowrap">
          Лаборатория цифровых идей
        </p>
        <div className="bg-[#93ABD9] px-10 flex items-center justify-center overflow-hidden">
          <img
            src={Logo}
            alt="Logo"
            className="h-20 max-md:h-8 brightness-0 invert object-contain"
          />
        </div>
      </div>
      <AlienModelRender />
      <Scene />

      {/* Next Team - Bottom Left (Preparing) */}
      {data?.nextTeam && (
        <div className="fixed bottom-10 left-10 z-50 max-md:bottom-5 max-md:left-5">
          <p className="text-[#93ABD9] font-epil-normal text-2xl max-md:text-sm uppercase tracking-wide">
            Готовится команда
          </p>
          <p className="text-[#F9F4CC] font-epil-normal text-6xl max-md:text-2xl mt-1">
            {data.nextTeam.name}
          </p>
          <p className="text-[#F9F4CC] font-epil-normal text-3xl max-md:text-lg opacity-80 mt-2">
            {data.nextTeam.topic
              ? `проект «${data.nextTeam.topic.title}»`
              : "Тема не назначена"}
          </p>
        </div>
      )}

      {/* Current Team - Bottom Right (Performing) */}
      {data?.currentTeam && (
        <div className="fixed bottom-10 right-10 z-50 text-end max-md:bottom-5 max-md:right-5">
          <p className="text-[#93ABD9] font-epil-normal text-2xl max-md:text-sm uppercase tracking-wide">
            Выступает команда
          </p>
          <p className="text-[#F9F4CC] font-epil-normal text-6xl max-md:text-2xl mt-1">
            {data.currentTeam.name}
          </p>
          <p className="text-[#F9F4CC] font-epil-normal text-3xl max-md:text-lg opacity-80 mt-2">
            {data.currentTeam.topic
              ? `проект «${data.currentTeam.topic.title}»`
              : "Тема не назначена"}
          </p>
        </div>
      )}
    </div>
  );
}

export default ViewPage;

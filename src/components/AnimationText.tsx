import AnimationImage from "@/components/AnimationImage.tsx";

const AnimationText = () => {
  return (
    <div className="relative h-fit mt-8 max-md:mt-47">
      <AnimationImage />
      <div className="flex flex-col relative">
        <h1 className="text-[24rem] max-md:text-[5rem] max-md:text-center text-[#F9F4CC] font-pexel z-50">
          ideaton
        </h1>
        <p className="text-[5rem] max-md:text-[1.5rem] text-[#F9F4CC] font-cursive z-50 text-end -mt-31 max-md:-mt-5 max-md:mr-10">
          Лабаратория цифровых идей
        </p>
      </div>
      <div className="w-full flex justify-between items-center mt-27 mb-8 max-md:mt-22 max-md:justify-center max-md:flex-col">
        <div className="md:hidden max-w-110 w-full">
          <p className="font-epil-normal px-8 text-center text-[2rem] max-md:text-[1rem] text-[#F9F4CC] max-md:leading-5 leading-10">
            Лучшие разработчики не только пишут код. Они умеют продавать идею.
            Идеатон — это твой первый питч перед реальным бизнесом. <br />{" "}
            <span className="inline-block mt-2">
              Получаешь задачу от работодателя, с командой придумываешь цифровой
              продукт и за три минуты убеждаешь жюри, что твоё решение
              лучшее.{" "}
            </span>{" "}
            <br />{" "}
            <span className="inline-block mt-2">
              Примерно так это работает у стартаперов перед инвесторами. Навык
              презентации — один из самых недооценённых в IT. Здесь его можно
              прокачать. Код на идеатоне не пишем — идеи защищаем.
            </span>{" "}
            <br /> <span className="inline-block mt-2"> Регистрация до 27 марта → ideaton.sielom.ru </span>
          </p>
        </div>
        <div className="max-w-110.5 w-full max-md:hidden">
          <p className="font-epil-normal text-[1.5rem] max-md:text-[1rem] text-[#F9F4CC] max-md:leading-5 leading-7.5">
            Лучшие разработчики не только пишут код. Они умеют продавать идею.
            Идеатон — это твой первый питч перед реальным бизнесом. Получаешь
            задачу от работодателя, с командой придумываешь цифровой продукт и
            за три минуты убеждаешь жюри, что твоё решение лучшее.
          </p>
        </div>
        <a
          href="https://forms.yandex.ru/u/69c127eeeb6146e5674db1bb"
          className="bg-[#93ABD9] px-8 py-4 max-md:px-6 max-md:py-3 cursor-pointer mt-6 max-md:mb-6"
        >
          <p className="font-epil-normal text-[#F9F4CC] text-[2rem] max-md:text-[1rem]">
            Ворваться с идеей
          </p>
        </a>
        <div className="max-w-110.5 w-full max-md:hidden">
          <p className="font-epil-normal text-[1.5rem] max-md:text-[1rem] text-end text-[#F9F4CC] max-md:leading-5  leading-7.5">
            Примерно так это работает у стартаперов перед инвесторами. Навык
            презентации — один из самых недооценённых в IT. Здесь его можно
            прокачать. Код на идеатоне не пишем — идеи защищаем. Регистрация до
            27 марта → ideaton.sielom.ru
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationText;

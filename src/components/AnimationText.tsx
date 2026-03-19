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
      <div className="w-full flex justify-between items-center mt-30 max-md:mt-22 max-md:justify-center max-md:flex-col">
        <div className="md:hidden max-w-110 w-full">
          <p className="font-epil-normal px-8 text-center text-[2rem] max-md:text-[1rem] text-[#F9F4CC] max-md:leading-5 leading-10">
            Есть мысль? Соберите команду, оформите идею и выйдите с ней на
            выступление. <br/> Идеятон будет проходить 26,27 октября в СИУэИП на
            пролетарском проспекте, 3
          </p>
        </div>
        <div className="max-w-110.5 w-full max-md:hidden">
          <p className="font-epil-normal text-[2rem] max-md:text-[1rem] text-[#F9F4CC] max-md:leading-5 leading-10">
            Идеятон будет проходить 26,27 октября в СИУэИП на пролетарском
            проспекте, 3
          </p>
        </div>
        <div className="bg-[#93ABD9] px-8 py-4 max-md:px-6 max-md:py-3 cursor-pointer mt-6 max-md:mb-6">
          <p className="font-epil-normal text-[#F9F4CC] text-[2rem] max-md:text-[1rem]">
            Ворваться с идеей
          </p>
        </div>
        <div className="max-w-110.5 w-full max-md:hidden">
          <p className="font-epil-normal text-[2rem] max-md:text-[1rem] text-end text-[#F9F4CC] max-md:leading-5  leading-10">
            Есть мысль? Соберите команду, оформите идею и выйдите с ней на
            выступление.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationText;

import AnimationImage from "./AnimationImage.tsx";

const AnimationText = () => {
    return (
        <div className="relative h-fit mt-8">
            <AnimationImage/>
            <h1 className="text-[24rem] text-[#F9F4CC] font-pexel z-50">ideaton</h1>
            <div className="w-full flex justify-between items-center absolute mt-10">
                <div className="max-w-110.5 w-full">
                    <p className="font-epil-normal text-[2rem] text-[#F9F4CC] leading-[2.5rem]">Идеятон будет проходить 26,27 октября в
                        СИУэИП на пролетарском проспекте, 3</p>
                </div>
                <div className="bg-[#93ABD9] px-8 py-4 cursor-pointer">
                    <p className="font-epil-normal text-[#F9F4CC] text-[2rem]">Ворваться с идеей</p>
                </div>
                <div className="max-w-110.5 w-full">
                    <p className="font-epil-normal text-[2rem] text-end text-[#F9F4CC] leading-[2.5rem]">Есть мысль? Соберите команду, оформите идею и выйдите с ней на выступление</p>
                </div>
            </div>
        </div>
    );
}

export default AnimationText;
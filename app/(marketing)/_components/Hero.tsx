import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/assets/documents.png"
            fill
            alt="Documents"
            className="object-contain dark:hidden"
          />
          <Image
            src="/assets/documents-dark.png"
            fill
            alt="Reading"
            className="object-contain dark:block hidden"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden lg:block">
          <Image
            src="/assets/reading.png"
            fill
            alt="Documents"
            className="object-contain dark:hidden"
          />
          <Image
            src="/assets/reading-dark.png"
            fill
            alt="Reading"
            className="object-contain dark:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

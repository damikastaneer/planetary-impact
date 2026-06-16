import Image from "next/image";

type UspCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function UspCard({ title, description, image }: UspCardProps) {
  return (
    <div className="relative h-[207px] w-full max-w-[343px] overflow-hidden rounded-card md:h-[360px] md:w-[635px] md:max-w-none">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 flex flex-col bg-black/75 p-4 md:p-8">
        <h3 className="max-w-[305px] font-sans text-[20px] font-bold leading-none text-primary md:max-w-[457px] md:text-[30px]">
          {title}
        </h3>
        <p className="mt-2 h-[126px] max-w-[311px] overflow-hidden font-display text-[14px] leading-none text-text-on-dark md:mt-4 md:h-auto md:max-w-[571px] md:text-[20px] md:leading-[1.2]">
          {description}
        </p>
        <button className="ml-auto mt-auto h-[24px] w-[95px] rounded-button bg-primary text-[12px] text-white md:h-[37px] md:w-[132px]">
          Lees meer
        </button>
      </div>
    </div>
  );
}

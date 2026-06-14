import Image from "next/image";

type UspCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function UspCard({ title, description, image }: UspCardProps) {
  return (
    <div className="relative w-[635px] h-[360px] rounded-card overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className=" absolute inset-0 flex flex-col p-8 bg-black/75">
        <h3 className="text-primary max-w-[457px] text-[30px] font-bold font-sans leading-none">
          {title}
        </h3>
        <p className="mt-4 text-text-on-dark max-w-[571px] text-[20px] font-display leading-[1.2]">
          {description}
        </p>
        <div className="ml-auto mt-auto">
          <button className="w-[132px] h-[37px] rounded-button bg-primary text-white mt-auto">
            Lees meer
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 flex h-[153px] bg-primary p-4 text-text-on-dark md:mx-auto md:mt-[104px] md:h-[350px] md:w-[1392px] md:px-[80px] md:py-[32px]">
      <div className="flex h-full flex-col">
        <div className="flex flex-col">
          <h3 className="font-display text-[16px] font-bold md:text-[24px]">
            Contact:
          </h3>

          <p className="font-display text-[14px] font-normal md:text-[24px]">
            dr. Nova Sterling
          </p>

          <p className="font-display text-[14px] font-normal underline md:text-[24px]">
            n.sterling@hhs.nl
          </p>
        </div>

        <div className="relative mt-auto h-[42px] w-[136px] md:h-[83px] md:w-[269px]">
          <Image
            src="/images/hhsLogo.png"
            alt="De Haagse Hogeschool logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="ml-auto flex h-full flex-col">
        <div className="mt-auto flex gap-2">
          <button className="flex h-[32px] w-[32px] items-center justify-center rounded-button bg-white md:h-[64px] md:w-[64px]">
            <FaLinkedin size={18} className="text-primary md:size-[37px]" />
          </button>

          <button className="flex h-[32px] w-[32px] items-center justify-center rounded-button bg-white md:h-[64px] md:w-[64px]">
            <FaInstagram size={18} className="text-primary md:size-[37px]" />
          </button>

          <button className="flex h-[32px] w-[32px] items-center justify-center rounded-button bg-white md:h-[64px] md:w-[64px]">
            <FaTwitter size={18} className="text-primary md:size-[37px]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

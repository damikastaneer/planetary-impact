import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-[1392px] h-[350px] mt-[104px] mx-auto flex py-[32px] px-[80px] bg-primary">
      <div className="flex h-full flex-col">
        <div className="flex flex-col mt-4">
          <h3 className="text-text-on-dark font-display font-bold text-[24px]">
            Contact:
          </h3>
          <p className="text-text-on-dark font-display font-normal text-[24px] ">
            dr. Nova Sterling
          </p>
          <p className="text-text-on-dark font-display font-normal text-[24px] underline">
            n.sterling@hhs.nl
          </p>
        </div>
        <div className="relative mt-auto w-[269px] h-[83px]">
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
          <button className="flex h-[64px] w-[64px] items-center justify-center rounded-button bg-white">
            <FaLinkedin size={37} className="text-primary" />
          </button>

          <button className="flex h-[64px] w-[64px] items-center justify-center rounded-button bg-white">
            <FaTwitter size={37} className="text-primary" />
          </button>

          <button className="flex h-[64px] w-[64px] items-center justify-center rounded-button bg-white">
            <FaInstagram size={37} className="text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}

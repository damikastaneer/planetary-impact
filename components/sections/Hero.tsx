import Image from "next/image";

export default function Hero() {
  return (
    <section className="md:mx-6 mt-[44px]">
      <Image
        src="/images/hero.jpg"
        alt="Planetary Impact hero"
        width={1392}
        height={464}
        className="h-[158px] md:h-[464px] w-full object-cover"
      />
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-[44px] md:mx-6">
      <Image
        src="/images/hero.jpg"
        alt="Planetary Impact hero"
        width={1392}
        height={464}
        className="h-[158px] w-full object-cover md:h-[464px]"
      />
    </section>
  );
}

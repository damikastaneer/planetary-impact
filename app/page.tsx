import Header from "@/components/layout/Header";
import UspSection from "@/components/sections/UspSection";
import RecentNews from "@/components/sections/RecentNews";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Logo */}
      <div className="mt-6 ml-6">
        <div className="flex flex-col font-sans text-[36px] tracking-[-0.025em] text-primary">
          <h1 className="mb-1 font-bold leading-[0.71]">Planetary Impact</h1>
          <span className="font-normal leading-[0.86] ">HUB</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-6 mt-[44px]">
        <Image
          src="/images/hero.jpg"
          alt="Planetary Impact hero"
          width={1392}
          height={464}
          className="h-[464px] w-full object-cover"
        />
      </section>

      {/* Header */}
      <section className="mt-10 text-header-text text-center">
        <div className="w-[780px] mx-auto">
          <h2 className="text-[64px] font-extrabold font-sans leading-none">
            “Maak werk van Mars”
          </h2>
          <p className="text-[25px] font-normal font-display mt-4">
            Mars is de toekomst. Planetary Impact helpt u met het zoeken naar
            een geschikte plek voor uw kolonie.
          </p>
        </div>
      </section>

      <UspSection />

      {/* RecentNews */}
      <section className="mx-auto mt-[66px] flex h-[304px] w-[1392px] bg-news-background px-[80px] py-6">
        <div className="flex h-[256px] w-full">
          <div className="flex h-[229px] w-[615px] flex-col gap-8">
            <div className="flex h-[41px] w-[615px] justify-between">
              <h3 className="font-sans text-[30px] font-bold leading-none underline text-text-on-dark">
                Recent nieuws
              </h3>

              <h3 className="font-display text-[24px] font-normal text-header-text">
                EVENT
              </h3>
            </div>

            <p className="h-[156px] font-display text-[20px] font-normal leading-none text-text-on-dark">
              SpaceX richt zich op 2026 voor Eerste Onbemande Mars Missie. Deze
              ontwikkeling vertegenwoordigt een grote sprong voorwaarts voor
              Mars kolonisatie infrastructuur, waarbij industrie-experts
              significante stijgingen voorspellen in Martiaanse vastgoedwaarden
              nu de Rode Planeet steeds toegankelijker wordt.
            </p>
          </div>

          <div className="relative ml-auto h-[256px] w-[270px]">
            <Image
              src="/images/news.jpg"
              alt="Recent Nieuws foto van mars"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import Image from "next/image";

export default function RecentNews() {
  return (
    <section className="mt-10 flex flex-col gap-[10px] bg-news-background px-4 py-[10px] md:mx-auto md:mt-[66px] md:h-[304px] md:w-[1392px] md:px-[80px] md:py-6">
      <div className="flex w-full flex-col gap-[10px] md:h-[256px] md:flex-row">
        <div className="flex h-[253px] w-full max-w-[343px] flex-col gap-[10px] py-[30px] md:h-[229px] md:max-w-none md:w-[615px] md:gap-8 md:py-0">
          <div className="flex flex-col gap-[10px] md:h-[41px] md:w-[615px] md:flex-row md:justify-between">
            <p className="font-sans text-[20px] font-bold leading-none underline text-white md:text-[30px]">
              Recent nieuws
            </p>

            <p className="font-display text-[16px] text-header-text md:text-[24px]">
              EVENT
            </p>
          </div>

          <p className="font-display text-[14px] leading-none text-white md:h-[156px] md:text-[20px] md:leading-[1.2]">
            SpaceX richt zich op 2026 voor Eerste Onbemande Mars Missie. Deze
            ontwikkeling vertegenwoordigt een grote sprong voorwaarts voor Mars
            kolonisatie infrastructuur, waarbij industrie-experts significante
            stijgingen voorspellen in Martiaanse vastgoedwaarden nu de Rode
            Planeet steeds toegankelijker wordt.
          </p>
        </div>

        <div className="relative h-[346px] w-full max-w-[343px] md:ml-auto md:h-[256px] md:w-[270px] md:max-w-none">
          <Image
            src="/images/news.jpg"
            alt="Recent Nieuws foto van mars"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

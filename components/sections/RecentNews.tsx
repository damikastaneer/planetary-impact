import Image from "next/image";

export default function RecentNews() {
  return (
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
            ontwikkeling vertegenwoordigt een grote sprong voorwaarts voor Mars
            kolonisatie infrastructuur, waarbij industrie-experts significante
            stijgingen voorspellen in Martiaanse vastgoedwaarden nu de Rode
            Planeet steeds toegankelijker wordt.
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
  );
}

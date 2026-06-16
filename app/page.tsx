import UspSection from "@/components/sections/UspSection";
import Hero from "@/components/sections/Hero";
import RecentNews from "@/components/sections/RecentNews";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Title */}
      <section className="mt-10 text-center text-header-text">
        <div className="mx-auto max-w-[334px] md:max-w-[780px]">
          <h2 className="font-sans text-[24px] font-bold leading-none md:font-extrabold md:text-[64px]">
            “Maak werk van Mars”
          </h2>
          <p className="mt-4 font-display text-[14px] font-normal md:text-[25px]">
            Mars is de toekomst. Planetary Impact helpt u met het zoeken naar
            een geschikte plek voor uw kolonie.
          </p>
        </div>
      </section>

      <UspSection />

      <RecentNews />
    </main>
  );
}

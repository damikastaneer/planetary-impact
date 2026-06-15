import UspSection from "@/components/sections/UspSection";
import Hero from "@/components/sections/Hero";
import RecentNews from "@/components/sections/RecentNews";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Title */}
      <section className="mt-10 text-header-text text-center">
        <div className="max-w-[334px] md:max-w-[780px] mx-auto">
          <h2 className="text-[24px] md:text-[64px] font-extrabold font-sans leading-none">
            “Maak werk van Mars”
          </h2>
          <p className="text-[14px] md:text-[25px] font-normal font-display mt-4">
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

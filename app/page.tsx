import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import UspSection from "@/components/sections/UspSection";
import RecentNews from "@/components/sections/RecentNews";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <UspSection />
      <RecentNews />
      <Footer />
    </>
  );
}

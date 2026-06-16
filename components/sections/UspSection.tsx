import UspCard from "@/components/ui/UspCard";

const uspCards = [
  {
    title: "Pioneer Nederzettingsplanning",
    description:
      "Wij verkopen je niet alleen grond - we helpen je bij het plannen van je complete Martiaanse boerderij. Onze gecertificeerde exogeologen en atmosferische ingenieurs bieden uitgebreide locatieanalyse, inclusief bodemsamenstelling rapporten.",
    image: "/images/nederzettingsplanning.jpg",
  },
  {
    title: "Juridische eigendomsverzekering",
    description:
      "ls het enige Mars vastgoedkantoor met juridische erkenning op beide planeten, garanderen wij dat je eigendomsrechten beschermd zijn onder zowel de internationale wetgeving van de Aarde als het opkomende Martiaanse Koloniale Handvest.",
    image: "/images/juridisch.jpg",
  },
  {
    title: "Infrastructuurontwikkeling",
    description:
      "Waarom wachten tot je aankomt om te beginnen met bouwen? Onze robotische bouwploegen kunnen beginnen met het voorbereiden van je grond jaren voor je aankomst. Wij bieden funderingsleggen zodat je direct van het transport shuttle op je bewoonbare eigendom kunt stappen.",
    image: "/images/infrastructuur.jpg",
  },
  {
    title: "Flexibele Betaalplannen",
    description:
      "Erkennend dat interplanetair vastgoed een significante investering is, bieden wij uitgebreide 50-jarige betaalplannen met opties om te betalen in Aarde valuta's, Mars Koloniale Credits, of belangrijke cryptocurrencies.",
    image: "/images/betaalplannen.jpg",
  },
];

export default function UspSection() {
  return (
    <section className="mt-12 px-4 md:mt-[74px] md:px-6">
      <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-4 md:w-fit md:grid-cols-2 md:gap-6">
        {uspCards.map((card) => (
          <UspCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}

export default function Header() {
  return (
    <header className="flex h-16 items-center px-4 md:h-auto md:items-start md:px-6 md:pt-6">
      <div className="flex flex-col font-sans text-[24px] md:text-[36px] tracking-[-0.025em] text-primary">
        <h1 className="mb-1 font-bold leading-[0.71]">Planetary Impact</h1>
        <span className="leading-[0.86] ">HUB</span>
      </div>
    </header>
  );
}

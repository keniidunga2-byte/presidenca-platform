export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071f3d]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4 text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-[#f4c95d]">
            LOGO
          </div>
          <div>
            <h1 className="text-lg font-bold">Rrjeti i Qeverive të Nxënësve</h1>
            <p className="text-sm font-semibold text-[#f4c95d]">ZVA Kamëz</p>
          </div>
        </div>

        <nav className="hidden gap-7 text-sm font-semibold text-white md:flex">
          <a href="#schools">Shkollat</a>
          <a href="#news">Lajmet</a>
          <a href="#admin">Paneli</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
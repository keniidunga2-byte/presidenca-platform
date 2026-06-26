export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050f24]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-4 text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4a017]/40 bg-white/10 text-sm font-black text-[#f4c95d]">
            ZVA
          </div>

          <div>
            <h1 className="text-lg font-black tracking-tight">
              Rrjeti i Qeverive të Nxënësve
            </h1>
            <p className="text-sm font-bold text-[#f4c95d]">ZVA Kamëz</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-white md:flex">
          <a href="#about" className="hover:text-[#f4c95d]">Rreth</a>
          <a href="#presidency" className="hover:text-[#f4c95d]">Presidenca</a>
          <a href="#schools" className="hover:text-[#f4c95d]">Shkollat</a>
          <a href="#news" className="hover:text-[#f4c95d]">Lajmet</a>
          <a href="/admin" className="rounded-full bg-[#d4a017] px-5 py-2 text-white">
            Admin
          </a>
        </nav>
      </div>
    </header>
  );
}
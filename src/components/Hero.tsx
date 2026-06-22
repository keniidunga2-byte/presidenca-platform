export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#071f3d] via-[#0b2d55] to-[#06182f] px-6 text-center text-white">
      <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#d4a017]/20 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl">
        <span className="rounded-full border border-[#f4c95d]/40 bg-[#d4a017]/20 px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#f4c95d]">
          Portali Zyrtar
        </span>

        <h1 className="mt-8 text-5xl font-black uppercase leading-tight md:text-7xl">
          Rrjeti i Qeverive të Nxënësve
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-[#f4c95d]">
          ZVA Kamëz
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
          Platforma zyrtare e Rrjetit të Qeverive të Nxënësve që bashkon
          24 shkollat e ZVA Kamëz, promovon lidershipin, përfaqësimin dhe
          qytetarinë aktive.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#schools"
            className="rounded-xl bg-[#d4a017] px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Shiko Shkollat
          </a>

          <a
            href="#news"
            className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#071f3d]"
          >
            Lajmet
          </a>
        </div>
      </div>
    </section>
  );
}
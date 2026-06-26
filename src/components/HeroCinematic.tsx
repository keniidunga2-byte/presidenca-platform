export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020713] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,201,93,.32),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,.25),transparent_30%),linear-gradient(180deg,#020713_0%,#071f3d_60%,#f5f7fb_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4a017]/25" />
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[.03] backdrop-blur-2xl" />

      <div className="absolute left-[8%] top-[18%] hidden rounded-[2rem] border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl lg:block">
        <p className="text-sm font-black uppercase tracking-[4px] text-[#f4c95d]">24 shkolla</p>
        <p className="mt-1 text-xl font-black">Një rrjet i bashkuar</p>
      </div>

      <div className="absolute bottom-[22%] right-[7%] hidden rounded-[2rem] border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl lg:block">
        <p className="text-sm font-black uppercase tracking-[4px] text-[#f4c95d]">Admin Panel</p>
        <p className="mt-1 text-xl font-black">Miratim lajmesh</p>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 pt-28 text-center">
        <div className="max-w-6xl">
          <div className="mx-auto mb-10 inline-flex items-center gap-3 rounded-full border border-[#f4c95d]/40 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[5px] text-[#f4c95d] shadow-2xl backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4c95d] shadow-[0_0_25px_rgba(244,201,93,.9)]" />
            Presidenca e Rrjetit të Qeverive të Nxënësve
          </div>

          <h1 className="text-6xl font-black leading-[0.86] tracking-[-0.09em] md:text-8xl lg:text-[9.5rem]">
            ZËRI
            <span className="mx-auto mt-4 block w-fit bg-gradient-to-r from-[#f4c95d] via-white to-[#d4a017] bg-clip-text text-transparent">
              I NXËNËSVE
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-2xl leading-10 text-slate-200">
            Një platformë institucionale, moderne dhe e unifikuar për 24 shkollat
            e ZVA Kamëz — ku çdo lajm, aktivitet dhe arritje kalon nëpërmjet
            përfaqësimit, përgjegjësisë dhe miratimit zyrtar.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            {[
              ["24", "Shkolla pjesëmarrëse"],
              ["500+", "Nxënës të përfaqësuar"],
              ["1", "Presidencë lokale"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
              >
                <p className="text-5xl font-black text-[#f4c95d]">{number}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[3px] text-slate-300">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="#schools"
              className="rounded-full bg-[#d4a017] px-11 py-5 text-lg font-black text-white shadow-[0_25px_100px_rgba(212,160,23,.45)] transition hover:-translate-y-1 hover:scale-105"
            >
              Hyr në portal
            </a>

            <a
              href="#presidency"
              className="rounded-full border border-white/20 bg-white/10 px-11 py-5 text-lg font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/20"
            >
              Shiko Presidencën
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
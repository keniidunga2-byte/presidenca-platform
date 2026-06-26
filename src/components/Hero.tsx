export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050f24] text-white premium-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,160,23,.30),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(29,78,216,.25),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
        <div className="max-w-5xl">
          <p className="mb-8 inline-flex rounded-full border border-[#d4a017]/40 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-[5px] text-[#f4c95d] backdrop-blur-xl">
            Presidenca e Rrjetit të Qeverive të Nxënësve · ZVA Kamëz
          </p>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.95] tracking-[-0.06em] md:text-8xl">
            Platforma
            <span className="block bg-gradient-to-r from-[#f4c95d] via-white to-[#d4a017] bg-clip-text text-transparent">
              e zërit të nxënësve.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-2xl leading-10 text-slate-200">
            Portali institucional i 24 shkollave të ZVA Kamëz, krijuar për
            përfaqësim, lidership, publikim aktivitetesh dhe miratim zyrtar
            të lajmeve nga Presidenca.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#schools"
              className="premium-glow rounded-2xl bg-[#d4a017] px-9 py-5 text-lg font-black text-white transition hover:-translate-y-1"
            >
              Eksploro shkollat
            </a>

            <a
              href="#news"
              className="rounded-2xl border border-white/20 bg-white/10 px-9 py-5 text-lg font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/20"
            >
              Shiko lajmet
            </a>
          </div>

          <div className="mt-16 grid max-w-4xl gap-5 md:grid-cols-3">
            {[
              ["24", "Shkolla"],
              ["2300+", "Nxënës"],
              ["Krenar Dunga", "President Lokal"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                <h3 className="text-5xl font-black text-[#f4c95d]">{number}</h3>
                <p className="mt-2 text-lg text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
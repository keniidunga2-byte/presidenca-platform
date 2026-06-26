export default function PresidentMessage() {
  return (
    <section className="relative overflow-hidden bg-[#071f3d] px-6 py-32 text-white">
      <div className="absolute left-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#d4a017]/20 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-160px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[360px_1fr] lg:items-center">
        <div className="rounded-[2.5rem] border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border-4 border-[#d4a017] bg-white/10 text-5xl font-black text-[#f4c95d] shadow-2xl">
            KD
          </div>

          <h3 className="mt-8 text-4xl font-black tracking-tight">
            Krenar Dunga
          </h3>

          <p className="mt-3 text-lg font-bold text-[#f4c95d]">
            President Lokal
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#d4a017]" />
        </div>

        <div>
          <span className="inline-block rounded-full border border-[#f4c95d]/40 bg-[#d4a017]/20 px-5 py-2 text-sm font-black uppercase tracking-[5px] text-[#f4c95d]">
            Mesazhi i Presidentit
          </span>

          <h2 className="mt-8 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Përfaqësimi i nxënësve është përgjegjësi, jo privilegj.
          </h2>

          <div className="mt-10 space-y-7 text-xl leading-10 text-blue-50">
            <p>
              Rrjeti i Qeverive të Nxënësve – ZVA Kamëz është ndërtuar mbi
              bindjen se zëri i nxënësve duhet të dëgjohet me seriozitet,
              të përfaqësohet me dinjitet dhe të kthehet në veprim konkret.
            </p>

            <p>
              Ky rrjet nuk është vetëm një strukturë organizative; është një
              hapësirë përgjegjësie, bashkëpunimi dhe vizioni, ku çdo shkollë
              ka mundësinë të paraqesë idetë, nismat dhe kontributin e saj në
              jetën arsimore të komunitetit.
            </p>

            <p>
              Si President Lokal, besoj se lidershipi i vërtetë matet me
              aftësinë për të bashkuar njerëzit, për të krijuar besim dhe për
              të ndërtuar një kulturë ku çdo nxënës ndihet pjesë e ndryshimit.
            </p>
          </div>

          <div className="mt-10 border-l-4 border-[#d4a017] pl-6">
            <p className="text-2xl font-black text-white">
              Krenar Dunga
            </p>
            <p className="mt-1 font-bold text-[#f4c95d]">
              President Lokal – Rrjeti i Qeverive të Nxënësve, ZVA Kamëz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
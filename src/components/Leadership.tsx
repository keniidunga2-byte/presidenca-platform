export default function Leadership() {
  const leaders = [
    {
      name: "Krenar Dunga",
      school: "Gjimnazi “Ibrahim Rugova”",
      role: "President Lokal",
      initials: "KD",
    },
    {
      name: "Ergi Senko",
      school: "Shkolla “Angela Merkel”",
      role: "Zëvendëspresidente e Parë",
      initials: "ES",
    },
    {
      name: "Rona Vata",
      school: "Shkolla “Niko Hoxha”",
      role: "Zëvendëspresidente e Dytë",
      initials: "RV",
    },
  ];

  return (
    <section id="presidency" className="bg-[#f5f7fb] px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-bold uppercase tracking-widest text-[#d4a017]">
          Presidenca
        </span>

        <h2 className="mt-4 text-4xl font-black text-[#071f3d]">
          Struktura Drejtuese
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Ekipi drejtues që përfaqëson, koordinon dhe udhëheq Rrjetin e
          Qeverive të Nxënësve – ZVA Kamëz.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-[#071f3d] to-[#d4a017] text-5xl font-black text-white">
                {leader.initials}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-[#071f3d]">
                  {leader.name}
                </h3>

                <p className="mt-3 text-gray-500">{leader.school}</p>

                <p className="mt-4 font-bold text-[#d4a017]">
                  {leader.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
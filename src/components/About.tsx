export default function About() {
  const cards = [
    {
      title: "Misioni",
      number: "01",
      text: "Të fuqizojmë zërin e nxënësve dhe të krijojmë një hapësirë ku përfaqësimi, lidershipi dhe përgjegjësia qytetare kthehen në veprim konkret.",
    },
    {
      title: "Vizioni",
      number: "02",
      text: "Një rrjet shkollash ku çdo nxënës ndihet i dëgjuar, i përfshirë dhe pjesë e një komuniteti që nxit zhvillim, bashkëpunim dhe dinjitet.",
    },
    {
      title: "Vlerat",
      number: "03",
      text: "Transparencë, integritet, përgjegjësi, respekt, bashkëpunim dhe përkushtim ndaj përmirësimit të jetës shkollore.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#f5f7fb] px-6 py-28">
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#d4a017]/20 blur-3xl" />
      <div className="absolute bottom-10 right-[-120px] h-80 w-80 rounded-full bg-[#071f3d]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-[#071f3d] px-5 py-2 text-sm font-bold uppercase tracking-[4px] text-[#f4c95d]">
              Rreth Rrjetit
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-[#071f3d] md:text-6xl">
              Një strukturë që i jep zë nxënësve.
            </h2>

            <p className="mt-7 text-lg leading-9 text-gray-700">
              Rrjeti i Qeverive të Nxënësve – ZVA Kamëz bashkon përfaqësuesit
              e 24 shkollave në një platformë të përbashkët për lidership,
              qytetari aktive dhe përfaqësim dinjitoz.
            </p>

            <div className="mt-8 h-1 w-28 rounded-full bg-[#d4a017]" />
          </div>

          <div className="grid gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white bg-white/80 p-8 shadow-xl backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-6 top-4 text-7xl font-black text-[#071f3d]/5">
                  {card.number}
                </div>

                <h3 className="text-3xl font-black text-[#071f3d]">
                  {card.title}
                </h3>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                  {card.text}
                </p>

                <div className="mt-6 h-1 w-16 rounded-full bg-[#d4a017] transition group-hover:w-28" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
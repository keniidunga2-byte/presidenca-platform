const schools = [
  ["100 Vjetori Kamëz", "Onelja Kurti"],
  ["Arbëria Kamëz", "Arolea Rrahmani"],
  ["Ahmet Zogu Bathore", "Alesia Sokoli"],
  ["Azem Hajdari Paskuqan", "Ersa Kaloti"],
  ["Fatos Lami Zall-Mner", "Reian Tafa"],
  ["Demokracia Valias", "Klevisa Lasku"],
  ["Dom Nikollë Kaçorri Paskuqan", "Ajsela Mara"],
  ["Dom Nikollë Kaçorri Laknas", "Arta Kaca"],
  ["Halit Coka Bathore", "Ejsi Buci"],
  ["Hillary Clinton Kamëz", "Erja Qose"],
  ["Ibrahim Basha Bulçesh", "Dorinalda Dafku"],
  ["Jashar Hoxha Paskuqan", "Fjoldi Barci"],
  ["Kamza e Re Kamëz", "Dajana Pervana"],
  ["Lidhja e Prizrenit Paskuqan", "Armela Hoxha"],
  ["Nënë Tereza Laknas", "Sejda Gjorgji"],
  ["Niko Hoxha Valias", "Rona Vata"],
  ["Tahir Sinani Kodër e Kuqe", "Santa Adea Musaj"],
  ["Vëllazërimi Paskuqan", "Gabriela Bekolli"],
  ["Angela Merkel Kamëz", "Ergi Senko"],
  ["Elez Isuf Ndreu Bathore", "Elene Ceku"],
  ["Gjimnazi Gramoz Palushi Babrru", "Era Kadriu"],
  ["Gjimnazi Ibrahim Rugova Kamëz", "Krenar Dunga"],
  ["Gjimnazi Isa Boletini Paskuqan", "Syarta Allaraj"],
  ["Sulejman Elezi Zall-Mner", "Elgisa Alkollari"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#071f3d]">
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
            <a href="#about">Rreth Nesh</a>
            <a href="#presidency">Presidenca</a>
            <a href="#schools">Shkollat</a>
            <a href="#news">Lajmet</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#071f3d] via-[#0b2d55] to-[#06182f] px-6 text-center text-white">
        <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#d4a017]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl">
          <span className="rounded-full border border-[#f4c95d]/40 bg-[#d4a017]/20 px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#f4c95d]">
            Portali Zyrtar
          </span>

          <h2 className="mt-8 text-5xl font-black uppercase leading-tight md:text-7xl">
            Rrjeti i Qeverive të Nxënësve
          </h2>

          <p className="mt-4 text-3xl font-bold text-[#f4c95d]">ZVA Kamëz</p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
            Zëri i nxënësve, forca e ndryshimit. Një rrjet që bashkon 24 shkolla për lidership,
            përfaqësim dhe qytetari aktive.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#about" className="rounded-xl bg-[#d4a017] px-8 py-4 font-bold text-white shadow-lg">
              Mëso më shumë
            </a>
            <a href="#contact" className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white">
              Na kontakto
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-20 grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {[
          ["24", "Shkolla pjesëmarrëse"],
          ["500+", "Nxënës të përfaqësuar"],
          ["1", "Rrjet i bashkuar"],
        ].map(([num, label]) => (
          <div key={label} className="rounded-3xl bg-white p-10 text-center shadow-2xl">
            <h3 className="text-5xl font-black">{num}</h3>
            <p className="mt-2 text-gray-500">{label}</p>
          </div>
        ))}
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <span className="font-bold uppercase tracking-widest text-[#d4a017]">Rreth Rrjetit</span>
          <h2 className="mt-4 text-4xl font-black">Kush Jemi?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Rrjeti i Qeverive të Nxënësve – ZVA Kamëz bashkon përfaqësuesit e nxënësve nga shkollat
            pjesëmarrëse për të nxitur bashkëpunimin, përfaqësimin dhe përfshirjen aktive.
          </p>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              ["Misioni", "Të fuqizojmë zërin e nxënësve dhe të krijojmë mundësi për lidership e ndryshim pozitiv."],
              ["Vizioni", "Një komunitet shkollor ku çdo nxënës ndihet i dëgjuar, i përfaqësuar dhe i vlerësuar."],
              ["Vlerat", "Përgjegjësi, transparencë, bashkëpunim, respekt dhe qytetari aktive."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border-t-4 border-[#d4a017] bg-white p-8 text-left shadow-xl">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="presidency" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <span className="font-bold uppercase tracking-widest text-[#d4a017]">Presidenca</span>
          <h2 className="mt-4 text-4xl font-black">Struktura Drejtuese</h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ["Krenar Dunga", "Gjimnazi “Ibrahim Rugova”", "President Lokal"],
              ["Ergi Senko", "Shkolla “Angela Merkel”", "Zëvendëspresidente e Parë"],
              ["Rona Vata", "Shkolla “Niko Hoxha”", "Zëvendëspresidente e Dytë"],
            ].map(([name, school, role]) => (
              <article key={name} className="overflow-hidden rounded-3xl bg-[#f8fafc] shadow-xl">
                <div className="flex h-72 items-center justify-center bg-gradient-to-br from-[#071f3d] to-[#d4a017] text-5xl font-black text-white">
                  {name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="mt-2 text-gray-500">{school}</p>
                  <p className="mt-3 font-bold text-[#d4a017]">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="schools" className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <span className="font-bold uppercase tracking-widest text-[#d4a017]">Shkollat në ZVA Kamëz</span>
          <h2 className="mt-4 text-4xl font-black">24 Shkollat Pjesëmarrëse</h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {schools.map(([school, president]) => (
              <div key={school} className="rounded-3xl border border-[#d4a017]/20 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[#d4a017] bg-gray-50 text-sm font-bold text-gray-400">
                  Logo
                </div>
                <h3 className="mt-5 text-lg font-black">{school}</h3>
                <p className="mt-3 text-sm text-gray-500">
                  Përfaqësues/e: <strong className="text-[#071f3d]">{president}</strong>
                </p>
                <button className="mt-5 rounded-full bg-[#071f3d] px-5 py-2 text-sm font-bold text-white">
                  Hap profilin
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <span className="font-bold uppercase tracking-widest text-[#d4a017]">Lajme</span>
          <h2 className="mt-4 text-4xl font-black">Lajmet dhe Aktivitetet</h2>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              "Portali zyrtar i Rrjetit është në ndërtim",
              "Forcimi i përfaqësimit të nxënësve",
              "Seksioni i dokumenteve do të shtohet së shpejti",
            ].map((title) => (
              <article key={title} className="rounded-3xl bg-[#f8fafc] p-8 text-left shadow-xl">
                <span className="font-bold text-[#d4a017]">Njoftim</span>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Ky seksion do të përdoret për publikimin e njoftimeve, aktiviteteve dhe projekteve të rrjetit.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#06182f] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-black">Rrjeti i Qeverive të Nxënësve – ZVA Kamëz</h3>
            <p className="mt-4 text-blue-100">
              Një rrjet për lidershipin, përfaqësimin dhe qytetarinë aktive të nxënësve.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#f4c95d]">Kontakt</h4>
            <p className="mt-3 text-blue-100">Email: krenardunga@presidencazvakamez.com</p>
            <p className="text-blue-100">ZVA Kamëz, Shqipëri</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
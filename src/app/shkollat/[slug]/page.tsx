import { schools } from "@/data/schools";

export default async function SchoolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const school = schools.find((item) => item.slug === slug);

  if (!school) {
    return (
      <main className="min-h-screen bg-slate-100 p-10">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-4xl font-black text-red-600">
            Shkolla nuk u gjet
          </h1>
          <a href="/" className="mt-6 inline-block font-bold text-[#071f3d]">
            Kthehu në kryefaqe
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <section className="bg-[#071f3d] px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <a href="/" className="text-sm font-bold text-[#f4c95d]">
            ← Kthehu në kryefaqe
          </a>

          <div className="mt-10 grid gap-10 md:grid-cols-[180px_1fr] md:items-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-dashed border-[#d4a017] bg-white text-gray-400 font-bold">
              LOGO
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-[#f4c95d]">
                Profili i shkollës
              </p>
              <h1 className="mt-4 text-5xl font-black">{school.name}</h1>
              <p className="mt-5 text-xl text-blue-100">
                Përfaqësues/e në Rrjet:{" "}
                <strong className="text-white">{school.president}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-6 md:grid-cols-4">
      <div className="rounded-3xl bg-white p-7 text-center shadow-xl">
        <h2 className="text-4xl font-black text-[#071f3d]">0</h2>
        <p className="mt-2 text-gray-600">Lajme të publikuara</p>
      </div>

      <div className="rounded-3xl bg-white p-7 text-center shadow-xl">
        <h2 className="text-4xl font-black text-[#071f3d]">0</h2>
        <p className="mt-2 text-gray-600">Aktivitete</p>
      </div>

      <div className="rounded-3xl bg-white p-7 text-center shadow-xl">
        <h2 className="text-4xl font-black text-[#071f3d]">0</h2>
        <p className="mt-2 text-gray-600">Foto në galeri</p>
      </div>

      <div className="rounded-3xl bg-white p-7 text-center shadow-xl">
        <h2 className="text-4xl font-black text-[#071f3d]">0</h2>
        <p className="mt-2 text-gray-600">Dokumente</p>
      </div>
    </div>

    <div className="mt-10 grid gap-8 lg:grid-cols-3">
      <div className="rounded-3xl bg-white p-8 shadow-xl lg:col-span-2">
        <h2 className="text-2xl font-black text-[#071f3d]">Lajmet dhe aktivitetet</h2>
        <p className="mt-4 text-gray-600">
          Këtu do të shfaqen lajmet e miratuara të kësaj shkolle. Presidenti/ja e shkollës do të dërgojë aktivitetet, ndërsa administratori i portalit do t’i miratojë para publikimit.
        </p>

        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6">
          <p className="font-bold text-[#071f3d]">Asnjë lajm i publikuar ende</p>
          <p className="mt-2 text-gray-600">
            Lajmet do të shfaqen automatikisht pasi të miratohen nga administratori.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-black text-[#071f3d]">Qeveria e Nxënësve</h2>
        <p className="mt-4 text-gray-600">
          Ky seksion do të përmbajë anëtarët e qeverisë së nxënësve të shkollës dhe rolet e tyre.
        </p>

        <div className="mt-6 rounded-2xl bg-[#f5f7fb] p-5">
          <p className="text-sm font-bold uppercase tracking-widest text-[#d4a017]">
            Përfaqësues/e në Rrjet
          </p>
          <p className="mt-2 text-xl font-black text-[#071f3d]">
            {school.president}
          </p>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-8 md:grid-cols-3">
      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-black text-[#071f3d]">Galeria</h2>
        <p className="mt-4 text-gray-600">
          Këtu do të vendosen fotot nga aktivitetet, projektet dhe takimet e shkollës.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-black text-[#071f3d]">Dokumentet</h2>
        <p className="mt-4 text-gray-600">
          Këtu do të publikohen dokumentet, formularët dhe materialet e rëndësishme të shkollës.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-black text-[#071f3d]">Kontakt</h2>
        <p className="mt-4 text-gray-600">
          Të dhënat e kontaktit të shkollës dhe përfaqësuesit do të shtohen në një fazë tjetër.
        </p>
      </div>
    </div>

    <div className="mt-10 rounded-3xl bg-[#071f3d] p-8 text-white shadow-xl">
      <h2 className="text-2xl font-black">Dërgo aktivitet për këtë shkollë</h2>
      <p className="mt-4 text-blue-100">
        Në versionin me panel, presidenti/ja e kësaj shkolle do të mund të dërgojë lajme, foto dhe dokumente për miratim.
      </p>
      <button className="mt-6 rounded-xl bg-[#d4a017] px-6 py-3 font-bold text-white">
        Së shpejti
      </button>
    </div>
  </div>
</section>
</main>
);
}
      
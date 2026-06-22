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
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-black text-[#071f3d]">Lajmet</h2>
            <p className="mt-4 text-gray-600">
              Këtu do të shfaqen lajmet dhe aktivitetet e kësaj shkolle.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-black text-[#071f3d]">Galeria</h2>
            <p className="mt-4 text-gray-600">
              Këtu do të vendosen fotot nga aktivitetet dhe projektet.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-black text-[#071f3d]">Dokumentet</h2>
            <p className="mt-4 text-gray-600">
              Këtu do të publikohen dokumentet e shkollës dhe qeverisë së nxënësve.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
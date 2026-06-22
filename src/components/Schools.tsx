import { schools } from "@/data/schools";

export default function Schools() {
  return (
    <section
      id="schools"
      className="bg-[#f7f9fc] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <span className="font-bold uppercase tracking-[4px] text-[#d4a017]">
            Shkollat
          </span>

          <h2 className="mt-4 text-5xl font-black text-[#071f3d]">
            24 Shkollat e ZVA Kamëz
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Çdo shkollë ka profilin e saj, presidentin përfaqësues,
            lajmet, aktivitetet dhe dokumentet.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {schools.map((school) => (

            <div
              key={school.slug}
              className={`rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
                school.featured
                  ? "ring-4 ring-[#d4a017]"
                  : ""
              }`}
            >

              <div className="flex h-36 items-center justify-center bg-[#071f3d]">

                <div className="h-24 w-24 rounded-full border-4 border-dashed border-[#d4a017] bg-white flex items-center justify-center text-gray-400 font-bold">

                  LOGO

                </div>

              </div>

              <div className="p-7">

                <h3 className="text-xl font-black text-[#071f3d]">

                  {school.name}

                </h3>

                <p className="mt-4 text-gray-600">

                  <strong>Përfaqësues:</strong>

                  <br />

                  {school.president}

                </p>

                <a
  href={`/shkollat/${school.slug}`}
  className="mt-6 block w-full rounded-xl bg-[#071f3d] py-3 text-center font-bold text-white transition hover:bg-[#d4a017]"
>
  Hap Profilin
</a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
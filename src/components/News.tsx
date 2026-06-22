import { newsItems } from "@/data/news";

export default function News() {
  const approvedNews = newsItems.filter((item) => item.status === "approved");

  return (
    <section id="news" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <span className="font-bold uppercase tracking-widest text-[#d4a017]">
          Lajme
        </span>

        <h2 className="mt-4 text-4xl font-black text-[#071f3d]">
          Lajmet e miratuara
        </h2>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {approvedNews.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl bg-[#f8fafc] p-8 text-left shadow-xl"
            >
              <span className="font-bold text-[#d4a017]">{item.school}</span>
              <h3 className="mt-4 text-xl font-black text-[#071f3d]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-gray-600">{item.content}</p>
              <p className="mt-5 text-sm text-gray-500">
                Publikuar nga: {item.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
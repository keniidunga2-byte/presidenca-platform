"use client";
import { newsItems } from "@/data/news";

export default function AdminPreview() {
  const pendingNews = newsItems.filter((item) => item.status === "pending");

  return (
    <section className="bg-[#071f3d] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <span className="font-bold uppercase tracking-widest text-[#f4c95d]">
          Panel Administrimi
        </span>

        <h2 className="mt-4 text-4xl font-black">
          Lajme në pritje për miratim
        </h2>

        <p className="mt-4 max-w-2xl text-blue-100">
          Këtu shfaqen lajmet që dërgohen nga presidentët e shkollave dhe presin miratimin e Presidencës.
        </p>

        <div className="mt-10 grid gap-6">
          {pendingNews.map((item) => (
            <article key={item.id} className="rounded-3xl bg-white p-7 text-[#071f3d] shadow-xl">
              <p className="text-sm font-bold text-[#d4a017]">{item.school}</p>
              <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.content}</p>
              <p className="mt-4 text-sm text-gray-500">Dërguar nga: {item.author}</p>

              <div className="mt-6 flex gap-3">
                <button className="rounded-xl bg-green-600 px-5 py-3 font-bold text-white">
                  Mirato
                </button>
                <button className="rounded-xl bg-red-600 px-5 py-3 font-bold text-white">
                  Refuzo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
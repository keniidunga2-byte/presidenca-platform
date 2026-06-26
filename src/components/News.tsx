"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type NewsItem = {
  id: string;
  title: string;
  content: string;
  school_name: string;
  author_name: string;
  author_email: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadApprovedNews() {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setNews(data as NewsItem[]);
      }

      setLoading(false);
    }

    loadApprovedNews();
  }, []);

  return (
    <section id="news" className="bg-[#020713] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-black uppercase tracking-[5px] text-[#f4c95d]">
              Lajme
            </span>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.05em]">
              Publikimet e miratuara
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Këtu shfaqen vetëm lajmet dhe aktivitetet që janë miratuar nga Super Admin.
            </p>
          </div>

          <div className="rounded-2xl bg-[#d4a017] px-6 py-4 text-3xl font-black">
            {news.length}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {loading ? (
            <p className="text-slate-300">Duke ngarkuar lajmet...</p>
          ) : news.length === 0 ? (
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-slate-300 backdrop-blur-xl md:col-span-3">
              Nuk ka ende lajme të miratuara.
            </div>
          ) : (
            news.map((item) => (
              <article
                key={item.id}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2"
              >
                <p className="text-sm font-black uppercase tracking-[4px] text-[#f4c95d]">
                  {item.school_name}
                </p>

                <h3 className="mt-4 text-2xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 line-clamp-4 leading-7 text-slate-300">
                  {item.content}
                </p>

                <p className="mt-6 text-sm text-slate-400">
                  Publikuar nga: {item.author_email}
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
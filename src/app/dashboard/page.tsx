"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Profile = {
  full_name: string;
  email: string;
  role: "super_admin" | "president";
  school_slug: string | null;
};

type NewsItem = {
  id: string;
  title: string;
  content: string;
  school_name: string;
  school_slug: string;
  author_name: string;
  author_email: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadPendingNews() {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("Gabim gjatë marrjes së lajmeve: " + error.message);
      return;
    }

    setNews((data as NewsItem[]) || []);
  }

  useEffect(() => {
    async function loadDashboard() {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        window.location.href = "/login";
        return;
      }

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("full_name, email, role, school_slug")
        .eq("id", userData.user.id)
        .single();

      if (profileError || !profileData) {
        setLoading(false);
        setMessage("Ky email nuk ka profil të regjistruar në platformë.");
        return;
      }

      setProfile(profileData as Profile);

      if (profileData.role === "super_admin") {
        await loadPendingNews();
      }

      setLoading(false);
    }

    loadDashboard();
  }, []);

  async function updateNewsStatus(id: string, status: "approved" | "rejected") {
    setMessage("Duke përditësuar publikimin...");

    const { error } = await supabase
      .from("news")
      .update({ status })
      .eq("id", id);

    if (error) {
      setMessage("Gabim: " + error.message);
      return;
    }

    setMessage(status === "approved" ? "✅ Lajmi u miratua." : "❌ Lajmi u refuzua.");
    await loadPendingNews();
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020713] text-white">
        Duke kontrolluar aksesin...
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020713] px-6 text-white">
        <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl">
          <h1 className="text-3xl font-black text-[#f4c95d]">Nuk ke akses</h1>
          <p className="mt-4 text-slate-300">{message}</p>
          <button
            onClick={handleLogout}
            className="mt-8 rounded-2xl bg-[#d4a017] px-6 py-4 font-black text-white"
          >
            Dil
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020713] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[5px] text-[#f4c95d]">
              Dashboard
            </p>

            <h1 className="mt-4 text-5xl font-black">
              Mirë se erdhe, {profile.full_name}
            </h1>

            <p className="mt-4 text-slate-300">
              Roli yt: <strong>{profile.role}</strong>
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/dashboard/new-post"
              className="rounded-2xl bg-white/10 px-6 py-4 font-black text-white backdrop-blur-xl"
            >
              + Dërgo lajm
            </a>

            <button
              onClick={handleLogout}
              className="rounded-2xl bg-[#d4a017] px-6 py-4 font-black text-white"
            >
              Dil
            </button>
          </div>
        </div>

        {message && (
          <div className="mt-8 rounded-2xl border border-[#d4a017]/30 bg-[#d4a017]/10 p-5 font-bold text-[#f4c95d]">
            {message}
          </div>
        )}

        {profile.role === "super_admin" ? (
          <section className="mt-10">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-black">Lajme në pritje</h2>
                  <p className="mt-2 text-slate-300">
                    Këtu miraton ose refuzon publikimet e dërguara nga presidentët.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#d4a017] px-5 py-3 text-2xl font-black">
                  {news.length}
                </div>
              </div>

              <div className="mt-8 grid gap-6">
                {news.length === 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
                    Nuk ka lajme në pritje për momentin.
                  </div>
                ) : (
                  news.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-[2rem] border border-white/10 bg-[#020713]/60 p-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-black uppercase tracking-[4px] text-[#f4c95d]">
                            {item.school_name}
                          </p>

                          <h3 className="mt-3 text-3xl font-black">{item.title}</h3>

                          <p className="mt-3 text-sm text-slate-400">
                            Dërguar nga: {item.author_email}
                          </p>
                        </div>

                        <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-black text-yellow-300">
                          Pending
                        </span>
                      </div>

                      <p className="mt-6 leading-8 text-slate-200">{item.content}</p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <button
                          onClick={() => updateNewsStatus(item.id, "approved")}
                          className="rounded-2xl bg-green-600 px-6 py-3 font-black text-white"
                        >
                          Mirato
                        </button>

                        <button
                          onClick={() => updateNewsStatus(item.id, "rejected")}
                          className="rounded-2xl bg-red-600 px-6 py-3 font-black text-white"
                        >
                          Refuzo
                        </button>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-black">Paneli i shkollës</h2>
            <p className="mt-3 text-slate-300">
              Shkolla: {profile.school_slug}
            </p>

            <a
              href="/dashboard/new-post"
              className="mt-8 inline-block rounded-2xl bg-[#d4a017] px-6 py-4 font-black text-white"
            >
              Dërgo lajm për miratim
            </a>
          </section>
        )}
      </div>
    </main>
  );
}
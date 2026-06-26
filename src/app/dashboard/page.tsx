"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        window.location.href = "/login";
        return;
      }

      setEmail(data.user.email ?? null);
    }

    getUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <main className="min-h-screen bg-[#020713] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-black uppercase tracking-[5px] text-[#f4c95d]">
            Dashboard
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Mirë se erdhe në panel
          </h1>

          <p className="mt-4 text-slate-300">
            Je futur me email: <strong>{email}</strong>
          </p>

          <button
            onClick={handleLogout}
            className="mt-8 rounded-2xl bg-[#d4a017] px-6 py-4 font-black text-white"
          >
            Dil nga llogaria
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-black">Dërgo lajm</h2>
            <p className="mt-3 text-slate-300">
              Presidentët e shkollave do të dërgojnë lajme për miratim.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-black">Në pritje</h2>
            <p className="mt-3 text-slate-300">
              Admini -Presidenti i ZVA Kamëz- miraton ose refuzon publikimet.
            </p>
          </div>
 
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-black">Publikime</h2>
            <p className="mt-3 text-slate-300">
              Vetëm lajmet e miratuara shfaqen publikisht.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
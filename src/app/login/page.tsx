"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setMessage("Duke dërguar linkun...");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000/dashboard",
      },
    });

    if (error) {
      setMessage("Gabim: " + error.message);
      return;
    }

    setMessage("Kontrollo email-in. Linku i hyrjes u dërgua.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020713] px-6 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
      >
        <h1 className="text-4xl font-black">Hyr në portal</h1>

        <p className="mt-4 text-slate-300">
          Vendos email-in tënd për të hyrë në panelin e Presidencës së ZVA Kamëz.
        </p>

        <input
          type="email"
          required
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-full rounded-2xl border border-white/10 bg-white px-5 py-4 text-[#071f3d] outline-none"
        />

        <button
          type="submit"
          className="mt-5 w-full rounded-2xl bg-[#d4a017] px-6 py-4 font-black text-white"
        >
          Dërgo link hyrjeje
        </button>

        {message && <p className="mt-5 text-sm text-[#f4c95d]">{message}</p>}
      </form>
    </main>
  );
}
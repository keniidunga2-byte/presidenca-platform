"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [school, setSchool] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      setMessage("Duhet të identifikohesh.");
      return;
    }

    const { error } = await supabase.from("news").insert({
      title,
      content,
      school_slug: school.toLowerCase().replace(/\s+/g, "-"),
      school_name: school,
      author_name: userData.user.email,
      author_email: userData.user.email,
      status: "pending",
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("✅ Lajmi u dërgua për miratim.");

    setTitle("");
    setContent("");
    setSchool("");
  }

  return (
    <main className="min-h-screen bg-[#020713] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
        <h1 className="text-4xl font-black">
          Dërgo lajm të ri
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            className="w-full rounded-xl p-4 text-black"
            placeholder="Emri i shkollës"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />

          <input
            className="w-full rounded-xl p-4 text-black"
            placeholder="Titulli"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="h-48 w-full rounded-xl p-4 text-black"
            placeholder="Përmbajtja"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button
            type="submit"
            className="rounded-xl bg-[#d4a017] px-8 py-4 font-bold"
          >
            Dërgo për miratim
          </button>

          {message && (
            <p className="font-bold text-[#f4c95d]">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
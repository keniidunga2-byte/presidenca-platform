import type { NewsItem } from "@/types/news";

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Aktivitet ndërshkollor për lidershipin rinor",
    content:
      "Nxënësit zhvilluan një aktivitet për përfaqësimin, bashkëpunimin dhe qytetarinë aktive.",
    school: "Gjimnazi Ibrahim Rugova Kamëz",
    author: "Krenar Dunga",
    createdAt: "2026-06-22",
    status: "approved",
  },
  {
    id: "2",
    title: "Projekt sensibilizues nga Shkolla Angela Merkel",
    content:
      "Presidentja e shkollës ka dërguar një projekt për miratim nga Presidenca.",
    school: "Angela Merkel Kamëz",
    author: "Ergi Senko",
    createdAt: "2026-06-22",
    status: "pending",
  },
  {
    id: "3",
    title: "Aktivitet kulturor nga Shkolla Niko Hoxha",
    content: "Një aktivitet kulturor është dërguar për shqyrtim.",
    school: "Niko Hoxha Valias",
    author: "Rona Vata",
    createdAt: "2026-06-22",
    status: "pending",
  },
];

import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { LangProvider } from "@/i18n/LangProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kayra Cihan Başkan — Yazılım Mühendisi | Backend & Yapay Zeka",
  description:
    "FastAPI tabanlı backend geliştirme ve LLM/RAG entegrasyonu üzerine çalışan yazılım mühendisi. Ölçeklenebilir API'ler, mikroservis mimarileri ve yapay zeka destekli kurumsal sistemler.",
  keywords: [
    "Kayra Cihan Başkan",
    "Yazılım Mühendisi",
    "Backend",
    "FastAPI",
    "Yapay Zeka",
    "LLM",
    "RAG",
    "Next.js",
  ],
  authors: [{ name: "Kayra Cihan Başkan" }],
  openGraph: {
    title: "Kayra Cihan Başkan — Yazılım Mühendisi | Backend & Yapay Zeka",
    description:
      "FastAPI tabanlı backend geliştirme ve LLM/RAG entegrasyonu üzerine çalışan yazılım mühendisi.",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

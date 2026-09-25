import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { LangProvider } from "@/i18n/LangProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Kayra Cihan Başkan — Yazılım Mühendisi | Backend & Yapay Zeka",
    description:
      "FastAPI tabanlı backend geliştirme ve LLM/RAG entegrasyonu üzerine çalışan yazılım mühendisi.",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

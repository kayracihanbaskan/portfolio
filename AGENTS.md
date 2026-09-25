# AGENTS.md — portfolio_app Çalışma Kuralları

Bu dosya bu projede çalışan tüm agent'lar ve insanlar için bağlayıcıdır.

## 1. Stack
- Next.js (App Router) + TypeScript zorunludur.
- Styling: Tailwind CSS, `src/app/globals.css` içindeki tasarım token'ları dışına çıkma.
- İkon: sadece `lucide-react`. Animasyon kütüphanesi YOK (CSS transition/transform + IntersectionObserver).
- i18n: custom lightweight dictionary (`src/i18n/`). `next-intl` gibi ek bağımlılık ekleme.

## 2. Tasarım
- Light varsayılan + dark mode toggle zorunlu. Varsayılan tema light, kullanıcı seçimi `localStorage`'da saklanır, ilk yüklemede `prefers-color-scheme` + FOUC önleme scripti kullanılır. Dark mode Tailwind `dark:` varyantlarıyla class stratejisiyle çalışır (`@custom-variant dark`).
- Renkler (light): zemin `#FFFFFF` / `#F8FAFC`, metin `#0F172A` / `#475569`, vurgu gradient `indigo-600 → violet-600 → sky-500` (sadece hero başlığı, CTA, aktif nav, kart hover).
- Renkler (dark): zemin `#020617 (slate-950)` / `#0F172A`, kart `#0F172A (slate-900)`, metin `#F1F5F9` / `#CBD5E1`, border `slate-800`, gradient metinler daha açık tonda (`indigo-300 → violet-300 → sky-300`).
- Font: `next/font` ile Inter (body) + Plus Jakarta Sans (heading), `latin-ext` subset.
- Container `max-w-5xl`, section padding `py-16 md:py-24`, kart `rounded-2xl border p-6`.
- Mobile-first: tek kolon → `md:` breakpoint'te çok kolon. Tap hedefi min 44px.
- Header kayma kuralı: navbar içi bloklara sabit genişlik ver (logo, nav linkleri, aksiyon grubu, LangToggle). Dil değişiminde genişlik oynamasın; nav linkleri `text-center` + sabit `w-[]` kullanır.

## 3. İçerik
- Tek doğruluk kaynağı `knowledge.md`'dir. Dışında bilgi UYDURMA (proje, tarih, şirket, ödül).
- İletişim: e-posta + LinkedIn + GitHub. Telefon YOK, fotoğraf YOK, harf rozeti YOK.
- Site dili: TR varsayılan + EN toggle. Tüm metinler `src/i18n/tr.json` ve `en.json`'da olmalı, component içinde hardcoded metin yok.
- Türkçe karakterlere dikkat (ğ, ş, ı, İ, ç, ö, ü).

## 4. Kod Kuralları
- Component başına tek dosya, `src/components/` altında.
- Gereksiz yorum satırı ekleme.
- `npm run build && npm run lint` hatasız geçmeden iş bitmiş sayılmaz.

## 5. Commit Kuralları
- Commit mesajı kısa Türkçe + Conventional prefix (`feat:`, `fix:`, `içerik:`, `tasarım:`).
- CO-AUTHOR YASAĞI (kesin): GitHub commitlerinde kullanıcı harici kimse co-author yazılmayacak. Asistan kendisini `Co-authored-by` satırıyla veya başka bir şekilde commit'e eklemeyecek. Kullanıcı açıkça kendisi bir co-author satırı yazmadıkça commit'e co-author satırı eklenmeyecek.

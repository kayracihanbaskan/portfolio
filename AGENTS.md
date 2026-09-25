# AGENTS.md — portfolio_app Çalışma Kuralları

Bu dosya bu projede çalışan tüm agent'lar ve insanlar için bağlayıcıdır.

## 1. Stack
- Next.js (App Router) + TypeScript zorunludur.
- Styling: Tailwind CSS, `src/app/globals.css` içindeki tasarım token'ları dışına çıkma.
- İkon: sadece `lucide-react`. Animasyon kütüphanesi YOK (CSS transition/transform + IntersectionObserver).
- i18n: custom lightweight dictionary (`src/i18n/`). `next-intl` gibi ek bağımlılık ekleme.

## 2. Tasarım
- Light tema zorunlu, dark mode yok.
- Renkler: zemin `#FFFFFF` / `#F8FAFC`, metin `#0F172A` / `#475569`, vurgu gradient `indigo-600 → violet-600 → sky-500` (sadece hero başlığı, CTA, aktif nav, kart hover).
- Font: `next/font` ile Inter (body) + Plus Jakarta Sans (heading), `latin-ext` subset.
- Container `max-w-5xl`, section padding `py-16 md:py-24`, kart `rounded-2xl border p-6`.
- Mobile-first: tek kolon → `md:` breakpoint'te çok kolon. Tap hedefi min 44px.

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

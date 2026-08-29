/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Music, Sparkles, X, Calendar, Users, BookOpen, Compass } from 'lucide-react';
import UpcomingConcerts from './components/UpcomingConcerts';
import siteSettings from './content/settings.json';
import galleryContent from './content/gallery.json';

// Ścieżki w content/*.json są teraz pełnymi adresami URL (żeby zgadzały się
// z podglądem w panelu DecapCMS), więc wystarczy przepuścić je bez zmian.
// Ta funkcja zostaje na wypadek, gdybyś kiedyś wrócił do ścieżek względnych.
const withBase = (path: string) => {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path; // pełny URL — nic nie zmieniaj
  const base = import.meta.env.BASE_URL; // np. "./" albo "/dziewiecsil/"
  const cleanPath = path.replace(/^\/+/, ''); // usuń ewentualny wiodący "/"
  return `${base}${cleanPath}`;
};

// Gallery images edited via DecapCMS (src/content/gallery.json).
// First 6 are always visible, the rest appear after "Rozwiń galerię".
const galleryItems = galleryContent.items || [];
const visibleGalleryItems = galleryItems.slice(0, 6);
const extraGalleryItems = galleryItems.slice(6);

export default function App() {
  return (
    <div className="min-h-screen bg-linen selection:bg-wood-warm selection:text-white">
      {/* 
        PURE CSS MOBILE NAVIGATION DRAWER & BACKDROP HACK
        Uses the Tailwind 'peer' utility to open/close menu without any JavaScript state.
      */}
      <input type="checkbox" id="nav-toggle" className="hidden peer" />

      {/* Backdrop overlay for mobile menu */}
      <label 
        htmlFor="nav-toggle" 
        className="fixed inset-0 bg-wood-dark/50 backdrop-blur-xs z-40 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300 md:hidden"
      />

      {/* Mobile Menu Drawer */}
      <div className="fixed top-0 right-0 h-full w-[280px] bg-paper border-l border-cream-border p-8 pt-12 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out peer-checked:translate-x-0 md:hidden z-40">
        {/* Close Button */}
        <label 
          htmlFor="nav-toggle" 
          className="absolute top-6 right-6 text-wood-dark hover:text-wood-warm cursor-pointer p-2 rounded-full hover:bg-linen transition-colors flex items-center justify-center"
          aria-label="Zamknij menu"
        >
          <X className="w-6 h-6" />
        </label>

        <div className="flex flex-col gap-6 text-lg font-sans font-medium text-wood-mid mt-12">
          <a href="#o-nas" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            O Kapeli
          </a>
          <a href="#historia" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Historia Powstania
          </a>
          <a href="#koncerty" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Koncerty
          </a>
          <a href="#nauka" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Występy i Nauka
          </a>
          <a href="#galeria" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Galeria
          </a>
          <a href="#godziny" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Godziny prób
          </a>
          <a href="#kontakt" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Kontakt i rezerwacja
          </a>
          
          <a 
            href="tel:889363480" 
            className="mt-6 px-6 py-3.5 bg-wood-warm text-white hover:bg-wood-light text-center text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 rounded-[2px] shadow-sm"
          >
            Zadzwoń do nas
          </a>
        </div>
      </div>

      {/* 2. NAVIGATION BAR (Sticky) */}
      <header className="sticky top-0 z-30 bg-linen/96 border-b border-cream-border backdrop-blur-md">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Logo & Stacked Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={withBase(siteSettings.logoImage)} 
              alt="Logo Kapela Dziewięćsił" 
              className="w-10 h-10 object-cover rounded-full border border-wood-warm group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="flex flex-col leading-none">
              <span className="font-sans font-light text-[10px] tracking-[0.2em] text-wood-dark uppercase">Kapela</span>
              <span className="font-caveat font-semibold text-2xl text-wood-warm mt-0.5">Dziewięćsił</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-semibold text-wood-mid">
            <a href="#o-nas" className="hover:text-wood-warm transition-colors">O Kapeli</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#historia" className="hover:text-wood-warm transition-colors">Historia</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#koncerty" className="hover:text-wood-warm transition-colors">Koncerty</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#nauka" className="hover:text-wood-warm transition-colors">Oferta i Nauka</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#galeria" className="hover:text-wood-warm transition-colors">Galeria</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#godziny" className="hover:text-wood-warm transition-colors">Godziny Prób</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#kontakt" className="hover:text-wood-warm transition-colors">Kontakt</a>
          </nav>

          {/* Call-to-Action Pill */}
          <div className="hidden md:block">
            <a 
              href="#kontakt" 
              className="px-5 py-2.5 border border-wood-warm rounded-full text-xs font-sans font-semibold tracking-widest text-wood-warm uppercase hover:bg-wood-warm hover:text-paper transition-all duration-300"
            >
              Skontaktuj się
            </a>
          </div>

          {/* CSS-Animated Hamburger Menu Button (uses parent 'peer' checkbox status) */}
          <label 
            htmlFor="nav-toggle" 
            className="md:hidden flex flex-col justify-between w-6 h-4 cursor-pointer z-50 
              peer-checked:[&_span:nth-child(1)]:rotate-45 peer-checked:[&_span:nth-child(1)]:translate-y-[6px] 
              peer-checked:[&_span:nth-child(2)]:opacity-0 
              peer-checked:[&_span:nth-child(3)]:-rotate-45 peer-checked:[&_span:nth-child(3)]:-translate-y-[6px]"
          >
            <span className="w-full h-0.5 bg-wood-dark transition-all duration-300 origin-center"></span>
            <span className="w-full h-0.5 bg-wood-dark transition-all duration-300 origin-center"></span>
            <span className="w-full h-0.5 bg-wood-dark transition-all duration-300 origin-center"></span>
          </label>
        </div>
      </header>

      {/* 3. HERO (min-height: 100vh) */}
      <section 
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-cover bg-center" 
        style={{ backgroundImage: `url('${withBase(siteSettings.heroImage)}')` }}
      >
        {/* Warm brown gradient overlay (carved wood tones) */}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/85 via-wood-dark/80 to-wood-dark/95"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[840px] mx-auto flex flex-col items-center">
          
          <span className="font-sans font-semibold text-xs tracking-[0.3em] uppercase text-wood-light mb-3">
            Czarna Góra · Tatry Spisz Podhale
          </span>
          
          {/* Parzenica-inspired ornamental divider */}
          <div className="flex items-center justify-center gap-3 my-4 w-full">
            <span className="w-14 h-[1px] bg-wood-warm/30"></span>
            <span className="font-serif text-[#D4B078] text-xl">❦</span>
            <span className="w-14 h-[1px] bg-wood-warm/30"></span>
          </div>

          <h1 className="font-serif font-bold text-white leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
            Kapela
          </h1>
          <div className="font-caveat font-semibold text-5xl sm:text-6xl md:text-7xl text-[#D4B078] mt-2 mb-6 select-none">
            Dziewięćsił
          </div>

          <p className="font-sans font-light text-cream-border text-base sm:text-lg md:text-xl leading-relaxed max-w-[680px] mb-10">
            Tradycyjna spiska i podhalańska muzyka góralska na żywo. Oprawa muzyczna wydarzeń oraz Ognisko Muzyczne — nauka gry na skrzypcach, basach, akordeonie i śpiewu z miłością do kulturowego dziedzictwa.
          </p>

          {/* Instrument Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
            <span className="px-4 py-2 bg-wood-dark/60 border border-wood-warm/30 rounded-full text-xs sm:text-sm font-sans font-medium text-[#E4D8C4] flex items-center gap-2 backdrop-blur-xs">
              Kapela na żywo
            </span>
            <span className="px-4 py-2 bg-wood-dark/60 border border-wood-warm/30 rounded-full text-xs sm:text-sm font-sans font-medium text-[#E4D8C4] flex items-center gap-2 backdrop-blur-xs">
              Ognisko Muzyczne (Nauka)
            </span>
            <span className="px-4 py-2 bg-wood-dark/60 border border-wood-warm/30 rounded-full text-xs sm:text-sm font-sans font-medium text-[#E4D8C4] flex items-center gap-2 backdrop-blur-xs">
              Skrzypce regionalne
            </span>
            <span className="px-4 py-2 bg-wood-dark/60 border border-wood-warm/30 rounded-full text-xs sm:text-sm font-sans font-medium text-[#E4D8C4] flex items-center gap-2 backdrop-blur-xs">
              Akordeon & Basy
            </span>
            <span className="px-4 py-2 bg-wood-dark/60 border border-wood-warm/30 rounded-full text-xs sm:text-sm font-sans font-medium text-[#E4D8C4] flex items-center gap-2 backdrop-blur-xs">
              Śpiew góralski
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="tel:889363480" 
              className="w-full sm:w-auto px-8 py-4 bg-wood-warm text-white hover:bg-wood-light transition-all duration-300 font-sans font-semibold uppercase text-xs tracking-widest rounded-[2px] shadow-lg flex items-center justify-center gap-2"
            >
              ZADZWOŃ: 889 363 480
            </a>
            <a 
              href="#galeria" 
              className="w-full sm:w-auto px-8 py-4 border border-cream-border/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300 font-sans uppercase text-xs tracking-widest rounded-[2px] flex items-center justify-center"
            >
              Obejrzyj galerię
            </a>
          </div>

        </div>
        
        {/* Down Arrow Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#E4D8C4]/60 animate-bounce">
          <a href="#o-nas" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
            <span className="font-sans font-light text-[9px] tracking-widest uppercase">Poznaj naszą muzykę</span>
            <span className="text-lg">↓</span>
          </a>
        </div>
      </section>

      {/* 4. FOLK BAND SEPARATOR (Mountain Zigzag) */}
      <div className="folk-band" />

      {/* 5. ABOUT SECTION */}
      <section id="o-nas" className="py-24 px-4 bg-linen">
        <div className="max-w-[1080px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-wood-warm uppercase">Kapela Dziewięćsił</span>
            <h2 className="font-serif font-bold text-wood-dark text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight">
              Żywa Muzyka, Tradycja i Ognisko Muzyczne
            </h2>
            <div className="ornament">
              <span className="orn-line"></span>
              <span className="orn-mark">❦</span>
              <span className="orn-line"></span>
            </div>
          </div>

          {/* Two-column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Text & Plaque */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-wood-mid font-sans leading-relaxed text-base sm:text-lg">
              <p className="font-serif italic text-wood-dark text-xl leading-relaxed">
                „Muzyka góralska to serce naszego regionu. Pielęgnujemy dawne spiskie i podhalańskie nuty, grając na żywo oraz przekazując tę pasję młodemu pokoleniu.”
              </p>
              
              <p>
                <strong>Kapela Dziewięćsił</strong> z Czarnej Góry to kapela góralska, która z dumą prezentuje bogate dziedzictwo muzyczne Spisza, Podhala i całego regionu Tatr. Łączymy temperament, kunszt instrumentalny oraz autentyczny góralski śpiew, zapewniając niepowtarzalną oprawę muzyczną koncertów, uroczystości i wydarzeń kulturalnych.
              </p>
              
              <p>
                Równolegle przy kapeli działa nasze <strong>Ognisko Muzyczne</strong> — przestrzeń tworzona z myślą o nauce gry na instrumentach regionalnych oraz śpiewu. Uczymy dzieci, młodzież i dorosłych autentycznych melodii spiskich i podhalańskich, techniki sekundowania oraz wspólnego muzykowania w kapeli.
              </p>

              {/* Dark Wood Contact Card (Plaque) */}
              <div className="mt-6 p-8 bg-paper border border-cream-border rounded-[2px] wood-border relative overflow-hidden shadow-xs">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-wood-warm"></div>
                <h3 className="font-serif font-semibold text-wood-dark text-xl mb-3">Zamów kapelę lub zapisz się do ogniska!</h3>
                <p className="text-sm text-wood-mid mb-6 font-sans">
                  Niezależnie od tego, czy szukasz oprawy muzycznej na swoje wydarzenie, czy chcesz rozpocząć naukę gry i śpiewu — zapraszamy do serdecznego kontaktu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:889363480" 
                    className="px-6 py-3.5 bg-wood-dark text-white hover:bg-wood-warm transition-all duration-300 font-sans font-semibold uppercase text-[10px] tracking-widest text-center rounded-[2px]"
                  >
                    Zadzwoń: 889 363 480
                  </a>
                  <a 
                    href="mailto:ogniskodziewiecsil@gmail.com" 
                    className="px-6 py-3.5 border border-wood-mid text-wood-mid hover:bg-wood-dark hover:text-white transition-all duration-300 font-sans font-semibold uppercase text-[10px] tracking-widest text-center rounded-[2px]"
                  >
                    Napisz do nas e-mail
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Feature Rows & Teaching Focus */}
            <div id="nauka" className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Feature 1 */}
              <div className="bg-paper border border-cream-border p-6 rounded-[2px] hover:shadow-md transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <span className="p-3 bg-linen rounded-[2px] text-wood-warm flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-wood-dark text-lg sm:text-xl">Występy Kapeli na Żywo</h3>
                    <p className="text-sm text-wood-mid mt-1 font-sans leading-relaxed">
                      Tradycyjna oprawa muzyczna koncertów, imprez regionalnych, uroczystości i spotkań okolicznościowych w pełnym spiskim i podhalańskim stroju.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-paper border border-cream-border p-6 rounded-[2px] hover:shadow-md transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <span className="p-3 bg-linen rounded-[2px] text-wood-warm flex items-center justify-center">
                    <Music className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-wood-dark text-lg sm:text-xl">Nauka Gry na Skrzypcach</h3>
                    <p className="text-sm text-wood-mid mt-1 font-sans leading-relaxed">
                      Lekcje w Ognisku Muzycznym — nauka melodii regionalnych ze słuchu, techniki smyczkowania, ozdobników oraz autentycznego sekundowania.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-paper border border-cream-border p-6 rounded-[2px] hover:shadow-md transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <span className="p-3 bg-linen rounded-[2px] text-wood-warm flex items-center justify-center">
                    <Music className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-wood-dark text-lg sm:text-xl">Akordeon i Basy Góralskie</h3>
                    <p className="text-sm text-wood-mid mt-1 font-sans leading-relaxed">
                      Opanowanie basowania oraz gry na akordeonie — spiskie polki, czardasze, walczyki oraz rytmiczny akompaniament kapeli.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-paper border border-cream-border p-6 rounded-[2px] hover:shadow-md transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <span className="p-3 bg-linen rounded-[2px] text-wood-warm flex items-center justify-center">
                    <Music className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-wood-dark text-lg sm:text-xl">Śpiew Góralski</h3>
                    <p className="text-sm text-wood-mid mt-1 font-sans leading-relaxed">
                      Pielęgnowanie dawnych przyśpiewek, pieśni pasterskich oraz nauka śpiewu białym głosem z tradycyjną góralską wielogłosowością.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Mountain Separator */}
      <div className="folk-band" />

      {/* HISTORIA POWSTANIA SECTION */}
      <section id="historia" className="py-24 px-4 bg-paper border-y border-cream-border/60 relative overflow-hidden">
        <div className="max-w-[1080px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-wood-warm uppercase">Tradycja, Pasja i Wspólnota</span>
            <h2 className="font-serif font-bold text-wood-dark text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight">
              Historia Powstania Kapeli Muzycznej Dziewięćsił
            </h2>
            <div className="ornament">
              <span className="orn-line"></span>
              <span className="orn-mark">❦</span>
              <span className="orn-line"></span>
            </div>
          </div>

          {/* Key Facts / Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            <div className="bg-linen p-5 border border-cream-border rounded-[2px] text-center shadow-2xs">
              <Calendar className="w-6 h-6 text-wood-warm mx-auto mb-2" />
              <div className="font-serif font-bold text-wood-dark text-xl sm:text-2xl">Lipiec 2023</div>
              <div className="text-xs text-wood-mid font-sans mt-1">Pierwsza wizja i pomysł</div>
            </div>
            <div className="bg-linen p-5 border border-cream-border rounded-[2px] text-center shadow-2xs">
              <Users className="w-6 h-6 text-wood-warm mx-auto mb-2" />
              <div className="font-serif font-bold text-wood-dark text-xl sm:text-2xl">150+ Uczniów</div>
              <div className="text-xs text-wood-mid font-sans mt-1">Od 4-latków po dorosłych</div>
            </div>
            <div className="bg-linen p-5 border border-cream-border rounded-[2px] text-center shadow-2xs">
              <BookOpen className="w-6 h-6 text-wood-warm mx-auto mb-2" />
              <div className="font-serif font-bold text-wood-dark text-xl sm:text-2xl">9 Nauczycieli</div>
              <div className="text-xs text-wood-mid font-sans mt-1">Zajęcia Pn – Pt i w soboty</div>
            </div>
            <div className="bg-linen p-5 border border-cream-border rounded-[2px] text-center shadow-2xs">
              <Compass className="w-6 h-6 text-wood-warm mx-auto mb-2" />
              <div className="font-serif font-bold text-wood-dark text-xl sm:text-2xl">15+ Miejscowości</div>
              <div className="text-xs text-wood-mid font-sans mt-1">Spisz, Podhale i Słowacja</div>
            </div>
          </div>

          {/* Lead Introduction */}
          <div className="p-8 sm:p-10 bg-linen border border-cream-border wood-border rounded-[2px] mb-12 shadow-xs">
            <p className="font-serif text-wood-dark text-lg sm:text-xl leading-relaxed">
              Kapela Muzyczna Dziewięćsił, założona przez Jacka Sarnę, to wyjątkowe miejsce na mapie muzycznej Spisza i Podhala. Jej powstanie było odpowiedzią na potrzebę stworzenia przestrzeni, w której muzyka regionalna może być pielęgnowana i rozwijana w atmosferze przyjaźni i wspólnoty, z dala od sztywnych ram tradycyjnej edukacji muzycznej.
            </p>
          </div>

          {/* Timeline & Detailed Story Chapters */}
          <div className="space-y-10 text-wood-mid font-sans text-base sm:text-lg leading-relaxed">
            
            {/* Chapter 1 */}
            <div className="bg-linen/60 p-8 border border-cream-border/80 rounded-[2px] relative shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-wood-warm/15 text-wood-warm font-serif font-bold text-sm flex items-center justify-center shrink-0">1</span>
                <h3 className="font-serif font-bold text-wood-dark text-2xl sm:text-3xl">Jak to się zaczęło?</h3>
              </div>
              <div className="space-y-4 text-wood-dark/90">
                <p>
                  Jacek Sarna, od dawna marzący o skupieniu muzyków regionalnych, podjął odważną decyzję o realizacji swojej wizji. W lipcu 2023 roku, podczas rozmowy przy kawie, przekonał swojego znajomego muzyka, Grzegorza, do idei Kapeli Muzycznej. Celem było stworzenie miejsca, do którego ludzie chcieliby przychodzić z przyjemności, a nie z obowiązku, gdzie każdy mógłby spróbować swoich sił na instrumencie już od pierwszego spotkania.
                </p>
                <p>
                  Początki były pełne wyzwań. Znalezienie odpowiedniego miejsca okazało się problemem, ale z pomocą przyszła jednostka OSP Czarna Góra, udostępniając remizę. Jacek, świadomy kosztów instrumentów i niepewności początkujących uczniów, postanowił wypożyczać instrumenty, co znacznie ułatwiło start wielu osobom.
                </p>
                <p>
                  Pierwsze spotkanie organizacyjne w sierpniu przerosło oczekiwania, a frekwencja zaskoczyła twórców. We wrześniu rozpoczęły się regularne zajęcia. Szybko okazało się, że akustyka remizy nie sprzyja nauce gry na skrzypcach, dlatego Jacek zdecydował się na przerobienie rodzinnego garażu na salkę do nauki.
                </p>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="bg-linen/60 p-8 border border-cream-border/80 rounded-[2px] relative shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-wood-warm/15 text-wood-warm font-serif font-bold text-sm flex items-center justify-center shrink-0">2</span>
                <h3 className="font-serif font-bold text-wood-dark text-2xl sm:text-3xl">Niezwykły Rozwój i Pierwsze Sukcesy</h3>
              </div>
              <div className="space-y-4 text-wood-dark/90">
                <p>
                  Liczba uczniów rosła w błyskawicznym tempie. Już po dwóch miesiącach nauki, widząc zapał i postępy podopiecznych, Kapela Muzyczna Dziewięćsił podjęła śmiałą decyzję o pierwszym publicznym występie. Grudzień był miesiącem intensywnych prób, a efekty przeszły najśmielsze oczekiwania. Uczniowie, uczący się zaledwie dwa i pół miesiąca, zachwycili publiczność swoim występem na Pasterce. Od tego momentu lawinowo posypały się zaproszenia na kolejne występy, m.in. na Sumę w Boże Narodzenie, w Dzień św. Szczepana, w kościele w Rzepiskach, w pochodzie Trzech Króli, a także na koncert kolęd w Jurgowie, gdzie mieli okazję zagrać z dziecięco-młodzieżową muzyką spiską.
                </p>
                <p>
                  Kapela Muzyczna Dziewięćsił nie tylko grała na scenach, ale też pielęgnowała lokalne tradycje, takie jak kolędowanie po miejscowości i ogrywanie Mojek , co spotkało się z ciepłym przyjęciem mieszkańców.
                </p>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="bg-linen/60 p-8 border border-cream-border/80 rounded-[2px] relative shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-wood-warm/15 text-wood-warm font-serif font-bold text-sm flex items-center justify-center shrink-0">3</span>
                <h3 className="font-serif font-bold text-wood-dark text-2xl sm:text-3xl">Połączenie Kultur i Edukacja Bez Granic</h3>
              </div>
              <div className="space-y-4 text-wood-dark/90">
                <p>
                  Jedną z najbardziej niezwykłych cech Kapeli Muzycznej Dziewięćsił jest jej wielokulturowość. Mimo położenia na Spiszu, Kapela nie ogranicza się tylko do melodii spiskich. Gra również utwory podhalańskie, słowackie i orawskie, świadomie zacierając podziały i podkreślając, że wszyscy są muzykami. Jacek, jako osoba z korzeniami spiskimi i podhalańskimi, sam doświadczył podziałów, dlatego w Kapeli panuje atmosfera pełnej akceptacji, gdzie każdy ma prawo być sobą i pielęgnować swoją kulturę.
                </p>
                <p>
                  Obecnie w Kapeli uczy się ponad 150 osób w różnym wieku, od 4-letnich maluchów po dorosłych. Uczniowie pochodzą nie tylko z Czarnej Góry, ale także z Rzepisk, Jurgowa, Bukowiny Tatrzańskiej, Białki Tatrzańskiej, Trybsza, Łapsz, a nawet z Zakopanego, Poronina, Murzasichla, Waksmunda, Boru, Dursztyna, Piekielnika i słowackiego Zdiaru.
                </p>
                <p>
                  W Kapeli naucza się gry na skrzypcach, basach, kontrabasie i akordeonie, a także śpiewu. W planach jest rozszerzenie oferty o altówkę i cymbały. Zajęcia prowadzi 9 nauczycieli od poniedziałku do piątku, a w soboty Jacek prowadzi zajęcia grupowe w remizie, dzieląc się swoją pasją i doświadczeniem.
                </p>
                <p className="font-serif italic text-wood-dark font-semibold text-lg sm:text-xl pt-4 border-t border-cream-border/80 text-wood-warm">
                  Historia Kapeli Muzycznej Dziewięćsił to dowód na to, że z prawdziwej pasji i zaangażowania można stworzyć coś niezwykłego, co łączy ludzi i pielęgnuje cenne tradycje, jednocześnie otwierając się na nowe.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* UPCOMING CONCERTS SECTION (GOOGLE CALENDAR API) */}
      <UpcomingConcerts />

      {/* 6. GALLERY SECTION */}
      <section id="galeria" className="py-24 px-4 bg-paper">
        <div className="max-w-[1080px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-wood-warm uppercase">Kapela Dziewięćsił w Kadrze</span>
            <h2 className="font-serif font-bold text-wood-dark text-3xl sm:text-4xl md:text-5xl mt-2">
              Występy, Koncerty i Życie Ogniska
            </h2>
            <div className="ornament">
              <span className="orn-line"></span>
              <span className="orn-mark">❦</span>
              <span className="orn-line"></span>
            </div>
            <p className="text-wood-mid max-w-[540px] mx-auto font-sans text-sm mt-4 leading-relaxed">
              Przeżyj z nami najpiękniejsze chwile: koncerty na tatrzańskich scenach, występy na uroczystościach, radosne próby kapeli oraz zajęcia w Ognisku Muzycznym.
            </p>
          </div>

          {/* 
            PURE CSS EXPANDABLE GALLERY HACK
            Uses named peer 'peer/gallery' to toggle images 7-12 and expand button labels smoothly.
          */}
          <input type="checkbox" id="gallery-toggle" className="hidden peer/gallery" />

          {/* Grid 1: Always Visible Images (first 6 items from src/content/gallery.json) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleGalleryItems.map((photo, index) => (
              <div key={`gallery-visible-${index}`} className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                  <img
                    src={withBase(photo.image)}
                    alt={photo.alt || 'Zdjęcie z galerii Kapeli Dziewięćsił'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Grid 2: Expandable Images (all remaining items from src/content/gallery.json) */}
          {extraGalleryItems.length > 0 && (
            <div className="max-h-0 overflow-hidden opacity-0 scale-y-95 transition-all duration-1000 ease-in-out peer-checked/gallery:max-h-[5000px] peer-checked/gallery:opacity-100 peer-checked/gallery:scale-y-100 peer-checked/gallery:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {extraGalleryItems.map((photo, index) => (
                  <div key={`gallery-extra-${index}`} className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                    <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                      <img
                        src={withBase(photo.image)}
                        alt={photo.alt || 'Zdjęcie z galerii Kapeli Dziewięćsił'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expand and Collapse Buttons (only shown when there is something to expand) */}
          {extraGalleryItems.length > 0 && (
            <div className="flex justify-center mt-12">
              {/* Expanded button label */}
              <label 
                htmlFor="gallery-toggle" 
                className="peer-checked/gallery:hidden cursor-pointer select-none px-8 py-4 border-4 border-double border-wood-warm text-wood-warm hover:bg-wood-warm hover:text-white font-sans uppercase text-xs font-semibold tracking-widest transition-all duration-300 rounded-[2px] inline-flex items-center gap-2.5 shadow-xs"
              >
                Rozwiń całą galerię wspomnień ({galleryItems.length} zdjęć) <span className="text-sm">❦</span>
              </label>
              
              {/* Collapse button label */}
              <label 
                htmlFor="gallery-toggle" 
                className="hidden peer-checked/gallery:inline-flex cursor-pointer select-none px-8 py-4 border-4 border-double border-wood-warm text-wood-warm hover:bg-wood-warm hover:text-white font-sans uppercase text-xs font-semibold tracking-widest transition-all duration-300 rounded-[2px] items-center gap-2.5 shadow-xs"
              >
                Zwiń galerię <span className="text-sm">❦</span>
              </label>
            </div>
          )}

        </div>
      </section>

      {/* Another Mountain separator */}
      <div className="folk-band" />

      {/* 7. HOURS SECTION */}
      <section id="godziny" className="py-24 px-4 bg-wood-dark text-linen relative overflow-hidden">
        {/* Subtle wood pattern overlay background */}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/95 to-[#1c1209]/98"></div>
        
        <div className="relative z-10 max-w-[800px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-[#D4B078] uppercase">Godziny Lekcji i Prób</span>
            <h2 className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight">
              Harmonogram Pracy Ogniska
            </h2>
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="w-12 h-[1px] bg-wood-warm/40"></span>
              <span className="font-serif text-[#D4B078] text-xl">❦</span>
              <span className="w-12 h-[1px] bg-wood-warm/40"></span>
            </div>
            <p className="text-muted-brown max-w-[500px] mx-auto font-sans text-sm mt-4 leading-relaxed">
              Zapraszamy na regularne zajęcia indywidualne oraz próby zespołowe w podanych poniżej godzinach. Prosimy o telefoniczne dopasowanie pory lekcji.
            </p>
          </div>

          {/* Schedule Table in Double Border Wood Box */}
          <div className="bg-[#2E1E0F]/70 border-4 border-double border-wood-warm p-6 sm:p-10 rounded-[2px] shadow-2xl max-w-[600px] mx-auto relative">
            <div className="divide-y divide-wood-warm/35 font-sans text-base">
              
              <div className="flex justify-between py-4 items-center">
                <span className="font-medium text-[#E4D8C4]">Poniedziałek</span>
                <span className="font-mono text-white text-sm tracking-wider bg-wood-dark/90 px-3 py-1 border border-wood-warm/25">09:00 – 20:00</span>
              </div>
              
              <div className="flex justify-between py-4 items-center">
                <span className="font-medium text-[#E4D8C4]">Wtorek</span>
                <span className="font-mono text-white text-sm tracking-wider bg-wood-dark/90 px-3 py-1 border border-wood-warm/25">09:00 – 20:00</span>
              </div>
              
              <div className="flex justify-between py-4 items-center">
                <span className="font-medium text-[#E4D8C4]">Środa</span>
                <span className="font-mono text-white text-sm tracking-wider bg-wood-dark/90 px-3 py-1 border border-wood-warm/25">09:00 – 20:00</span>
              </div>
              
              <div className="flex justify-between py-4 items-center">
                <span className="font-medium text-[#E4D8C4]">Czwartek</span>
                <span className="font-mono text-white text-sm tracking-wider bg-wood-dark/90 px-3 py-1 border border-wood-warm/25">09:00 – 20:00</span>
              </div>
              
              <div className="flex justify-between py-4 items-center">
                <span className="font-medium text-[#E4D8C4]">Piątek</span>
                <span className="font-mono text-white text-sm tracking-wider bg-wood-dark/90 px-3 py-1 border border-wood-warm/25">09:00 – 20:00</span>
              </div>
              
              <div className="flex justify-between py-4 items-center">
                <span className="font-medium text-[#E4D8C4] flex items-center gap-2">
                  Sobota 
                  <span className="text-[9px] bg-wood-warm/20 text-[#D4B078] px-2 py-0.5 uppercase tracking-widest font-semibold rounded-[2px] border border-wood-warm/20">
                    Weekend
                  </span>
                </span>
                <span className="font-mono text-white text-sm tracking-wider bg-wood-dark/90 px-3 py-1 border border-wood-warm/25">09:00 – 19:00</span>
              </div>
              
              <div className="flex justify-between py-4 items-center">
                <span className="font-medium text-[#E4D8C4] flex items-center gap-2">
                  Niedziela 
                  <span className="text-[9px] bg-wood-warm/20 text-[#D4B078] px-2 py-0.5 uppercase tracking-widest font-semibold rounded-[2px] border border-wood-warm/20">
                    Weekend
                  </span>
                </span>
                <span className="font-mono text-white text-sm tracking-wider bg-wood-dark/90 px-3 py-1 border border-wood-warm/25">09:00 – 19:00</span>
              </div>

            </div>

            <div className="mt-8 text-center text-xs text-muted-brown font-sans border-t border-wood-warm/20 pt-6 leading-relaxed">
              * Godziny zajęć indywidualnych z mistrzami skrzypiec, basów oraz śpiewu mogą ulec przesunięciu po wcześniejszym uzgodnieniu z instruktorem.
            </div>
          </div>

        </div>
      </section>

      {/* Another Mountain separator */}
      <div className="folk-band" />

      {/* 8. CONTACT SECTION */}
      <section id="kontakt" className="py-24 px-4 bg-linen">
        <div className="max-w-[1080px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-wood-warm uppercase">Kontakt i Rezerwacja</span>
            <h2 className="font-serif font-bold text-wood-dark text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight">
              Zamów Kapelę lub Zapisz się na Lekcje
            </h2>
            <div className="ornament">
              <span className="orn-line"></span>
              <span className="orn-mark">❦</span>
              <span className="orn-line"></span>
            </div>
            <p className="text-wood-mid max-w-[540px] mx-auto font-sans text-sm mt-4 leading-relaxed">
              Planujesz oprawę muzyczną wydarzenia? A może chcesz dołączyć do naszego Ogniska Muzycznego w Czarnej Górze? Skontaktuj się z nami telefonicznie lub e-mailowo!
            </p>
          </div>

          <div className="max-w-[720px] mx-auto">
            
            {/* Contact Details Column */}
            <div className="bg-paper border border-cream-border p-8 sm:p-12 rounded-[2px] wood-border flex flex-col gap-10 shadow-sm relative">
              <div>
                <h3 className="font-serif font-bold text-wood-dark text-2xl mb-8 text-center">Dane Kontaktowe</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Phone Row */}
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-linen text-wood-warm rounded-full border border-cream-border flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-[#8C5E32] uppercase tracking-widest font-semibold">Zadzwoń do nas</span>
                      <a 
                        href="tel:889363480" 
                        className="block font-sans font-bold text-lg text-wood-dark hover:text-wood-warm transition-colors mt-0.5"
                      >
                        889 363 480
                      </a>
                    </div>
                  </div>

                  {/* Email Row */}
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-linen text-wood-warm rounded-full border border-cream-border flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-[#8C5E32] uppercase tracking-widest font-semibold">Napisz e-mail</span>
                      <a 
                        href="mailto:ogniskodziewiecsil@gmail.com" 
                        className="block font-sans font-bold text-sm sm:text-base text-wood-dark hover:text-wood-warm transition-colors mt-0.5 break-all"
                      >
                        ogniskodziewiecsil@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address Row */}
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-linen text-wood-warm rounded-full border border-cream-border flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-[#8C5E32] uppercase tracking-widest font-semibold">Adres Ogniska</span>
                      <span className="block font-sans font-bold text-base text-wood-dark mt-0.5">
                        Czarna Góra 34-532
                      </span>
                      <span className="block font-sans text-xs text-wood-mid mt-0.5">Gmina Bukowina Tatrzańska / Spisz</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Media Links */}
              <div className="border-t border-cream-border pt-8 text-center flex flex-col items-center">
                <span className="block font-sans text-[10px] text-[#8C5E32] uppercase tracking-widest font-semibold mb-4">Śledź nasze konto społecznościowe</span>
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://www.facebook.com/people/Kapela-Dziewięćsił-Ognisko-Muzyczne/61556012623348/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-linen text-wood-dark hover:bg-wood-warm hover:text-white transition-all duration-300 rounded-full border border-cream-border flex items-center justify-center"
                    title="Odwiedź nasz Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-linen text-wood-dark hover:bg-wood-warm hover:text-white transition-all duration-300 rounded-full border border-cream-border flex items-center justify-center"
                    title="Śledź nas na Instagramie"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Direct call banner CTA */}
              <div className="mt-2 p-6 bg-linen border border-cream-border rounded-[2px] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div>
                  <h4 className="font-serif font-bold text-wood-dark text-lg leading-snug">Chcesz dokonać zapisu od zaraz?</h4>
                  <p className="font-sans text-xs text-wood-mid mt-0.5">Zadzwoń do nas bezpośrednio i uzgodnij dogodny termin pierwszej próby.</p>
                </div>
                <a 
                  href="tel:889363480" 
                  className="w-full sm:w-auto text-center px-6 py-3.5 bg-wood-warm text-white hover:bg-wood-light transition-all duration-300 font-sans font-semibold uppercase text-xs tracking-widest rounded-[2px] shadow-xs"
                >
                  889 363 480
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-wood-dark text-muted-brown py-16 border-t border-wood-warm/20 font-sans relative overflow-hidden">
        {/* Soft background gradient to absolute pitch dark wood at very bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark via-wood-dark to-[#160d06] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-12">
            
            {/* Footer Brand Logo & Stacked Wordmark */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src={withBase(siteSettings.logoImage)} 
                  alt="Logo Kapela Dziewięćsił" 
                  className="w-12 h-12 object-cover rounded-full border-2 border-wood-warm" 
                />
                <div className="flex flex-col leading-none">
                  <span className="font-sans font-semibold text-xs tracking-[0.25em] text-white uppercase">Kapela</span>
                  <span className="font-caveat font-semibold text-3xl text-[#D4B078] mt-1 select-none">Dziewięćsił</span>
                </div>
              </div>
              <p className="text-xs text-muted-brown max-w-[340px] leading-relaxed mt-2 font-sans">
                 Kapela góralska z Czarnej Góry oraz Ognisko Muzyczne. Tradycyjna muzyka na żywo na koncerty i uroczystości oraz nauka gry na skrzypcach, basach i akordeonie.
              </p>
            </div>

            {/* Quick Links Navigation */}
            <div className="md:col-span-3">
              <h4 className="font-serif font-bold text-white text-base mb-4 uppercase tracking-wider">Nawigacja</h4>
              <ul className="flex flex-col gap-2.5 text-sm font-medium">
                <li><a href="#o-nas" className="hover:text-[#D4B078] transition-colors">O Kapeli</a></li>
                <li><a href="#nauka" className="hover:text-[#D4B078] transition-colors">Oferta i Nauka</a></li>
                <li><a href="#galeria" className="hover:text-[#D4B078] transition-colors">Galeria Zdjęć</a></li>
                <li><a href="#godziny" className="hover:text-[#D4B078] transition-colors">Godziny Prób</a></li>
                <li><a href="#kontakt" className="hover:text-[#D4B078] transition-colors">Kontakt i Rezerwacja</a></li>
              </ul>
            </div>

            {/* Traditional Contact & Social signoffs */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h4 className="font-serif font-bold text-white text-base mb-4 uppercase tracking-wider">Kapela Dziewięćsił</h4>
              <p className="text-sm text-cream-border leading-relaxed font-sans">
                Czarna Góra 34-532, Polska<br />
                Telefon: <a href="tel:889363480" className="hover:text-white transition-colors">889 363 480</a><br />
                E-mail: <a href="mailto:ogniskodziewiecsil@gmail.com" className="hover:text-white transition-colors">ogniskodziewiecsil@gmail.com</a>
              </p>
              
              <div className="flex gap-3 mt-3">
                <a 
                  href="https://www.facebook.com/kapeladziewiecsil/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-[#2E1E0F] hover:bg-wood-warm text-white transition-all duration-300 rounded-full border border-wood-warm/30 flex items-center justify-center"
                  title="Odwiedź Facebook Kapeli"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/OGNISKOMUZYCZNE_DZIEWIECSIL?fbclid=IwcGRvZgFleHRuA2FlbQIxMABicmlkETFkdEVRRnlSQk55Q280MXpYc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjKf-PC2FQoc51mD4ywJYsUvp_J_Pf0skk4oMWnssfk0Ibpq3FdccQ1G7bUR_aem_5WNyhP4m9woF8JIktC9tDw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-[#2E1E0F] hover:bg-wood-warm text-white transition-all duration-300 rounded-full border border-wood-warm/30 flex items-center justify-center"
                  title="Śledź nasz Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Copyright line and editorial heart signature */}
          <div className="border-t border-wood-warm/15 pt-8 text-center text-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-brown">
            <p>© {new Date().getFullYear()} Kapela Dziewięćsił & Ognisko Muzyczne. Wszelkie prawa zastrzeżone.</p>
            <p className="font-serif italic text-white/40 flex items-center gap-1.5 select-none">
              Z miłości do tradycyjnej tatrzańskiej muzyki <span className="text-wood-warm">❦</span> Czarna Góra
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

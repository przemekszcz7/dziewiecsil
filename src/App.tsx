/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Music, Sparkles, X } from 'lucide-react';

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
            O Nas
          </a>
          <a href="#nauka" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Nauka gry i śpiewu
          </a>
          <a href="#galeria" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Galeria zdjęć
          </a>
          <a href="#godziny" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Godziny zajęć
          </a>
          <a href="#kontakt" className="hover:text-wood-warm transition-colors py-2 border-b border-cream-border/40">
            Kontakt i zapisy
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
              src="https://i.ibb.co/7x7yp5q2/689017777-827609407086771-8112193674280947656-n.jpg" 
              alt="Logo Dziewięćsił" 
              className="w-10 h-10 object-cover rounded-full border border-wood-warm group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="flex flex-col leading-none">
              <span className="font-sans font-light text-[10px] tracking-[0.2em] text-wood-dark uppercase">Ognisko Muzyczne</span>
              <span className="font-caveat font-semibold text-2xl text-wood-warm mt-0.5">Dziewięćsił</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-semibold text-wood-mid">
            <a href="#o-nas" className="hover:text-wood-warm transition-colors">O Nas</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#nauka" className="hover:text-wood-warm transition-colors">Nauka</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#galeria" className="hover:text-wood-warm transition-colors">Galeria</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#godziny" className="hover:text-wood-warm transition-colors">Godziny</a>
            <span className="text-cream-border select-none">·</span>
            <a href="#kontakt" className="hover:text-wood-warm transition-colors">Kontakt</a>
          </nav>

          {/* Call-to-Action Pill */}
          <div className="hidden md:block">
            <a 
              href="#kontakt" 
              className="px-5 py-2.5 border border-wood-warm rounded-full text-xs font-sans font-semibold tracking-widest text-wood-warm uppercase hover:bg-wood-warm hover:text-paper transition-all duration-300"
            >
              Zapisz się
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
        style={{ backgroundImage: `url('https://i.ibb.co/JjkXC3D1/656300150-786721457842233-242503682541110822-n.jpg')` }}
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
            Ognisko Muzyczne
          </h1>
          <div className="font-caveat font-semibold text-5xl sm:text-6xl md:text-7xl text-[#D4B078] mt-2 mb-6 select-none">
            Dziewięćsił
          </div>

          <p className="font-sans font-light text-cream-border text-base sm:text-lg md:text-xl leading-relaxed max-w-[680px] mb-10">
            Nauka gry na skrzypcach, basach oraz akordeonie w stylu regionalnym. Pielęgnujemy tradycyjny śpiew góralski z pasją i szacunkiem dla spuścizny mistrzów.
          </p>

          {/* Instrument Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
            <span className="px-4 py-2 bg-wood-dark/60 border border-wood-warm/30 rounded-full text-xs sm:text-sm font-sans font-medium text-[#E4D8C4] flex items-center gap-2 backdrop-blur-xs">
              Skrzypce regionalne
            </span>
            <span className="px-4 py-2 bg-wood-dark/60 border border-wood-warm/30 rounded-full text-xs sm:text-sm font-sans font-medium text-[#E4D8C4] flex items-center gap-2 backdrop-blur-xs">
              Akordeon
            </span>
            <span className="px-4 py-2 bg-wood-dark/60 border border-wood-warm/30 rounded-full text-xs sm:text-sm font-sans font-medium text-[#E4D8C4] flex items-center gap-2 backdrop-blur-xs">
              Tradycyjne Basy
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
            <span className="font-sans font-light text-[9px] tracking-widest uppercase">Poznaj naszą tradycję</span>
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
            <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-wood-warm uppercase">Ognisko Muzyczne Dziewięćsił</span>
            <h2 className="font-serif font-bold text-wood-dark text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight">
              Tradycja Przekazywana z Pokolenia na Pokolenie
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
                „W naszej szkole uczymy muzyki tak, jak dawniej — ze słuchu, z serca i z temperamentu, który drzemie w każdym góralskim smyczku.”
              </p>
              
              <p>
                Ognisko Muzyczne <strong>Dziewięćsił</strong> w Czarnej Górze to wyjątkowe miejsce na mapie polskiego Spisza i Podhala. Naszą misją jest ocalenie od zapomnienia oraz żywe kultywowanie unikalnych tradycji muzycznych regionu Karpat. Uczymy dzieci, młodzież i dorosłych autentycznej, czystej gry na tradycyjnych instrumentach góralskich oraz śpiewu z „piersi” (głosem białym).
              </p>
              
              <p>
                Nasi uczniowie poznają nuty spiskie, podhalańskie oraz orawskie, zdobywają umiejętności sekundowania oraz improwizacji w kapeli. Dbamy o to, aby zajęcia były nie tylko nauką techniki gry, ale również głębokim spotkaniem z żywą kulturą, strojem regionalnym, gwarą i obyczajami naszych ojców.
              </p>

              {/* Dark Wood Contact Card (Plaque) */}
              <div className="mt-6 p-8 bg-paper border border-cream-border rounded-[2px] wood-border relative overflow-hidden shadow-xs">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-wood-warm"></div>
                <h3 className="font-serif font-semibold text-wood-dark text-xl mb-3">Chcesz zagrać z nami w kapeli?</h3>
                <p className="text-sm text-wood-mid mb-6 font-sans">
                  Zajęcia dopasowujemy indywidualnie — zapraszamy zarówno osoby stawiające pierwsze kroki, jak i tych, którzy pragną dopracować swój warsztat i grać w tradycyjnym składzie.
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
                    <Music className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-wood-dark text-lg sm:text-xl">Skrzypce Regionalne</h3>
                    <p className="text-sm text-wood-mid mt-1 font-sans leading-relaxed">
                      Nauka tradycyjnej gry spiskiej i podhalańskiej. Poznasz technikę smyczkowania, ozdobniki (drgawki, zaciągania) oraz autentyczny sekund.
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
                    <h3 className="font-serif font-bold text-wood-dark text-lg sm:text-xl">Akordeon</h3>
                    <p className="text-sm text-wood-mid mt-1 font-sans leading-relaxed">
                      Nauka gry melodycznej i akompaniamentu kapeli. Tradycyjne spiskie polki, czardasze, walczyki oraz weselne i taneczne nuty.
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
                    <h3 className="font-serif font-bold text-wood-dark text-lg sm:text-xl">Tradycyjne Basy</h3>
                    <p className="text-sm text-wood-mid mt-1 font-sans leading-relaxed">
                      Opanowanie basowania — rytmicznego i harmonicznego serca góralskiej muzyki. Gramy na tradycyjnych trzystrunowych basach.
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
                      Otwieranie naturalnego głosu (głos biały), nauka dawnych przyśpiewek, pieśni pasterskich, pytanych oraz tradycyjnej wielogłosowości.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Another Mountain separator */}
      <div className="folk-band" />

      {/* 6. GALLERY SECTION */}
      <section id="galeria" className="py-24 px-4 bg-paper">
        <div className="max-w-[1080px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-wood-warm uppercase">Nasze Wydarzenia i Wspomnienia</span>
            <h2 className="font-serif font-bold text-wood-dark text-3xl sm:text-4xl md:text-5xl mt-2">
              Tętniące Życiem Ognisko w Kadrze
            </h2>
            <div className="ornament">
              <span className="orn-line"></span>
              <span className="orn-mark">❦</span>
              <span className="orn-line"></span>
            </div>
            <p className="text-wood-mid max-w-[540px] mx-auto font-sans text-sm mt-4 leading-relaxed">
              Przeżyj z nami najpiękniejsze chwile: lekcje indywidualne, radosne próby, koncerty na tatrzańskich scenach, nagrania oraz góralskie śpiewogry.
            </p>
          </div>

          {/* 
            PURE CSS EXPANDABLE GALLERY HACK
            Uses named peer 'peer/gallery' to toggle images 7-12 and expand button labels smoothly.
          */}
          <input type="checkbox" id="gallery-toggle" className="hidden peer/gallery" />

          {/* Grid 1: Always Visible Images (1 to 6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Photo 1 */}
            <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                <img 
                  src="https://i.ibb.co/bg09kFSV/731037663-864836570030721-5852817105280616359-n.jpg" 
                  alt="Młodzi muzycy" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>

            {/* Photo 2 */}
            <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                <img 
                  src="https://i.ibb.co/LDfXBhwX/730104250-864836510030727-7527599490019844186-n.jpg" 
                  alt="Skrzypaczki w strojach ludowych" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>

            {/* Photo 3 */}
            <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                <img 
                  src="https://i.ibb.co/xKMxsq3P/729089124-864836396697405-3035361853268572947-n.jpg" 
                  alt="Zajęcia z mistrzami" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>

            {/* Photo 4 */}
            <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                <img 
                  src="https://i.ibb.co/b5sYqMjV/730332054-864836350030743-984458030303002394-n.jpg" 
                  alt="Młody skrzypek" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>

            {/* Photo 5 */}
            <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                <img 
                  src="https://i.ibb.co/C3X9h7VT/729769070-865292729985105-7318775599606778125-n.jpg" 
                  alt="Wspólne muzykowanie" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>

            {/* Photo 6 */}
            <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                <img 
                  src="https://i.ibb.co/B5wgZYL1/730713387-865292636651781-4078662457652631193-n.jpg" 
                  alt="Koncerty regionalne" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>

          </div>

          {/* Grid 2: Expandable Images (7 to 12) */}
          <div className="max-h-0 overflow-hidden opacity-0 scale-y-95 transition-all duration-1000 ease-in-out peer-checked/gallery:max-h-[5000px] peer-checked/gallery:opacity-100 peer-checked/gallery:scale-y-100 peer-checked/gallery:mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Photo 7 */}
              <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                  <img 
                    src="https://i.ibb.co/JR39PzgP/730332066-865292566651788-6502464684219307053-n.jpg" 
                    alt="Próba muzyczna kapeli" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
              </div>

              {/* Photo 8 */}
              <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                  <img 
                    src="https://i.ibb.co/spj0CFLy/738809564-871971192650592-6203692687169341183-n.jpg" 
                    alt="Koncert i basowanie" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
              </div>

              {/* Photo 9 */}
              <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                  <img 
                    src="https://i.ibb.co/GvqvY3VT/738303956-871970969317281-3030283913625569762-n.jpg" 
                    alt="Występy na Spiszu" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
              </div>

              {/* Photo 10 */}
              <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                  <img 
                    src="https://i.ibb.co/Pv0vHC1G/740601677-877413725439672-1414533569321402121-n.jpg" 
                    alt="Śpiew z piersi podhale" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
              </div>

              {/* Photo 11 */}
              <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                  <img 
                    src="https://i.ibb.co/21v9w9gH/742362708-877413675439677-4777994752650649269-n.jpg" 
                    alt="Uczniowie akordeonu" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
              </div>

              {/* Photo 12 */}
              <div className="bg-linen p-3.5 wood-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="overflow-hidden aspect-[4/3] bg-wood-dark">
                  <img 
                    src="https://i.ibb.co/KcV4dRL3/742145178-877413958772982-510836111586596492-n.jpg" 
                    alt="Muzyczna gromada Dziewięćsił" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Expand and Collapse Buttons */}
          <div className="flex justify-center mt-12">
            {/* Expanded button label */}
            <label 
              htmlFor="gallery-toggle" 
              className="peer-checked/gallery:hidden cursor-pointer select-none px-8 py-4 border-4 border-double border-wood-warm text-wood-warm hover:bg-wood-warm hover:text-white font-sans uppercase text-xs font-semibold tracking-widest transition-all duration-300 rounded-[2px] inline-flex items-center gap-2.5 shadow-xs"
            >
              Rozwiń całą galerię wspomnień (12 zdjęć) <span className="text-sm">❦</span>
            </label>
            
            {/* Collapse button label */}
            <label 
              htmlFor="gallery-toggle" 
              className="hidden peer-checked/gallery:inline-flex cursor-pointer select-none px-8 py-4 border-4 border-double border-wood-warm text-wood-warm hover:bg-wood-warm hover:text-white font-sans uppercase text-xs font-semibold tracking-widest transition-all duration-300 rounded-[2px] items-center gap-2.5 shadow-xs"
            >
              Zwiń galerię <span className="text-sm">❦</span>
            </label>
          </div>

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
            <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-wood-warm uppercase">Dołącz do Dziewięćsiłu</span>
            <h2 className="font-serif font-bold text-wood-dark text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight">
              Rozpocznij Swoją Muzyczną Drogę
            </h2>
            <div className="ornament">
              <span className="orn-line"></span>
              <span className="orn-mark">❦</span>
              <span className="orn-line"></span>
            </div>
            <p className="text-wood-mid max-w-[540px] mx-auto font-sans text-sm mt-4 leading-relaxed">
              Czekamy na Ciebie w Czarnej Górze! Skontaktuj się bezpośrednio z nami telefonicznie, napisz wiadomość e-mail lub odwiedź nas na naszych profilach społecznościowych.
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
                  src="https://i.ibb.co/7x7yp5q2/689017777-827609407086771-8112193674280947656-n.jpg" 
                  alt="Logo Dziewięćsił" 
                  className="w-12 h-12 object-cover rounded-full border-2 border-wood-warm" 
                />
                <div className="flex flex-col leading-none">
                  <span className="font-sans font-semibold text-xs tracking-[0.25em] text-white uppercase">Ognisko Muzyczne</span>
                  <span className="font-caveat font-semibold text-3xl text-[#D4B078] mt-1 select-none">Dziewięćsił</span>
                </div>
              </div>
              <p className="text-xs text-muted-brown max-w-[340px] leading-relaxed mt-2 font-sans">
                 Regionalna szkoła i ognisko muzyki góralskiej pod Tatrami. Uczymy gry na skrzypcach, basach i akordeonie w duchu autentycznej tradycji spiskiej i podhalańskiej.
              </p>
            </div>

            {/* Quick Links Navigation */}
            <div className="md:col-span-3">
              <h4 className="font-serif font-bold text-white text-base mb-4 uppercase tracking-wider">Nawigacja</h4>
              <ul className="flex flex-col gap-2.5 text-sm font-medium">
                <li><a href="#o-nas" className="hover:text-[#D4B078] transition-colors">O Nas</a></li>
                <li><a href="#nauka" className="hover:text-[#D4B078] transition-colors">Nauka Gry i Śpiewu</a></li>
                <li><a href="#galeria" className="hover:text-[#D4B078] transition-colors">Galeria Wspomnień</a></li>
                <li><a href="#godziny" className="hover:text-[#D4B078] transition-colors">Godziny Lekcji</a></li>
                <li><a href="#kontakt" className="hover:text-[#D4B078] transition-colors">Kontakt i Zapisy</a></li>
              </ul>
            </div>

            {/* Traditional Contact & Social signoffs */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h4 className="font-serif font-bold text-white text-base mb-4 uppercase tracking-wider">Ognisko Dziewięćsił</h4>
              <p className="text-sm text-cream-border leading-relaxed font-sans">
                Czarna Góra 34-532, Polska<br />
                Telefon: <a href="tel:889363480" className="hover:text-white transition-colors">889 363 480</a><br />
                E-mail: <a href="mailto:ogniskodziewiecsil@gmail.com" className="hover:text-white transition-colors">ogniskodziewiecsil@gmail.com</a>
              </p>
              
              <div className="flex gap-3 mt-3">
                <a 
                  href="https://www.facebook.com/people/Kapela-Dziewięćsił-Ognisko-Muzyczne/61556012623348/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-[#2E1E0F] hover:bg-wood-warm text-white transition-all duration-300 rounded-full border border-wood-warm/30 flex items-center justify-center"
                  title="Odwiedź Facebook Kapeli"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/" 
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
            <p>© {new Date().getFullYear()} Ognisko Muzyczne Kapela Dziewięćsił. Wszelkie prawa zastrzeżone.</p>
            <p className="font-serif italic text-white/40 flex items-center gap-1.5 select-none">
              Z miłości do tradycyjnej tatrzańskiej muzyki <span className="text-wood-warm">❦</span> Czarna Góra
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

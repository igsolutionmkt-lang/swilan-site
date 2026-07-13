/* SWILAN — camada de animações premium (GSAP + ScrollTrigger).
   Progressive enhancement: se o CDN falhar ou o utilizador tiver
   prefers-reduced-motion, sai sem efeitos e o .reveal base do site.js
   continua a funcionar sozinho. */
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  // ── Hero: entrada editorial (imagem assenta + conteúdo em cascata) ──
  var heroImg = document.querySelector('.page-hero > img, #ihero > img');
  var heroContent = document.querySelector('.page-hero .hero-content, #ihero .c');

  if (heroImg) {
    gsap.fromTo(heroImg, { scale: 1.08 }, { scale: 1, duration: 2.4, ease: 'power2.out' });
  }
  if (heroContent) {
    gsap.fromTo(heroContent.children,
      { opacity: 0, y: 26 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.15, clearProps: 'opacity,transform' }
    );
  }

  // ── Hero: o conteúdo recua e esbate ao sair de cena ──
  var hero = document.querySelector('.page-hero, #ihero');
  if (hero && heroContent) {
    gsap.to(heroContent, {
      y: -50, autoAlpha: 0.3, ease: 'none',
      scrollTrigger: { trigger: hero, start: 'center top', end: 'bottom top', scrub: true }
    });
  }

  // ── Blocos editoriais: parallax subtil na imagem de fundo ──
  document.querySelectorAll('.editorial-img').forEach(function (img) {
    gsap.fromTo(img,
      { backgroundPosition: 'center 38%' },
      {
        backgroundPosition: 'center 62%', ease: 'none',
        scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true }
      }
    );
  });

  // ── Linhas douradas: desenham-se a partir do centro ──
  document.querySelectorAll('.gold-line').forEach(function (line) {
    gsap.fromTo(line, { scaleX: 0 }, {
      scaleX: 1, duration: 1.1, ease: 'power2.inOut',
      scrollTrigger: { trigger: line, start: 'top 88%', once: true }
    });
  });
})();

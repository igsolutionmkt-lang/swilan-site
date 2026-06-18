// ════════════════════════════════════════════
//  SWILAN CUÉNOD — Configuração central
//  Editar estes valores antes do deploy
// ════════════════════════════════════════════

const CONFIG = {
  whatsapp:   "351XXXXXXXXX",          // ex: 351912345678
  webhook:    "https://WEBHOOK_URL",   // URL do n8n
  siteUrl:    "https://igsolutionmkt-lang.github.io/swilan-site/",
  setubalUrl: "https://igsolutionmkt-lang.github.io/swilan-penthouse/",

  empresa: {
    nome:  "SWILAN CUÉNOD",
    razao: "Empreendimentos Imobiliários, Unipessoal Lda",
    nif:   "518637891",
    morada:"Avenidas Novas, Lisboa, Portugal",
    email: "geral@swilancuenod.pt",
  },

  // ── Imóveis ──────────────────────────────
  imoveis: [
    {
      id:        "setubal",
      badge:     "Disponível",
      badgeEn:   "Available",
      badgeFr:   "Disponible",
      badgeEs:   "Disponible",
      badgeDe:   "Verfügbar",
      foto:      "assets/setubal.jpg",
      fotoAlt:   "Terraço privativo Penthouse Setúbal",
      tipo:      "Penthouse T3",
      local:     "Setúbal",
      preco:     "950.000 €",
      area:      "154 m²",
      quartos:   "3",
      wc:        "3",
      certif:    "A",
      entrega:   "Imediata",
      url:       "https://igsolutionmkt-lang.github.io/swilan-penthouse/",
      ctaKey:    "verDetalhes",
    },
    {
      id:        "gaia-c",
      badge:     "Em Construção",
      badgeEn:   "Under Construction",
      badgeFr:   "En Construction",
      badgeEs:   "En Construcción",
      badgeDe:   "Im Bau",
      foto:      "assets/gaia-c.jpg",
      fotoAlt:   "Planta T2 Gaia Fração C",
      tipo:      "T2 + Terraço",
      local:     "Vila Nova de Gaia (Foz)",
      preco:     "600.000 €",
      area:      "T2",
      quartos:   "2",
      wc:        "2",
      certif:    "A",
      entrega:   "Dez. 2026",
      url:       null,
      ctaKey:    "preReserva",
    },
    {
      id:        "gaia-d",
      badge:     "Em Construção",
      badgeEn:   "Under Construction",
      badgeFr:   "En Construction",
      badgeEs:   "En Construcción",
      badgeDe:   "Im Bau",
      foto:      "assets/gaia-d.jpg",
      fotoAlt:   "Planta T2 Gaia Fração D",
      tipo:      "T2 + Terraço",
      local:     "Vila Nova de Gaia (Foz)",
      preco:     "624.000 €",
      area:      "T2",
      quartos:   "2",
      wc:        "2",
      certif:    "A",
      entrega:   "Dez. 2026",
      url:       null,
      ctaKey:    "preReserva",
    },
  ],
};

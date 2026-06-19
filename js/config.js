// ════════════════════════════════════════════
//  SWILAN CUÉNOD — Configuração central
//  Portfólio Imobiliário Privado Premium
// ════════════════════════════════════════════

const CONFIG = {
  whatsapp:   "351XXXXXXXXX",          // ← substituir antes do deploy
  webhook:    "https://WEBHOOK_URL",   // ← substituir antes do deploy
  siteUrl:    "https://igsolutionmkt-lang.github.io/swilan-site/",

  // PT-first: idiomas EN/ES/FR/DE entram na Fase 2 (ver i18n.js)
  langAtivo:  false,

  empresa: {
    nome:   "SWILAN CUÉNOD",
    razao:  "Empreendimentos Imobiliários, Unipessoal Lda",
    nif:    "518637891",
    morada: "Avenidas Novas, Lisboa, Portugal",
    email:  "geral@swilancuenod.pt",
  },

  // ── Portfólio (4 imóveis · 3 estados) ──────────────────────────
  // estado: "pronto" | "construcao" | "lifestyle"
  imoveis: [
    {
      id:        "setubal",
      estado:    "pronto",
      regiao:    "Setúbal",
      foto:      "assets/setubal.jpg",
      fotoAlt:   "Apartamento T3 premium em Setúbal, piso elevado",
      nome:      "Setúbal Panorama",
      tipo:      "T3",
      local:     "Setúbal",
      preco:     "950.000 €",
      destaque:  "Piso elevado · 2 lugares em box · arrecadação · documentação pronta",
      area:      "154 m²",
      quartos:   "3",
      wc:        "3",
      box:       "2",
      certif:    "A",
      entrega:   "Imediata",
      dossier:   true,
      url:       "setubal.html",
    },
    {
      id:        "gaia-c",
      estado:    "construcao",
      regiao:    "Gaia/Foz",
      foto:      "assets/gaia-c.jpg",
      fotoAlt:   "T2 Fração C, Sal D'Ouro Coast, Vila Nova de Gaia",
      nome:      "Gaia/Foz — Fração C",
      tipo:      "T2",
      local:     "Canidelo · Vila Nova de Gaia",
      preco:     "600.000 €",
      destaque:  "238 m² área total · terraço privativo 136 m² · 2 lugares em box",
      area:      "238 m² área total",
      areaPriv:  "102 m²",
      terraco:   "136 m²",
      quartos:   "2",
      wc:        "2",
      box:       "2",
      certif:    "A",
      entrega:   "Final de 2026",
      dossier:   true,
      url:       "gaia.html",
    },
    {
      id:        "gaia-d",
      estado:    "construcao",
      regiao:    "Gaia/Foz",
      foto:      "assets/gaia-d.jpg",
      fotoAlt:   "T2 Fração D, Sal D'Ouro Coast, Vila Nova de Gaia",
      nome:      "Gaia/Foz — Fração D",
      tipo:      "T2",
      local:     "Canidelo · Vila Nova de Gaia",
      preco:     "624.000 €",
      destaque:  "Terraço privativo 203 m² · sala e cozinha 47 m² · 2 lugares em box",
      area:      "Áreas completas no dossier",
      areaPriv:  "107 m²",
      terraco:   "203 m²",
      quartos:   "2",
      wc:        "2",
      box:       "2",
      certif:    "A",
      entrega:   "Final de 2026",
      dossier:   true,
      url:       "gaia.html",
    },
    {
      id:         "quarteira",
      estado:     "lifestyle",
      regiao:     "Algarve",
      foto:       "assets/quarteira.jpg",
      fotoAlt:    "T1 remodelado em Quarteira, Algarve, vista mar",
      nome:       "Quarteira — T1 Algarve",
      tipo:       "T1",
      local:      "Quarteira · Algarve",
      preco:      "330.000 €",
      destaque:   "Remodelado e mobilado · vista mar · a cerca de 500 m da praia",
      area:       "57 m²",
      quartos:    "1",
      wc:         "1",
      certif:     "A",
      entrega:    "Imediata",
      dossier:    true,
      url:        "quarteira.html",
    },
  ],
};

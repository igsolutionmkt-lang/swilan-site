// ════════════════════════════════════════════
//  SWILAN CUÉNOD — Configuração central
//  Portfólio Imobiliário Privado Premium
// ════════════════════════════════════════════

const CONFIG = {
  whatsapp:   "351918536823",          // WhatsApp oficial
  webhook:    "https://hook.eu1.make.com/q7tshrxn5p2cxd2u66py67b4pbsi5oi7",   // Make — cenário SWILAN leads
  siteUrl:    "https://swilan.com/",

  // Mensagens WhatsApp por imóvel
  waMsgs: {
    setubal:  "Olá, tenho interesse na Penthouse T3 em Setúbal. Gostaria de receber o dossier completo e saber os próximos passos.",
    gaiaC:    "Olá, tenho interesse na Fração C em Gaia. Gostaria de receber o dossier completo.",
    gaiaD:    "Olá, tenho interesse na Fração D em Gaia. Gostaria de receber o dossier completo.",
    quarteira:"Olá, tenho interesse no T1 em Quarteira. Gostaria de receber o dossier completo.",
    geral:    "Olá, vi o portfólio da SWILAN CUÉNOD e gostaria de receber mais informações.",
  },

  // Idiomas ativos: PT (default), EN, ES — via ?lang= (ver i18n.js)
  langAtivo:  true,

  empresa: {
    nome:   "SWILAN CUÉNOD",
    razao:  "Empreendimentos Imobiliários, Unipessoal Lda",
    nif:    "518637891",
    morada: "R. da Pedra do Cão 440, 5.º andar · 4400-396 Canidelo, V. N. Gaia",
    email:  "geral@swilan.com",
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
      preco:     "Sob consulta",
      destaque:  "T3 pronto · 2 lugares em box · arrecadação · visitas privadas",
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
      regiao:    "Gaia",
      foto:      "assets/gaia-c.jpg",
      fotoAlt:   "T2 Fração C, Sal D'Ouro Coast, Vila Nova de Gaia",
      nome:      "Gaia — Fração C",
      tipo:      "T2",
      local:     "Canidelo · Vila Nova de Gaia",
      preco:     "Sob consulta",
      destaque:  "Entrega final 2026 · terraço privativo 136 m² · 2 lugares em box",
      area:      "238 m² área total",
      areaPriv:  "102 m²",
      terraco:   "136 m²",
      quartos:   "2",
      wc:        "2",
      box:       "2",
      certif:    "A confirmar",
      entrega:   "Final de 2026",
      dossier:   true,
      url:       "gaia-c.html",
    },
    {
      id:        "gaia-d",
      estado:    "construcao",
      regiao:    "Gaia",
      foto:      "assets/gaia-d.jpg",
      fotoAlt:   "T2 Fração D, Sal D'Ouro Coast, Vila Nova de Gaia",
      nome:      "Gaia — Fração D",
      tipo:      "T2",
      local:     "Canidelo · Vila Nova de Gaia",
      preco:     "Sob consulta",
      destaque:  "Entrega final 2026 · terraço privativo 203 m² · sala/cozinha 47 m² · 2 lugares em box",
      area:      "310 m² área total",
      areaPriv:  "107 m²",
      terraco:   "203 m²",
      quartos:   "2",
      wc:        "2",
      box:       "2",
      certif:    "A confirmar",
      entrega:   "Final de 2026",
      dossier:   true,
      url:       "gaia-d.html",
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
      preco:      "Sob consulta",
      destaque:   "T1 remodelado · vista mar · 500 m da praia · Algarve lifestyle",
      area:       "57 m²",
      quartos:    "1",
      wc:         "1",
      certif:     "E",
      entrega:    "Imediata",
      dossier:    true,
      url:        "quarteira.html",
    },
  ],
};

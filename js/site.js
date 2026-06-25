// ════════════════════════════════════════════
//  SWILAN CUÉNOD — Motor do site (PT-first)
// ════════════════════════════════════════════

// ── Idioma (PT-first; multi-idioma na Fase 2) ────────────────────
function getLang() {
  if (!CONFIG.langAtivo) return 'pt';
  const p = new URLSearchParams(location.search).get('lang');
  return (p && I18N[p]) ? p : 'pt';
}
function t(key) { const l = getLang(); return (I18N[l] && I18N[l][key] !== undefined) ? I18N[l][key] : (I18N.pt[key] || key); }
function langUrl(lang) { const u = new URL(location.href); u.searchParams.set('lang', lang); return u.toString(); }
function pageUrl(page) { return page + (CONFIG.langAtivo && getLang() !== 'pt' ? '?lang=' + getLang() : ''); }
window.langUrl = langUrl;

const WA_SVG = `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.886l6.187-1.452A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.81 9.81 0 01-5.007-1.372l-.36-.213-3.672.862.877-3.581-.234-.369A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>`;

function waUrl(msg) { return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || t('waMsg'))}`; }

// ── Nav ───────────────────────────────────────────────────────────
function renderNav(activePage) {
  const portfolioActive = ['imoveis','portfolio'].includes(activePage);
  const A = p => activePage === p ? 'class="active"' : '';

  document.getElementById('nav').innerHTML = `
    <a class="logo" href="${pageUrl('index.html')}">
      SWILAN CUÉNOD
      <span>Portfólio Imobiliário Privado</span>
    </a>
    <nav id="nav-links">
      <a href="${pageUrl('index.html')}"    ${A('index')}>${t('navInicio')}</a>
      <a href="${pageUrl('imoveis.html')}"  ${portfolioActive ? 'class="active"':''}>${t('navPortfolio')}</a>
      <a href="${pageUrl('setubal.html')}"  ${A('setubal')}>${t('navSetubal')}</a>
      <a href="${pageUrl('gaia.html')}"     ${['gaia','gaia-c','gaia-d'].includes(activePage)?'class="active"':''}>${t('navGaia')}</a>
      <a href="${pageUrl('quarteira.html')}" ${A('quarteira')}>${t('navAlgarve')}</a>
      <a href="${pageUrl('sobre.html')}"    ${A('sobre')}>${t('navSobre')}</a>
      <a href="${pageUrl('processo.html')}" ${A('processo')}>${t('navProcesso')}</a>
      <a href="${pageUrl('contacto.html')}" ${A('contacto')}>${t('navContacto')}</a>
    </nav>
    <div id="nav-right">
      <a href="${waUrl()}" class="btn-wa-nav" target="_blank" rel="noopener">${WA_SVG} ${t('navWa')}</a>
      <button id="nav-hamburger" onclick="document.getElementById('nav-links').classList.toggle('open')" aria-label="Menu">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  `;
}

// ── Footer ────────────────────────────────────────────────────────
function renderFooter() {
  const links = t('footerLinks'), hrefs = t('footerLinks2');
  const year  = new Date().getFullYear();
  const copyTxt = t('copy').replace(/©\s*\d{0,4}\s*/, `© ${year} `);
  const linksHtml = links.map((l,i) => `<a href="${pageUrl(hrefs[i])}">${l}</a>`).join('');
  document.getElementById('footer').innerHTML = `
    <div class="logo">SWILAN CUÉNOD</div>
    <div class="sub">${CONFIG.empresa.razao} · NIF ${CONFIG.empresa.nif}</div>
    <div class="sub" style="margin-top:.3rem">${CONFIG.empresa.morada}</div>
    <div class="sub" style="margin-top:.6rem;max-width:680px;margin-left:auto;margin-right:auto;line-height:1.6;opacity:.6;">Informações, áreas, imagens, plantas, acabamentos e condições sujeitos a confirmação documental. Dossier completo disponível mediante pedido.</div>
    <div class="links">${linksHtml}</div>
    <div class="copy">${copyTxt}</div>
  `;
}

// ── Floating + sticky WhatsApp ────────────────────────────────────
function renderWaFloat() {
  const el = document.getElementById('wa-float');
  if (el) el.href = waUrl();
}

function renderMobileCta() {
  if (document.getElementById('mobile-cta')) return;
  const bar = document.createElement('div');
  bar.id = 'mobile-cta';
  bar.innerHTML = `
    <a href="${pageUrl('contacto.html')}" class="mcta-dossier">${t('stickyDossier')}</a>
    <a href="${waUrl()}" target="_blank" rel="noopener" class="mcta-wa">${WA_SVG} WhatsApp</a>
  `;
  document.body.appendChild(bar);
}

// ── Reveal on scroll ──────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── Property cards (editorial) ────────────────────────────────────
function estadoBadge(estado) {
  if (estado === 'pronto')     return `<span class="state state-pronto">${t('estadoPronto')}</span>`;
  if (estado === 'construcao') return `<span class="state state-soon">${t('estadoConstrucao')}</span>`;
  return `<span class="state state-life">${t('estadoLifestyle')}</span>`;
}

function renderCards(containerId, limit, filterFn) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let imoveis = CONFIG.imoveis.slice();
  if (filterFn) imoveis = imoveis.filter(filterFn);
  if (limit) imoveis = imoveis.slice(0, limit);

  const fallback = im => encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="420"><rect fill="#0E1C2B" width="600" height="420"/><text fill="#BE9F62" x="300" y="200" font-family="Georgia,serif" font-size="26" text-anchor="middle">${im.nome}</text><text fill="rgba(247,243,236,0.45)" x="300" y="236" font-family="sans-serif" font-size="15" text-anchor="middle">Imagem disponível no dossier</text></svg>`);

  container.innerHTML = imoveis.map(im => `
    <article class="pcard reveal" data-estado="${im.estado}" data-regiao="${im.regiao}">
      <a class="pcard-media" href="${pageUrl(im.url)}">
        <img src="${im.foto}" alt="${im.fotoAlt}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml,${fallback(im)}'"/>
        ${estadoBadge(im.estado)}
      </a>
      <div class="pcard-body">
        <p class="pcard-region">${im.regiao}</p>
        <h3 class="pcard-name">${im.nome}</h3>
        <p class="pcard-highlight">${im.destaque}</p>
        <div class="pcard-foot">
          <span class="pcard-price">${im.preco}</span>
          <a href="${pageUrl(im.url)}" class="pcard-cta">${t('cardVer')} →</a>
        </div>
      </div>
    </article>
  `).join('');

  if (window.__reveal_refresh) window.__reveal_refresh();
}

// ── Form (dossier / qualificado) ──────────────────────────────────
function initImovelForm(origemLabel) {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Popula select de "interesse" simples se existir e estiver vazio
  const sel = form.querySelector('select[name="interesse"]') || document.getElementById('interesse-select');
  if (sel && sel.options.length === 0) {
    sel.innerHTML = `
      <option value="">${t('formInteresse')}</option>
      <option value="receber-dossier">${t('formPedido1')}</option>
      <option value="agendar-visita">${t('formPedido2')}</option>
      <option value="lista-privada">${t('formPedido4')}</option>
      <option value="falar-responsavel">${t('formPedido3')}</option>`;
  }

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const msg = document.getElementById('form-msg');
    const original = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = '…'; }
    const data = Object.fromEntries(new FormData(form));
    data.origem = origemLabel; data.idioma = getLang(); data.url = location.href;
    try {
      await fetch(CONFIG.webhook, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
      if (msg) { msg.textContent = t('formOk'); msg.style.color = '#4ade80'; msg.style.display = 'block'; }
      form.reset();
    } catch {
      if (msg) { msg.textContent = t('formErro'); msg.style.color = '#f87171'; msg.style.display = 'block'; }
    }
    if (btn) { btn.disabled = false; btn.textContent = original || t('formEnviar'); }
  });
}

// ── i18n estático + links ─────────────────────────────────────────
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (val) el.innerHTML = String(val).replace(/\n/g, '<br/>');
  });
  document.querySelectorAll('[data-ph]').forEach(el => {
    const val = t(el.getAttribute('data-ph'));
    if (val) el.placeholder = val;
  });
}

function applyLangLinks() {
  if (!CONFIG.langAtivo) return;
  const pages = ['index.html','imoveis.html','setubal.html','gaia.html','quarteira.html','contacto.html','sobre.html','processo.html','portfolio.html','gaia-c.html','gaia-d.html'];
  pages.forEach(page => document.querySelectorAll(`[href="${page}"]`).forEach(a => { a.href = pageUrl(page); }));
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'index';
  renderNav(page);
  renderFooter();
  renderWaFloat();
  renderMobileCta();
  initReveal();
  window.__reveal_refresh = initReveal;
  initImovelForm('swilan-site-' + page);
  applyI18n();
  applyLangLinks();
  if (document.getElementById('cards-home'))    renderCards('cards-home', 4);
  if (document.getElementById('cards-imoveis')) renderCards('cards-imoveis');
});

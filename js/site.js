// ════════════════════════════════════════════
//  SWILAN CUÉNOD — Motor do site
// ════════════════════════════════════════════

// ── Idioma ────────────────────────────────────────────────────────
function getLang() {
  const p = new URLSearchParams(location.search).get('lang');
  return (p && I18N[p]) ? p : 'pt';
}
function t(key) { const l = getLang(); return (I18N[l] && I18N[l][key]) || I18N.pt[key] || key; }
function langUrl(lang) {
  const u = new URL(location.href);
  u.searchParams.set('lang', lang);
  return u.toString();
}
function pageUrl(page) {
  return page + (getLang() !== 'pt' ? '?lang=' + getLang() : '');
}

// ── Nav ───────────────────────────────────────────────────────────
function renderNav(activePage) {
  const lang = getLang();
  const waMsg = encodeURIComponent(t('waMsg'));
  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${waMsg}`;

  document.getElementById('nav').innerHTML = `
    <a class="logo" href="${pageUrl('index.html')}">
      SWILAN CUÉNOD
      <span>${t('navSobre').toUpperCase()} · NIF ${CONFIG.empresa.nif}</span>
    </a>
    <nav id="nav-links">
      <a href="${pageUrl('index.html')}"    ${activePage==='index'    ? 'class="active"':''} data-i18n="navInicio">${t('navInicio')}</a>
      <a href="${pageUrl('imoveis.html')}"  ${activePage==='imoveis'  ? 'class="active"':''} data-i18n="navImoveis">${t('navImoveis')}</a>
      <a href="${pageUrl('sobre.html')}"    ${activePage==='sobre'    ? 'class="active"':''} data-i18n="navSobre">${t('navSobre')}</a>
      <a href="${pageUrl('contacto.html')}" ${activePage==='contacto' ? 'class="active"':''} data-i18n="navContacto">${t('navContacto')}</a>
    </nav>
    <div id="nav-right">
      <select class="lang-select" onchange="location.href=langUrl(this.value)" aria-label="Idioma">
        <option value="pt" ${lang==='pt'?'selected':''}>🇵🇹 PT</option>
        <option value="en" ${lang==='en'?'selected':''}>🇬🇧 EN</option>
        <option value="es" ${lang==='es'?'selected':''}>🇪🇸 ES</option>
        <option value="fr" ${lang==='fr'?'selected':''}>🇫🇷 FR</option>
        <option value="de" ${lang==='de'?'selected':''}>🇩🇪 DE</option>
      </select>
      <a href="${waUrl}" class="btn-wa-nav" target="_blank" rel="noopener">
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.886l6.187-1.452A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.81 9.81 0 01-5.007-1.372l-.36-.213-3.672.862.877-3.581-.234-.369A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
        ${t('navWa')}
      </a>
      <button id="nav-hamburger" onclick="document.getElementById('nav-links').classList.toggle('open')" aria-label="Menu">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  `;

  // make lang-select change work
  window.langUrl = langUrl;
}

// ── Footer ────────────────────────────────────────────────────────
function renderFooter() {
  const links = t('footerLinks');
  const hrefs = t('footerLinks2');
  const linksHtml = links.map((l,i) => `<a href="${pageUrl(hrefs[i])}">${l}</a>`).join('');
  document.getElementById('footer').innerHTML = `
    <div class="logo">SWILAN CUÉNOD</div>
    <div class="sub">${CONFIG.empresa.razao} · NIF ${CONFIG.empresa.nif}</div>
    <div class="sub" style="margin-top:.3rem">${CONFIG.empresa.morada}</div>
    <div class="links">${linksHtml}</div>
    <div class="copy">${t('copy')}</div>
  `;
}

// ── Floating WhatsApp ─────────────────────────────────────────────
function renderWaFloat() {
  const waMsg = encodeURIComponent(t('waMsg'));
  document.getElementById('wa-float').href = `https://wa.me/${CONFIG.whatsapp}?text=${waMsg}`;
}

// ── Reveal on scroll ──────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── Render property cards ─────────────────────────────────────────
function renderCards(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const imoveis = limit ? CONFIG.imoveis.slice(0, limit) : CONFIG.imoveis;
  const lang = getLang();

  container.innerHTML = imoveis.map(im => {
    const badge = im['badge' + (lang === 'pt' ? '' : lang.charAt(0).toUpperCase() + lang.slice(1))] || im.badge;
    const cta = im.url
      ? `<a href="${im.url + (lang !== 'pt' ? '?lang='+lang : '')}" class="btn btn-gold">${t('verDetalhes')}</a>`
      : `<a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t('waMsg'))}" target="_blank" rel="noopener" class="btn btn-outline">${t('preReserva')}</a>`;
    return `
    <div class="bezel overflow-hidden reveal">
      <div class="imovel-hero">
        <img src="${im.foto}" alt="${im.fotoAlt}" loading="lazy"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%230E1C2B%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%23BE9F62%22 x=%2250%25%22 y=%2250%25%22 font-family=%22serif%22 font-size=%2218%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(im.tipo)}%3C/text%3E%3C/svg%3E'" />
        <span class="badge">${badge}</span>
      </div>
      <div class="imovel-body">
        <p class="card-tag">${im.local}</p>
        <h3 class="imovel-title">${im.tipo}</h3>
        <p class="imovel-price">${im.preco}</p>
        <div class="imovel-specs">
          <span>${im.area}</span>
          <span>${im.quartos} quartos</span>
          <span>${im.wc} WC</span>
          <span>Cert. ${im.certif}</span>
          <span>${im.entrega === 'Imediata' ? t('dispImediata') : t('entregaPrev') + ' ' + im.entrega}</span>
        </div>
        <div class="btn-group">${cta}</div>
      </div>
    </div>`;
  }).join('');
}

// ── Contact form ──────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const msg = document.getElementById('form-msg');
    btn.disabled = true; btn.textContent = '…';
    const data = Object.fromEntries(new FormData(form));
    data.origem = 'swilan-site'; data.idioma = getLang(); data.url = location.href;
    try {
      await fetch(CONFIG.webhook, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
      msg.textContent = t('formOk');
      msg.style.color = '#4ade80';
      form.reset();
    } catch {
      msg.textContent = t('formErro');
      msg.style.color = '#f87171';
    }
    msg.style.display = 'block';
    btn.disabled = false; btn.textContent = t('formEnviar');
  });
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'index';
  renderNav(page);
  renderFooter();
  renderWaFloat();
  initReveal();
  initContactForm();
  // page-specific cards
  if (document.getElementById('cards-home'))    renderCards('cards-home', 3);
  if (document.getElementById('cards-imoveis')) renderCards('cards-imoveis');
});

(() => {
  "use strict";

  /* ============================================================
     Content — bilingual copy, ported verbatim from the prototype
     ============================================================ */
  const COPY = {
    MK: {
      homeEyebrow: "ЛЕД билборд мрежа · Македонија",
      homeTitle: "Мрежа на ЛЕД билборди: Скопје, Охрид и Гевгелија",
      homeSub: "Стратешки позиции со највисока фреквенција на сообраќај и видливост во Македонија.",
      ctaBook: "Резервирај термин", ctaLocations: "Види локации",
      reachLong: "Месечен досег на публика во мрежата",
      seeAll: "Види сè", trustedBy: "Клиенти што ни веруваат",
      homeCta: "Резервирајте го вашиот термин уште денес.",
      locTitle: "Локации",
      locSub: "Стратешки позиции со највисока фреквенција на сообраќај и видливост во Македонија. Одлична видливост за пешаци и возачи, присуство во секојдневната рутина на локалното население.",
      mapNote: "Поминете со курсорот над локација",
      play: "Прикажи видео",
      addr1: "Катна гаража Илинден – ТЦ Бисер, Аеродром",
      addr2: "Охрид Центар – Главен Кружен Тек",
      addr3: "Градски Плоштад · Булевар – Кружен Тек",
      card1: "Најголемата општина во Скопје нуди неверојатна фреквенција на возила и пешаци. Со големина од 50 m² овој ЛЕД билборд е идеален за брендови за широка потрошувачка.",
      card2: "Секој ден низ центарот на Охрид поминуваат илјадници луѓе — туристи, локалци, бизнисмени, младина. Ова не е „една од многуте“ реклами.",
      card3: "Два екрана од 15 m² на најфреквентните точки во градот: директно на градскиот плоштад и до кружниот тек на булеварот, низ кој поминуваат илјадници транзитни патници.",
      reach: "Месечен досег", screens: "LED екрани во мрежа", airtime: "Дневно емитување",
      vipTitle: "VIP ексклузивитет за вашата индустрија",
      vipBody: "Затвораме цела индустриска категорија на екранот — вашиот бренд е единствениот глас во неа, на секоја локација што ќе ја резервирате.",
      premium: "Доплата на цената",
      svcTitle: "Услуги",
      svcSub: "Физичка DOOH инфраструктура и целосен дигитален маркетинг под еден покрив — од идеја и продукција до мерење на резултати.",
      portTitle: "Портфолио",
      portSub: "Брендови, институции и спортски клубови што редовно емитуваат на нашата мрежа.",
      conTitle: "Контакт",
      conSub: "Резервирајте го вашиот термин уште денес. Опишете ја кампањата во неколку реда. Одговараме со достапни термини, цени и предлог за распоред на емитување во рок од 24 часа.",
      phone: "Телефон",
      fName: "Име и презиме", fCompany: "Компанија", fPhone: "Телефон",
      fLocation: "Локација од интерес", fMessage: "Кратко за кампањата",
      optAll: "Целата мрежа", submit: "Испрати барање",
      formNote: "Барањето оди директно во нашиот CRM. Без обврска и без автоматски маркетинг пораки.",
      sentTitle: "Барањето е испратено", sentBody: "Ве контактираме во рок од 24 часа.",
      openOnYt: "Отвори на YouTube"
    },
    EN: {
      homeEyebrow: "LED billboard network · Macedonia",
      homeTitle: "A network of LED billboards: Skopje, Ohrid and Gevgelija",
      homeSub: "Strategic positions with the highest traffic frequency and visibility in Macedonia, plus full marketing production under one roof.",
      ctaBook: "Book a slot", ctaLocations: "View locations",
      reachLong: "Monthly audience reach across the network",
      seeAll: "See all", trustedBy: "Trusted by",
      homeCta: "Book your slot today.",
      locTitle: "Locations",
      locSub: "Strategic positions with the highest traffic frequency and visibility in Macedonia. Excellent visibility for pedestrians and drivers, present in the daily routine of the local population.",
      mapNote: "Hover a location",
      play: "Play preview",
      addr1: "Ilinden parking garage – TC Biser, Aerodrom",
      addr2: "Ohrid centre – main roundabout",
      addr3: "City square · Boulevard roundabout",
      card1: "The largest municipality in Skopje delivers exceptional vehicle and pedestrian frequency. At 50 m², this LED billboard is ideal for mass consumer brands.",
      card2: "Thousands of people pass through central Ohrid every day — tourists, locals, business people, youth. This is not one ad among many.",
      card3: "Two 15 m² screens on the busiest points in town: directly on the city square and by the boulevard roundabout, crossed daily by thousands of transit travellers.",
      reach: "Monthly reach", screens: "LED screens in network", airtime: "Daily airtime",
      vipTitle: "VIP exclusivity for your industry",
      vipBody: "We close an entire industry category on the screen — your brand is its only voice, on every location you book.",
      premium: "Price surcharge",
      svcTitle: "Services",
      svcSub: "Physical DOOH infrastructure and full-stack digital marketing under one roof — from concept and production to measured results.",
      portTitle: "Portfolio",
      portSub: "Brands, institutions and sports clubs broadcasting regularly across our network.",
      conTitle: "Contact",
      conSub: "Describe the campaign in a few lines. We reply with available slots, pricing and a proposed broadcast schedule within 24 hours.",
      phone: "Phone",
      fName: "Full name", fCompany: "Company", fPhone: "Phone",
      fLocation: "Location of interest", fMessage: "About the campaign",
      optAll: "Entire network", submit: "Send inquiry",
      formNote: "Inquiries land straight in our CRM. No obligation and no automated marketing mail.",
      sentTitle: "Inquiry sent", sentBody: "We will get back to you within 24 hours.",
      openOnYt: "Open on YouTube"
    }
  };

  const BENEFITS = {
    MK: [
      { color: "oklch(0.72 0.17 245)", text: "Одлична видливост за пешаци и возачи" },
      { color: "oklch(0.72 0.17 55)", text: "Присуство во секојдневната рутина на локалното население" },
      { color: "oklch(0.72 0.17 145)", text: "Идеален за брендирање, кампањи, промоции, понуди и настани" },
      { color: "oklch(0.72 0.17 245)", text: "Висок домет на експонираност — месечен досег од над 1.000.000 луѓе" }
    ],
    EN: [
      { color: "oklch(0.72 0.17 245)", text: "Excellent visibility for pedestrians and drivers" },
      { color: "oklch(0.72 0.17 55)", text: "Present in the daily routine of the local population" },
      { color: "oklch(0.72 0.17 145)", text: "Ideal for branding, campaigns, promotions, offers and events" },
      { color: "oklch(0.72 0.17 245)", text: "High exposure — a monthly reach of over 1,000,000 people" }
    ]
  };

  const NET = {
    MK: [
      { city: "Скопје", addr: "Катна гаража Илинден – ТЦ Бисер, Аеродром", size: "50 m²", color: "oklch(0.72 0.17 245)" },
      { city: "Охрид", addr: "Центар – Главен кружен тек", size: "40 m²", color: "oklch(0.72 0.17 55)" },
      { city: "Гевгелија", addr: "Градски плоштад · Булевар – кружен тек", size: "2 × 15 m²", color: "oklch(0.72 0.17 145)" }
    ],
    EN: [
      { city: "Skopje", addr: "Ilinden parking garage – TC Biser, Aerodrom", size: "50 m²", color: "oklch(0.72 0.17 245)" },
      { city: "Ohrid", addr: "Centre – main roundabout", size: "40 m²", color: "oklch(0.72 0.17 55)" },
      { city: "Gevgelija", addr: "City square · Boulevard roundabout", size: "2 × 15 m²", color: "oklch(0.72 0.17 145)" }
    ]
  };

  const VIP = {
    MK: [
      { title: "Без Конкуренција", body: "Гарантираме дека ниту еден ваш директен конкурент нема да се појави на екранот." },
      { title: "Премиум Статус", body: "Вашиот бренд станува единствен претставник на својата индустрија во нашата мрежа." },
      { title: "Достапност", body: "Опцијата е достапна за долгорочни договори со доплата од +40%." }
    ],
    EN: [
      { title: "No competition", body: "We guarantee that no direct competitor of yours will appear on the screen." },
      { title: "Premium status", body: "Your brand becomes the sole representative of its industry across our network." },
      { title: "Availability", body: "Available on long-term contracts with a +40% surcharge." }
    ]
  };

  const PILLARS = {
    MK: [
      { num: "01", color: "oklch(0.72 0.17 245)", title: "ЛЕД Огласување", body: "Емитување на сопствена мрежа од висококвалитетни LED екрани, со контрола на фрекфенција, часовни зони и должина на спот.", tags: ["Планирање", "Спот ротации", "Извештаи", "VIP ексклузивитет"] },
      { num: "02", color: "oklch(0.72 0.17 55)", title: "Маркетинг Услуги", body: "Целосно водење на дигитални кампањи — поставување, оптимизација и мерење. Google Analytics 4 интеграција со чисто следење на конверзии.", tags: ["Google Analytics 4", "Meta & Google Ads", "Водење кампањи", "Social media"] },
      { num: "03", color: "oklch(0.72 0.17 145)", title: "Фото и Видео", body: "Продукција и постпродукција на фотографии и видеа, до генеративно AI видео и композитинг за формати наменети за LED.", tags: ["After Effects", "Illustrator", "Veo 3.1", "Midjourney", "Композитинг"] },
      { num: "04", color: "oklch(0.72 0.17 245)", title: "Маркетинг Консалтинг", body: "Стратегиско планирање, навигација низ јавни набавки и подготовка на спонзорски предлози што поминуваат на прв круг.", tags: ["Стратегија", "Јавни набавки", "Спонзорства", "Буџетирање"] }
    ],
    EN: [
      { num: "01", color: "oklch(0.72 0.17 245)", title: "LED Advertising", body: "Broadcasting on our own network of high-resolution LED screens, with control over frequency, dayparts and spot length.", tags: ["Planning", "Spot rotation", "Reporting", "VIP exclusivity"] },
      { num: "02", color: "oklch(0.72 0.17 55)", title: "Marketing Services", body: "Full-stack digital campaign management — setup, optimisation and measurement. Google Analytics 4 integration with clean conversion tracking.", tags: ["Google Analytics 4", "Meta & Google Ads", "Campaign management", "Social media"] },
      { num: "03", color: "oklch(0.72 0.17 145)", title: "Photo & Video Creation", body: "Production and post from Adobe After Effects and Illustrator through to generative AI video and compositing for LED-native formats.", tags: ["After Effects", "Illustrator", "Veo 3.1", "Midjourney", "Compositing"] },
      { num: "04", color: "oklch(0.72 0.17 245)", title: "Marketing Consulting", body: "Strategic planning, public procurement navigation and sponsorship proposals that clear the first round.", tags: ["Strategy", "Public procurement", "Sponsorships", "Budgeting"] }
    ]
  };

  // Real client logos already dropped during design (see project/.image-slots.state.json).
  const CLIENTS = [
    { name: "State Video Lottery", img: "assets/img/portfolio/logo-1.webp" },
    { name: "RK Vardar 1961", img: "assets/img/portfolio/logo-2.webp" },
    { name: "MTEL", img: "assets/img/portfolio/logo-3.webp" },
    { name: "Client 04", img: "assets/img/portfolio/logo-4.webp" },
    { name: "Client 05", img: "assets/img/portfolio/logo-5.webp" },
    { name: "Client 06", img: "assets/img/portfolio/logo-6.webp" },
    { name: "Client 07", img: "assets/img/portfolio/logo-7.webp" },
    { name: "Client 08", img: "assets/img/portfolio/logo-8.webp" },
    { name: "Client 09", img: "assets/img/portfolio/logo-9.webp" },
    { name: "Client 10", img: "assets/img/portfolio/logo-10.webp" },
    { name: "Client 11", img: "assets/img/portfolio/logo-11.webp" },
    { name: "Client 12", img: "assets/img/portfolio/logo-12.webp" }
  ];

  // Homepage "trusted by" strip: only slot 1 has a real logo so far — the
  // rest render as empty placeholders until more client logos are supplied.
  const HOME_LOGOS = [
    { img: "assets/img/home-logo-1.webp" },
    { img: null },
    { img: null },
    { img: null },
    { img: null }
  ];

  const ROUTES = { "": "home", "/": "home", locations: "locations", services: "services", portfolio: "portfolio", contact: "contact" };

  /* ============================================================
     Helpers
     ============================================================ */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const placeholderIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';

  let currentLang = "MK";

  /* ============================================================
     Rendering
     ============================================================ */
  function renderBenefits(lang) {
    document.getElementById("homeBenefits").innerHTML = BENEFITS[lang].map((b) => `
      <div class="benefit-item">
        <span class="benefit-dot" style="background:${b.color};box-shadow:0 0 14px ${b.color}"></span>
        <div class="benefit-text">${esc(b.text)}</div>
      </div>`).join("");
  }

  function renderNet(lang) {
    document.getElementById("homeNet").innerHTML = NET[lang].map((n) => `
      <div class="reach-net-row">
        <div>
          <div class="reach-net-city" style="color:${n.color}">${esc(n.city)}</div>
          <div class="reach-net-addr">${esc(n.addr)}</div>
        </div>
        <div class="reach-net-size" style="color:${n.color}">${esc(n.size)}</div>
      </div>`).join("");
  }

  function renderVip(lang) {
    document.getElementById("vipPoints").innerHTML = VIP[lang].map((v) => `
      <div class="vip-point">
        <div class="vip-point-title">${esc(v.title)}</div>
        <div class="vip-point-body">${esc(v.body)}</div>
      </div>`).join("");
  }

  function renderPillars(lang) {
    document.getElementById("pillars").innerHTML = PILLARS[lang].map((p) => `
      <div class="pillar">
        <div class="pillar-head">
          <span class="pillar-num">${p.num}</span>
          <span class="pillar-dot" style="background:${p.color};box-shadow:0 0 16px ${p.color}"></span>
        </div>
        <div>
          <h3 class="pillar-title">${esc(p.title)}</h3>
          <p class="pillar-body">${esc(p.body)}</p>
        </div>
        <div class="pillar-tags">${p.tags.map((t) => `<span class="pillar-tag">${esc(t)}</span>`).join("")}</div>
      </div>`).join("");
  }

  function renderHomeLogos() {
    document.getElementById("homeLogos").innerHTML = HOME_LOGOS.map((l) =>
      l.img
        ? `<div class="client-logo-wrap"><img src="${l.img}" alt="Client logo" loading="lazy"></div>`
        : `<div class="client-logo-wrap"><div class="media-placeholder">${placeholderIcon}<span class="media-placeholder-cap">лого</span></div></div>`
    ).join("");
  }

  function renderClientsGrid() {
    document.getElementById("clientsGrid").innerHTML = CLIENTS.map((c) => `
      <div class="client-tile">
        <div class="client-tile-inner"><img src="${c.img}" alt="${esc(c.name)}" loading="lazy"></div>
      </div>`).join("");
  }

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.lang = lang.toLowerCase();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = COPY[lang][key];
      if (val != null) el.textContent = val;
    });
    renderBenefits(lang);
    renderNet(lang);
    renderVip(lang);
    renderPillars(lang);
    try { localStorage.setItem("lb-lang", lang); } catch (e) {}
  }

  /* ============================================================
     Routing (in-page "pages", hash-addressable)
     ============================================================ */
  function setPage(page, updateHash) {
    document.querySelectorAll(".page").forEach((el) => { el.hidden = el.id !== "page-" + page; });
    document.documentElement.setAttribute("data-page", page);
    if (updateHash !== false) {
      const target = page === "home" ? "#/" : "#/" + page;
      if (location.hash !== target) history.pushState(null, "", target);
    }
    window.scrollTo(0, 0);
  }

  function syncFromHash() {
    const key = location.hash.replace(/^#\/?/, "");
    setPage(ROUTES[key] || "home", false);
  }

  /* ============================================================
     Video modal (Skopje / Ohrid location cards)
     ============================================================ */
  const videoModal = document.getElementById("videoModal");
  const videoModalTitle = document.getElementById("videoModalTitle");
  const videoModalIframe = document.getElementById("videoModalIframe");
  const videoModalYtLink = document.getElementById("videoModalYtLink");

  function openVideo(id, title) {
    videoModalTitle.textContent = title;
    videoModalIframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
    videoModalYtLink.href = "https://www.youtube.com/watch?v=" + id;
    videoModalYtLink.textContent = COPY[currentLang].openOnYt + " ↗";
    videoModal.hidden = false;
  }

  function closeVideo() {
    videoModal.hidden = true;
    videoModalIframe.src = ""; // stop playback
  }

  /* ============================================================
     Wire-up
     ============================================================ */
  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");

  function closeMobileNav() {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (e) => {
    const goto = e.target.closest("[data-goto]");
    if (goto) { e.preventDefault(); setPage(goto.getAttribute("data-goto")); closeMobileNav(); return; }

    const yt = e.target.closest(".loc-card-yt");
    if (yt) {
      e.preventDefault();
      const id = yt.getAttribute("data-video");
      const title = currentLang === "MK" ? yt.getAttribute("data-title-mk") : yt.getAttribute("data-title-en");
      openVideo(id, title);
      return;
    }

    if (e.target === videoModal) closeVideo();
  });

  document.getElementById("videoModalClose").addEventListener("click", closeVideo);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !videoModal.hidden) closeVideo(); });

  document.getElementById("langToggle").addEventListener("click", () => {
    applyLang(currentLang === "MK" ? "EN" : "MK");
  });

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // No backend is wired up yet — this mirrors the prototype's client-only
    // confirmation. Before go-live, replace this with a real submit (fetch
    // to a CRM/API endpoint, a form service, etc).
    document.getElementById("contactForm").hidden = true;
    document.getElementById("contactSent").hidden = false;
  });

  window.addEventListener("popstate", syncFromHash);

  function init() {
    renderHomeLogos();
    renderClientsGrid();
    let lang = "MK";
    try { lang = localStorage.getItem("lb-lang") || "MK"; } catch (e) {}
    applyLang(lang);
    syncFromHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

// ============================================
// BAMBUI — interacciones del sitio
// ============================================

// ---------- Traducción ES / EN ----------
const translations = {
  es: {
    pageTitle: 'Bambui — Reggae & Rock desde Costa Rica',
    metaDescription: 'Bambui es una banda costarricense que fusiona reggae y rock con más de una década de trayectoria. Escuchá su música, mirá fotos y seguí sus próximas fechas.',
    navBio: 'Bio',
    navMusica: 'Música',
    navGaleria: 'Galería',
    navShows: 'Shows',
    navContacto: 'Contacto',
    navToggleLabel: 'Abrir menú',
    scrollCueLabel: 'Bajar a la siguiente sección',
    heroTagline: 'Más de una década fusionando reggae, rock y las calles de San José.',
    heroBtnMusica: 'Escuchar música',
    heroBtnShows: 'Próximos shows',
    bioLabel: 'La banda',
    bioTitle: 'Reggae Fusión desde San José, Costa Rica',
    bioP1: 'Bambui es un grupo musical de Reggae Fusión fundado a comienzos del año 2009 en San José, Costa Rica. Presenta una mezcla de Reggae y Rock, fusionando otros ritmos como el Funk, Rap, Ska y Latino.',
    bioP2: 'Sus presentaciones en vivo ofrecen una alta descarga de energía, donde sus oyentes podrán cantar, bailar y saltar al ritmo enérgico y moderno, característico de la banda.',
    bioPhotoAlt: 'Bambui, banda de reggae y rock de Costa Rica, retrato grupal',
    musicaLabel: 'Escúchanos',
    musicaTitle: 'Encontrá a Bambui en tus plataformas',
    musicaSpotifyTitle: 'Bambui en Spotify',
    linkSpotifySmall: 'Discografía completa',
    linkYoutubeSmall: 'Videos y sesiones',
    galeriaLabel: 'Galería',
    galeriaTitle: 'En el escenario y detrás de cámara',
    gal05: 'Bambui, retrato grupal de la banda',
    gal25: 'Retrato de integrante de Bambui',
    gal43: 'Guitarrista de Bambui con luces azules',
    gal14: 'Bambui posando contra pared de ladrillo',
    gal36: 'Integrante de Bambui riendo hacia la cámara',
    gal38: 'Bajista de Bambui con luces azules y magenta',
    gal17: 'Bambui con patineta en bodega industrial',
    gal20: 'Retrato de integrante de Bambui con lentes de sol',
    gal41: 'Tecladista de Bambui con luces azules',
    gal44: 'Integrante de Bambui bajo luces verdes y azules',
    gal18: 'Bambui en contrapicado, retrato grupal',
    gal31: 'Retrato cercano de integrante de Bambui',
    gal16: 'Bambui en blanco y negro con patineta',
    gal46: 'Integrante de Bambui sentado sobre patineta',
    gal26: 'Retrato de integrante de Bambui',
    gal19: 'Bambui, retrato grupal en blanco y negro',
    galG17: 'Guitarrista de Bambui con guitarra rosa, luces azules en vivo',
    galG21: 'Retrato de integrante de Bambui contra pared texturizada',
    galG18: 'Vocalista de Bambui cantando con luces rojas',
    galG22: 'Tecladista de Bambui en vivo con luces cálidas',
    galG19: 'Baterista de Bambui en vivo con luz dorada',
    galG20: 'Vocalista de Bambui cantando con luces verdes',
    showsLabel: 'Agenda',
    showsTitle: 'Próximos shows',
    showsBuyTickets: 'Comprar entradas',
    showDate1: '22 de octubre',
    showDate2: '13 de noviembre',
    showDate3: '10 de diciembre',
    contactLabel: 'Contacto',
    contactTitle: 'Escribinos',
    contactIntro: 'Contrataciones, prensa, merchandising o cualquier otra consulta, contanos qué necesitás.',
    contactNombreLabel: 'Nombre completo',
    contactApellidosLabel: 'Apellidos',
    contactMotivoLabel: '¿Para qué deseas contactarnos?',
    contactMotivoPlaceholder: 'Seleccioná una opción',
    contactMotivoContrataciones: 'Contrataciones',
    contactMotivoPrensa: 'Prensa',
    contactMotivoMerchandising: 'Merchandising',
    contactMotivoOtro: 'Otro',
    contactMensajeLabel: 'Enviar mensaje',
    contactCharSuffix: '/500 caracteres',
    contactSubmit: 'Enviar',
    contactStatusSent: '¡Mensaje enviado! Te vamos a contactar pronto.',
    footerTagline: 'Reggae & Rock desde Costa Rica',
    footerRights: 'Todos los derechos reservados.',
    lightboxCloseLabel: 'Cerrar y volver a la galería',
    lightboxPrevLabel: 'Foto anterior',
    lightboxNextLabel: 'Foto siguiente',
  },
  en: {
    pageTitle: 'Bambui — Reggae & Rock from Costa Rica',
    metaDescription: 'Bambui is a Costa Rican band that fuses reggae and rock, with over a decade on stage. Listen to their music, check out photos, and follow their upcoming dates.',
    navBio: 'Bio',
    navMusica: 'Music',
    navGaleria: 'Gallery',
    navShows: 'Shows',
    navContacto: 'Contact',
    navToggleLabel: 'Open menu',
    scrollCueLabel: 'Scroll to next section',
    heroTagline: 'Over a decade fusing reggae, rock, and the streets of San José.',
    heroBtnMusica: 'Listen to music',
    heroBtnShows: 'Upcoming shows',
    bioLabel: 'The band',
    bioTitle: 'Reggae Fusion from San José, Costa Rica',
    bioP1: 'Bambui is a Reggae Fusion band founded in early 2009 in San José, Costa Rica. They blend Reggae and Rock, fusing in other rhythms like Funk, Rap, Ska, and Latin music.',
    bioP2: "Their live shows bring a huge burst of energy, where the crowd sings, dances, and jumps along to the band's signature high-energy, modern sound.",
    bioPhotoAlt: 'Bambui, Costa Rican reggae and rock band, group portrait',
    musicaLabel: 'Listen to us',
    musicaTitle: 'Find Bambui on your platforms',
    musicaSpotifyTitle: 'Bambui on Spotify',
    linkSpotifySmall: 'Full discography',
    linkYoutubeSmall: 'Videos and sessions',
    galeriaLabel: 'Gallery',
    galeriaTitle: 'On stage and behind the scenes',
    gal05: 'Bambui, group portrait of the band',
    gal25: 'Portrait of a Bambui member',
    gal43: 'Bambui guitarist under blue lights',
    gal14: 'Bambui posing against a brick wall',
    gal36: 'Bambui member laughing at the camera',
    gal38: 'Bambui bassist under blue and magenta lights',
    gal17: 'Bambui with a skateboard in an industrial warehouse',
    gal20: 'Portrait of a Bambui member wearing sunglasses',
    gal41: 'Bambui keyboardist under blue lights',
    gal44: 'Bambui member under green and blue lights',
    gal18: 'Bambui, low-angle group portrait',
    gal31: 'Close-up portrait of a Bambui member',
    gal16: 'Bambui in black and white with a skateboard',
    gal46: 'Bambui member sitting on a skateboard',
    gal26: 'Portrait of a Bambui member',
    gal19: 'Bambui, black and white group portrait',
    galG17: 'Bambui guitarist with a pink guitar, blue lights live',
    galG21: 'Portrait of a Bambui member against a textured wall',
    galG18: 'Bambui singer performing under red lights',
    galG22: 'Bambui keyboardist live under warm lights',
    galG19: 'Bambui drummer live under golden light',
    galG20: 'Bambui singer performing under green lights',
    showsLabel: 'Schedule',
    showsTitle: 'Upcoming shows',
    showsBuyTickets: 'Buy tickets',
    showDate1: 'October 22',
    showDate2: 'November 13',
    showDate3: 'December 10',
    contactLabel: 'Contact',
    contactTitle: 'Get in touch',
    contactIntro: 'Bookings, press, merchandising, or any other inquiry, let us know what you need.',
    contactNombreLabel: 'First name',
    contactApellidosLabel: 'Last name',
    contactMotivoLabel: 'What would you like to contact us about?',
    contactMotivoPlaceholder: 'Select an option',
    contactMotivoContrataciones: 'Bookings',
    contactMotivoPrensa: 'Press',
    contactMotivoMerchandising: 'Merchandising',
    contactMotivoOtro: 'Other',
    contactMensajeLabel: 'Message',
    contactCharSuffix: '/500 characters',
    contactSubmit: 'Send',
    contactStatusSent: "Message sent! We'll get back to you soon.",
    footerTagline: 'Reggae & Rock from Costa Rica',
    footerRights: 'All rights reserved.',
    lightboxCloseLabel: 'Close and return to the gallery',
    lightboxPrevLabel: 'Previous photo',
    lightboxNextLabel: 'Next photo',
  },
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  const metaDescription = document.getElementById('metaDescription');
  if (metaDescription) metaDescription.setAttribute('content', dict.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.getAttribute('data-i18n-attr').split(',').forEach((pair) => {
      const [attr, key] = pair.split(':');
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  document.querySelectorAll('.lang-option').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('bambuiLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {

  // Idioma inicial: preferencia guardada o el que ya trae el HTML
  const savedLang = localStorage.getItem('bambuiLang');
  if (savedLang && translations[savedLang]) applyLanguage(savedLang);

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.querySelectorAll('.lang-option').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });
  }

  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header: fondo sólido al hacer scroll
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Animación "reveal" al hacer scroll
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));

  // Lightbox / carrusel de galería
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCounter = document.getElementById('lightboxCounter');

  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  let currentIndex = 0;

  const renderSlide = (index) => {
    const item = galleryItems[index];
    const full = item.getAttribute('data-full');
    const alt = item.querySelector('img').getAttribute('alt');
    lightboxImg.setAttribute('src', full);
    lightboxImg.setAttribute('alt', alt);
    lightboxCounter.textContent = `${index + 1} / ${galleryItems.length}`;
    currentIndex = index;
  };

  const openLightbox = (index) => {
    renderSlide(index);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightboxImg.setAttribute('src', '');
    document.body.style.overflow = '';
  };

  const showPrev = () => {
    renderSlide((currentIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const showNext = () => {
    renderSlide((currentIndex + 1) % galleryItems.length);
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  // Con una sola foto no hace falta navegar
  if (galleryItems.length <= 1) {
    lightboxPrev.disabled = true;
    lightboxNext.disabled = true;
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrev);
  lightboxNext.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Formulario de contacto: contador de caracteres del mensaje
  const contactMensaje = document.getElementById('contactMensaje');
  const charCount = document.getElementById('charCount');

  if (contactMensaje && charCount) {
    contactMensaje.addEventListener('input', () => {
      charCount.textContent = contactMensaje.value.length;
    });
  }

  // Formulario de contacto: simulación visual (todavía sin envío real)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      const currentLang = document.documentElement.lang === 'en' ? 'en' : 'es';
      formStatus.textContent = translations[currentLang].contactStatusSent;
      contactForm.reset();
      charCount.textContent = '0';
    });
  }

});

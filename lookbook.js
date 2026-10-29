/**
 * URBAN CLOSET - Lookbook Logic
 * Dynamic Masonry Rendering, Lightbox Modal with Prev/Next Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('#lookbook-gallery');
  if (!gallery || typeof LOOKBOOK_ITEMS === 'undefined') return;

  // Render gallery
  gallery.innerHTML = LOOKBOOK_ITEMS.map((item, index) => `
    <div class="lookbook-card" data-index="${index}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="lookbook-card-overlay">
        <span class="eyebrow" style="color: rgba(255,255,255,0.7); margin-bottom: 0.25rem;">${item.subtitle}</span>
        <h3 class="lookbook-card-look">${item.title}</h3>
        <p class="lookbook-card-desc">${item.description}</p>
      </div>
    </div>
  `).join('');

  // Lightbox Modal Setup
  const lightbox = document.querySelector('#lightbox-modal');
  const lightboxImg = document.querySelector('#lightbox-img');
  const lightboxTitle = document.querySelector('#lightbox-title');
  const lightboxSubtitle = document.querySelector('#lightbox-subtitle');
  const lightboxDesc = document.querySelector('#lightbox-desc');
  const closeBtn = document.querySelector('#lightbox-close');
  const prevBtn = document.querySelector('#lightbox-prev');
  const nextBtn = document.querySelector('#lightbox-next');

  let currentIndex = 0;

  const showLightbox = (index) => {
    currentIndex = (index + LOOKBOOK_ITEMS.length) % LOOKBOOK_ITEMS.length;
    const item = LOOKBOOK_ITEMS[currentIndex];

    if (lightboxImg) {
      lightboxImg.style.opacity = '0';
      lightboxImg.src = item.image;
      lightboxImg.onload = () => {
        lightboxImg.style.opacity = '1';
      };
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxSubtitle) lightboxSubtitle.textContent = item.subtitle;
    if (lightboxDesc) lightboxDesc.textContent = item.description;

    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  // Click card to open
  gallery.querySelectorAll('.lookbook-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      showLightbox(idx);
    });
  });

  // Controls
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showLightbox(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showLightbox(currentIndex + 1));

  // Close on outer click
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content') || e.target.classList.contains('lightbox-img-wrap')) {
        closeLightbox();
      }
    });
  }

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight') showLightbox(currentIndex + 1);
  });
});

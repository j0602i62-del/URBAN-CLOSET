/**
 * URBAN CLOSET - Product Detail Page Logic
 * Image Switcher, Options Selector, Add to Cart, Related Items
 * Supports both /products/1 and product-detail.html?id=1
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PRODUCTS_DATA === 'undefined') return;

  // Extract ID from URL (supports ?id=X and /products/X)
  const params = new URLSearchParams(window.location.search);
  let idParam = parseInt(params.get('id'), 10);
  if (!idParam) {
    const cleanPath = window.location.pathname.replace(/\/$/, '');
    const segments = cleanPath.split('/');
    const lastSeg = parseInt(segments[segments.length - 1], 10);
    if (!isNaN(lastSeg)) {
      idParam = lastSeg;
    }
  }
  if (!idParam) idParam = 1;

  const product = PRODUCTS_DATA.find(p => p.id === idParam) || PRODUCTS_DATA[0];

  let selectedColor = product.colors[0].name;
  let selectedSize = product.sizes[0];

  // Helper for cross-compatible detail link
  const getDetailUrl = (id) => {
    // If running on local file system
    if (window.location.protocol === 'file:') {
      return `product-detail.html?id=${id}`;
    }
    // Web hosting (e.g. Vercel)
    return `product-detail.html?id=${id}`;
  };

  // Update Breadcrumb
  const breadcrumbProduct = document.querySelector('#breadcrumb-product-name');
  if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;

  // Update Title & Meta
  document.title = `${product.name} | URBAN CLOSET`;

  // Render Basic Info
  const titleEl = document.querySelector('#detail-product-title');
  const priceEl = document.querySelector('#detail-product-price');
  const descEl = document.querySelector('#detail-product-desc');
  const materialEl = document.querySelector('#detail-spec-material');
  const originEl = document.querySelector('#detail-spec-origin');
  const careEl = document.querySelector('#detail-spec-care');

  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.innerHTML = `¥${product.price.toLocaleString()} <span class="tax-note">tax in</span>`;
  if (descEl) descEl.textContent = product.description;
  if (materialEl) materialEl.textContent = product.details.material;
  if (originEl) originEl.textContent = product.details.origin;
  if (careEl) careEl.textContent = product.details.care;

  // Gallery: Main & Thumbnails
  const mainImg = document.querySelector('#detail-main-img');
  const thumbsContainer = document.querySelector('#detail-thumbnails');

  if (mainImg && thumbsContainer) {
    mainImg.src = product.images[0];
    mainImg.alt = product.name;

    thumbsContainer.innerHTML = product.images.map((imgUrl, idx) => `
      <div class="detail-thumb-item ${idx === 0 ? 'is-active' : ''}" data-src="${imgUrl}">
        <img src="${imgUrl}" alt="${product.name} thumb ${idx + 1}" loading="lazy">
      </div>
    `).join('');

    const thumbItems = thumbsContainer.querySelectorAll('.detail-thumb-item');
    thumbItems.forEach(item => {
      item.addEventListener('click', () => {
        thumbItems.forEach(t => t.classList.remove('is-active'));
        item.classList.add('is-active');
        const targetSrc = item.getAttribute('data-src');

        mainImg.style.opacity = '0.5';
        setTimeout(() => {
          mainImg.src = targetSrc;
          mainImg.style.opacity = '1';
        }, 120);
      });
    });
  }

  // Color Swatches
  const colorSwatchesContainer = document.querySelector('#color-swatches');
  const colorValEl = document.querySelector('#selected-color-val');

  if (colorSwatchesContainer) {
    colorSwatchesContainer.innerHTML = product.colors.map((c, idx) => `
      <button type="button" class="color-swatch-btn ${idx === 0 ? 'is-selected' : ''}"
        data-color="${c.name}"
        style="background-color: ${c.code};"
        aria-label="Color ${c.name}"
        title="${c.name}">
      </button>
    `).join('');

    if (colorValEl) colorValEl.textContent = selectedColor;

    const swatchBtns = colorSwatchesContainer.querySelectorAll('.color-swatch-btn');
    swatchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        swatchBtns.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        selectedColor = btn.getAttribute('data-color');
        if (colorValEl) colorValEl.textContent = selectedColor;
      });
    });
  }

  // Size Selector
  const sizeBtnsContainer = document.querySelector('#size-buttons');
  const sizeValEl = document.querySelector('#selected-size-val');

  if (sizeBtnsContainer) {
    sizeBtnsContainer.innerHTML = product.sizes.map((s, idx) => `
      <button type="button" class="size-btn ${idx === 0 ? 'is-selected' : ''}" data-size="${s}">
        ${s}
      </button>
    `).join('');

    if (sizeValEl) sizeValEl.textContent = selectedSize;

    const sizeBtns = sizeBtnsContainer.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        selectedSize = btn.getAttribute('data-size');
        if (sizeValEl) sizeValEl.textContent = selectedSize;
      });
    });
  }

  // Size Guide Table
  const sizeTableBody = document.querySelector('#size-table-body');
  if (sizeTableBody && product.sizeGuide) {
    sizeTableBody.innerHTML = product.sizeGuide.map(row => `
      <tr>
        <td><strong>${row.size}</strong></td>
        <td>${row.length}</td>
        <td>${row.width}</td>
        <td>${row.shoulder}</td>
        <td>${row.sleeve}</td>
      </tr>
    `).join('');
  }

  // Add to Cart Action
  const addToCartBtn = document.querySelector('#btn-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      if (typeof CartState !== 'undefined') {
        CartState.addItem(product, selectedColor, selectedSize, 1);
        if (typeof window.openCartDrawer === 'function') {
          window.openCartDrawer();
        }
      }
    });
  }

  // Related Products (4 items)
  const relatedGrid = document.querySelector('#related-products-grid');
  if (relatedGrid) {
    const relatedList = PRODUCTS_DATA
      .filter(p => p.id !== product.id)
      .slice(0, 4);

    relatedGrid.innerHTML = relatedList.map(item => `
      <article class="product-card">
        <a href="${getDetailUrl(item.id)}" class="product-image-wrap">
          ${item.isNew ? '<span class="product-badge-new">NEW</span>' : ''}
          <img src="${item.images[0]}" alt="${item.name}" class="product-img-primary" loading="lazy">
          <img src="${item.images[1]}" alt="${item.name} alternate view" class="product-img-secondary" loading="lazy">
        </a>
        <div class="product-info">
          <span class="product-brand">URBAN CLOSET</span>
          <h3 class="product-name">
            <a href="${getDetailUrl(item.id)}">${item.name}</a>
          </h3>
          <div class="product-price">¥${item.price.toLocaleString()}</div>
        </div>
      </article>
    `).join('');
  }
});

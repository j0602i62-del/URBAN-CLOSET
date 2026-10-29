/**
 * URBAN CLOSET - Products Catalog Logic
 * Filtering, Sorting, Dynamic Grid Rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#products-grid');
  if (!grid || typeof PRODUCTS_DATA === 'undefined') return;

  let currentCategory = 'ALL';
  let currentSort = 'newest';

  const filterBtns = document.querySelectorAll('.filter-btn');
  const sortSelect = document.querySelector('#sort-select');
  const countEl = document.querySelector('#products-count-num');

  const renderProducts = () => {
    let list = [...PRODUCTS_DATA];

    // Filter
    if (currentCategory !== 'ALL') {
      list = list.filter(item => item.category === currentCategory);
    }

    // Sort
    if (currentSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else {
      // Default: isNew first, then id
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0) || a.id - b.id);
    }

    // Update count
    if (countEl) {
      countEl.textContent = `${list.length} ITEMS`;
    }

    // Render HTML
    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: var(--color-text-muted);">
          該当する商品は見つかりませんでした。
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(item => `
      <article class="product-card">
        <a href="product-detail.html?id=${item.id}" class="product-image-wrap">
          ${item.isNew ? '<span class="product-badge-new">NEW</span>' : ''}
          <img src="${item.images[0]}" alt="${item.name}" class="product-img-primary" loading="lazy">
          <img src="${item.images[1]}" alt="${item.name} alternate view" class="product-img-secondary" loading="lazy">
        </a>
        <div class="product-info">
          <span class="product-brand">URBAN CLOSET</span>
          <h3 class="product-name">
            <a href="product-detail.html?id=${item.id}">${item.name}</a>
          </h3>
          <div class="product-price">¥${item.price.toLocaleString()}</div>
        </div>
      </article>
    `).join('');
  };

  // Filter Event
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Sort Event
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Initial render
  renderProducts();
});

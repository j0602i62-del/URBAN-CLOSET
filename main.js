/**
 * URBAN CLOSET - Main JavaScript
 * Header, Fullscreen Nav, Quick Search, Cart Drawer, Toast Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initFullscreenNav();
  initSearchModal();
  initCartDrawer();
  initNewsletter();
});

/* ==========================================================================
   Header Scroll Behavior
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   Fullscreen Navigation
   ========================================================================== */
function initFullscreenNav() {
  const trigger = document.querySelector('.menu-trigger');
  const nav = document.querySelector('.fullscreen-nav');
  const closeBtn = document.querySelector('.fullscreen-nav-close');

  if (!nav) return;

  const openNav = () => {
    nav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    nav.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (trigger) trigger.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav();
    }
  });

  // Highlight active link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });
}

/* ==========================================================================
   Quick Search Modal
   ========================================================================== */
function initSearchModal() {
  const searchTriggers = document.querySelectorAll('.header-search-btn');
  const searchModal = document.querySelector('.search-modal');
  const searchClose = document.querySelector('.search-close-btn');
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results-area');
  const quickTags = document.querySelectorAll('.search-quick-tag');

  if (!searchModal) return;

  const openSearch = () => {
    searchModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 150);
    }
  };

  const closeSearch = () => {
    searchModal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('is-open')) {
      closeSearch();
    }
  });

  const performSearch = (keyword) => {
    if (!searchResults || typeof PRODUCTS_DATA === 'undefined') return;

    const term = keyword.trim().toLowerCase();
    if (!term) {
      searchResults.innerHTML = `
        <div style="font-size:0.75rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--color-text-muted); margin-bottom:0.75rem;">POPULAR SEARCHES</div>
        <div class="search-quick-tags">
          <button type="button" class="search-quick-tag" data-tag="TOPS">TOPS</button>
          <button type="button" class="search-quick-tag" data-tag="Tシャツ">Tシャツ</button>
          <button type="button" class="search-quick-tag" data-tag="パンツ">パンツ</button>
          <button type="button" class="search-quick-tag" data-tag="コート">コート</button>
          <button type="button" class="search-quick-tag" data-tag="バッグ">バッグ</button>
        </div>
      `;
      bindQuickTags();
      return;
    }

    const matched = PRODUCTS_DATA.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.nameEn.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );

    if (matched.length === 0) {
      searchResults.innerHTML = `
        <p style="padding: 2rem 0; text-align: center; color: var(--color-text-muted); font-size: 0.88rem;">
          「${keyword}」に一致する商品は見つかりませんでした。
        </p>
      `;
      return;
    }

    let html = `<div style="font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--color-text-muted); margin-bottom:1rem;">${matched.length} ITEMS FOUND</div>`;
    matched.forEach(item => {
      html += `
        <a href="product-detail.html?id=${item.id}" class="search-item-result">
          <img src="${item.images[0]}" alt="${item.name}">
          <div>
            <div class="item-name">${item.name}</div>
            <div style="font-size: 0.75rem; color: var(--color-text-muted); letter-spacing:0.05em;">${item.category}</div>
          </div>
          <div class="item-price">¥${item.price.toLocaleString()}</div>
        </a>
      `;
    });
    searchResults.innerHTML = html;
  };

  const bindQuickTags = () => {
    document.querySelectorAll('.search-quick-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const val = tag.getAttribute('data-tag');
        if (searchInput) {
          searchInput.value = val;
          performSearch(val);
        }
      });
    });
  };

  bindQuickTags();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }
}

/* ==========================================================================
   Cart System (Local Storage & Drawer UI)
   ========================================================================== */
const CartState = {
  getItems() {
    try {
      return JSON.parse(localStorage.getItem('urban_closet_cart')) || [];
    } catch {
      return [];
    }
  },
  saveItems(items) {
    localStorage.setItem('urban_closet_cart', JSON.stringify(items));
    window.dispatchEvent(new Event('cartUpdated'));
  },
  addItem(product, color, size, qty = 1) {
    const items = this.getItems();
    const existingIndex = items.findIndex(
      i => i.id === product.id && i.color === color && i.size === size
    );

    if (existingIndex > -1) {
      items[existingIndex].qty += qty;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        color: color,
        size: size,
        qty: qty
      });
    }

    this.saveItems(items);
    showToast(`カートに追加しました: ${product.name}`);
  },
  removeItem(index) {
    const items = this.getItems();
    items.splice(index, 1);
    this.saveItems(items);
  },
  getTotalCount() {
    return this.getItems().reduce((sum, item) => sum + item.qty, 0);
  },
  getTotalAmount() {
    return this.getItems().reduce((sum, item) => sum + (item.price * item.qty), 0);
  }
};

function initCartDrawer() {
  const overlay = document.querySelector('.cart-drawer-overlay');
  const cartTriggers = document.querySelectorAll('.header-cart-btn');
  const closeBtn = document.querySelector('.cart-drawer-close');
  const itemsContainer = document.querySelector('.cart-drawer-items');
  const subtotalEl = document.querySelector('.cart-subtotal-val');
  const badges = document.querySelectorAll('.cart-badge');

  const updateCartUI = () => {
    const items = CartState.getItems();
    const totalCount = CartState.getTotalCount();
    const totalAmount = CartState.getTotalAmount();

    // Update badges
    badges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    // Update drawer items
    if (itemsContainer) {
      if (items.length === 0) {
        itemsContainer.innerHTML = `
          <div class="cart-empty-message">
            <p>ショッピングバッグに商品はありません</p>
            <a href="products.html" class="btn btn-outline" style="margin-top: 1.5rem; display: inline-flex;">SHOP ALL ITEMS</a>
          </div>
        `;
      } else {
        let html = '';
        items.forEach((item, index) => {
          html += `
            <div class="cart-item-card">
              <img src="${item.image}" alt="${item.name}">
              <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-meta">Color: ${item.color} / Size: ${item.size}</div>
                <div class="cart-item-meta">数量: ${item.qty}</div>
                <div class="cart-item-price">¥${(item.price * item.qty).toLocaleString()}</div>
              </div>
              <button type="button" class="cart-item-remove" data-index="${index}" title="削除">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          `;
        });
        itemsContainer.innerHTML = html;

        // Bind remove buttons
        itemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
          btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-index'), 10);
            CartState.removeItem(index);
          });
        });
      }
    }

    if (subtotalEl) {
      subtotalEl.textContent = `¥${totalAmount.toLocaleString()}`;
    }
  };

  const openDrawer = () => {
    if (!overlay) return;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  cartTriggers.forEach(btn => btn.addEventListener('click', openDrawer));
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeDrawer();
    });
  }

  window.addEventListener('cartUpdated', updateCartUI);
  updateCartUI();

  // Expose global open cart drawer
  window.openCartDrawer = openDrawer;
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('is-show');
  });

  setTimeout(() => {
    toast.classList.remove('is-show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3200);
}

/* ==========================================================================
   Newsletter Submission
   ========================================================================== */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (input && input.value) {
        showToast('ニュースレターにご登録いただきありがとうございます。');
        input.value = '';
      }
    });
  });
}


/* ==========================================================================
   Smart Link Resolver for both local file:// and web server hosting
   ========================================================================== */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

  // Local file:// protocol
  if (window.location.protocol === 'file:') {
    const isSubdir = window.location.pathname.indexOf('/products/') !== -1 ||
                     window.location.pathname.indexOf('\\products\\') !== -1 ||
                     window.location.pathname.indexOf('/about/') !== -1 ||
                     window.location.pathname.indexOf('\\about\\') !== -1 ||
                     window.location.pathname.indexOf('/lookbook/') !== -1 ||
                     window.location.pathname.indexOf('\\lookbook\\') !== -1 ||
                     window.location.pathname.indexOf('/contact/') !== -1 ||
                     window.location.pathname.indexOf('\\contact\\') !== -1;
    if (isSubdir && !href.startsWith('../')) {
      if (href === 'index.html' || href === 'products.html' || href === 'about.html' || href === 'lookbook.html' || href === 'contact.html' || href.startsWith('product-detail.html')) {
        e.preventDefault();
        window.location.href = '../' + href;
      }
    }
  } else {
    // Web hosting (Vercel, Netlify, custom domain, etc.)
    if (href === 'index.html') {
      e.preventDefault();
      window.location.href = '/';
    } else if (href === 'products.html') {
      e.preventDefault();
      window.location.href = '/products';
    } else if (href === 'about.html') {
      e.preventDefault();
      window.location.href = '/about';
    } else if (href === 'lookbook.html') {
      e.preventDefault();
      window.location.href = '/lookbook';
    } else if (href === 'contact.html') {
      e.preventDefault();
      window.location.href = '/contact';
    } else if (href.startsWith('product-detail.html?id=')) {
      e.preventDefault();
      const id = href.split('id=')[1];
      window.location.href = '/products/' + id;
    }
  }
});

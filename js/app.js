// ADDOINDIA - Flagship Storefront Controller

document.addEventListener('DOMContentLoaded', () => {
  initAnnouncementBar();
  initStickyHeader();
  initHeroCarousel();
  initProductGrid();
  initQuickViewModal();
  initStyleSwitcher();
  initReviewsSlider();
  initSearchOverlay();
  initOrderTracking();
  initFaqAccordion();
  initNewsletterForm();
  initCategoryFilterTabs();
  initModals();
});

// 1. ROTATING TOP ANNOUNCEMENT BAR
function initAnnouncementBar() {
  const bar = document.getElementById('announcementTicker');
  if (!bar) return;
  const messages = bar.querySelectorAll('.ticker-item');
  if (messages.length <= 1) return;

  let currentIndex = 0;
  setInterval(() => {
    messages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % messages.length;
    messages[currentIndex].classList.add('active');
  }, 4000);
}

// 2. STICKY LUXURY HEADER WITH SHADOW ON SCROLL
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');
  const closeMobileNav = document.getElementById('closeMobileNav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.classList.add('drawer-locked');
    });
  }

  if (closeMobileNav && mobileNav) {
    closeMobileNav.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.classList.remove('drawer-locked');
    });
  }
}

// 2B. HERO CAROUSEL CONTROLLER
function initHeroCarousel() {
  const carousel = document.getElementById('hero');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.hero-slide');
  const dots = carousel.querySelectorAll('.pagination-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  if (slides.length <= 1) return;

  let currentSlide = 0;
  let autoSlideTimer = null;
  const slideDuration = 5500;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');

    resetTimer();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startTimer() {
    stopTimer();
    autoSlideTimer = setInterval(nextSlide, slideDuration);
  }

  function stopTimer() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  function resetTimer() {
    stopTimer();
    startTimer();
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
    });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  }, { passive: true });

  startTimer();
}

// 3. PRODUCT RENDERING & CATEGORY FILTERING (MOST-LOVED STYLES)
let currentFilter = 'All';

function initProductGrid() {
  renderProducts(currentFilter);
}

function initCategoryFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      currentFilter = category;
      renderProducts(category);
    });
  });
}

function renderProducts(category = 'All') {
  const container = document.getElementById('bestSellersGrid');
  if (!container) return;

  let filtered = PRODUCTS;
  if (category !== 'All') {
    filtered = PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  container.innerHTML = filtered.map(product => {
    const isWish = window.storeManager ? window.storeManager.isWishlisted(product.id) : false;
    const defaultColor = product.colors[0];

    return `
      <article class="product-card" id="card-${product.id}" data-id="${product.id}" data-selected-color="0">
        <div class="product-media-wrapper">
          <span class="product-badge">${product.badge || `${product.discount}% OFF`}</span>
          
          <button class="wishlist-btn ${isWish ? 'active' : ''}" data-wishlist-id="${product.id}" onclick="storeManager.toggleWishlist('${product.id}')" aria-label="Toggle Wishlist">
            <svg class="heart-icon" viewBox="0 0 24 24" width="18" height="18">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <a href="#quick-view" class="product-img-link" onclick="openQuickView('${product.id}'); return false;">
            <img class="prod-main-img" src="${defaultColor.img}" alt="${product.name}" loading="lazy">
            <img class="prod-hover-img" src="${defaultColor.hoverImg || defaultColor.img}" alt="${product.name} back angle" loading="lazy">
          </a>

          <div class="product-card-overlay-actions">
            <button class="btn-quickview" onclick="openQuickView('${product.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              Quick View
            </button>
          </div>
        </div>

        <div class="product-card-body">
          <div class="product-meta">
            <span class="product-cat">${product.categoryLabel}</span>
            <div class="product-rating">
              <span class="star-gold">★</span> ${product.rating} <span class="review-count">(${product.reviewCount})</span>
            </div>
          </div>

          <h3 class="product-name">
            <a href="#quick-view" onclick="openQuickView('${product.id}'); return false;">${product.name}</a>
          </h3>
          <p class="product-tagline">${product.tagline}</p>

          <!-- Color Swatches -->
          <div class="product-swatches" aria-label="Available Colors">
            ${product.colors.map((c, idx) => `
              <button 
                class="swatch-circle ${idx === 0 ? 'active' : ''}" 
                style="background-color: ${c.hex};" 
                title="${c.name}"
                onclick="handleColorChange('${product.id}', ${idx})"
                aria-label="${c.name}">
              </button>
            `).join('')}
            <span class="swatch-count-text">+${product.colors.length} shades</span>
          </div>

          <!-- Price Row -->
          <div class="product-price-row">
            <span class="sale-price">₹${product.salePrice.toLocaleString()}</span>
            <span class="orig-price">₹${product.originalPrice.toLocaleString()}</span>
            <span class="discount-pill">${product.discount}% OFF</span>
          </div>

          <!-- Primary Actions -->
          <div class="product-card-buttons">
            <button class="btn-card-add" onclick="handleCardAddToCart('${product.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              Add to Cart
            </button>
            <button class="btn-card-buynow" onclick="handleCardBuyNow('${product.id}')">
              Buy Now
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 4. COLOR SWATCH SWITCHER ON CARD
window.handleColorChange = function(productId, colorIndex) {
  const card = document.getElementById(`card-${productId}`);
  if (!card) return;
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.colors[colorIndex]) return;

  const color = product.colors[colorIndex];
  card.setAttribute('data-selected-color', colorIndex);

  // Update image
  const mainImg = card.querySelector('.prod-main-img');
  const hoverImg = card.querySelector('.prod-hover-img');
  if (mainImg) mainImg.src = color.img;
  if (hoverImg) hoverImg.src = color.hoverImg || color.img;

  // Update active swatch
  const swatches = card.querySelectorAll('.swatch-circle');
  swatches.forEach((s, idx) => {
    s.classList.toggle('active', idx === colorIndex);
  });
};

window.handleCardAddToCart = function(productId) {
  const card = document.getElementById(`card-${productId}`);
  const colorIndex = card ? parseInt(card.getAttribute('data-selected-color') || '0', 10) : 0;
  const product = PRODUCTS.find(p => p.id === productId);
  if (product && window.storeManager) {
    window.storeManager.addToCart(product, colorIndex, 1);
  }
};

window.handleCardBuyNow = function(productId) {
  const card = document.getElementById(`card-${productId}`);
  const colorIndex = card ? parseInt(card.getAttribute('data-selected-color') || '0', 10) : 0;
  const product = PRODUCTS.find(p => p.id === productId);
  if (product && window.storeManager) {
    window.storeManager.addToCart(product, colorIndex, 1);
    window.storeManager.openCheckoutModal();
  }
};

// 5. QUICK VIEW MODAL
let activeQuickViewProduct = null;
let activeQuickViewColorIdx = 0;
let quickViewQty = 1;

function initQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  const closeBtn = document.getElementById('closeQuickView');
  const overlay = modal ? modal.querySelector('.modal-backdrop') : null;

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => closeQuickView());
  }
  if (overlay) {
    overlay.addEventListener('click', () => closeQuickView());
  }

  // Quick view stepper
  const minus = document.getElementById('qvQtyMinus');
  const plus = document.getElementById('qvQtyPlus');
  const val = document.getElementById('qvQtyVal');

  if (minus && plus && val) {
    minus.addEventListener('click', () => {
      if (quickViewQty > 1) {
        quickViewQty--;
        val.textContent = quickViewQty;
      }
    });
    plus.addEventListener('click', () => {
      quickViewQty++;
      val.textContent = quickViewQty;
    });
  }

  // Add to cart from modal
  const qvAddBtn = document.getElementById('qvAddToCartBtn');
  if (qvAddBtn) {
    qvAddBtn.addEventListener('click', () => {
      if (activeQuickViewProduct && window.storeManager) {
        window.storeManager.addToCart(activeQuickViewProduct, activeQuickViewColorIdx, quickViewQty);
        closeQuickView();
      }
    });
  }

  // Buy now from modal
  const qvBuyBtn = document.getElementById('qvBuyNowBtn');
  if (qvBuyBtn) {
    qvBuyBtn.addEventListener('click', () => {
      if (activeQuickViewProduct && window.storeManager) {
        window.storeManager.addToCart(activeQuickViewProduct, activeQuickViewColorIdx, quickViewQty);
        closeQuickView();
        window.storeManager.openCheckoutModal();
      }
    });
  }
}

window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeQuickViewProduct = product;
  activeQuickViewColorIdx = 0;
  quickViewQty = 1;

  const modal = document.getElementById('quickViewModal');
  if (!modal) return;

  // Populate data
  document.getElementById('qvCategory').textContent = product.categoryLabel;
  document.getElementById('qvTitle').textContent = product.name;
  document.getElementById('qvTagline').textContent = product.tagline;
  document.getElementById('qvSalePrice').textContent = `₹${product.salePrice.toLocaleString()}`;
  document.getElementById('qvOrigPrice').textContent = `₹${product.originalPrice.toLocaleString()}`;
  document.getElementById('qvDiscount').textContent = `${product.discount}% OFF`;
  document.getElementById('qvRating').textContent = `${product.rating} ★ (${product.reviewCount} reviews)`;
  document.getElementById('qvDescription').textContent = product.description;
  document.getElementById('qvDimensions').textContent = product.dimensions;
  document.getElementById('qvQtyVal').textContent = '1';

  // Features list
  const featuresList = document.getElementById('qvFeaturesList');
  if (featuresList) {
    featuresList.innerHTML = product.features.map(f => `<li><span class="check-icon">✓</span> ${f}</li>`).join('');
  }

  // Swatches
  const swatchesContainer = document.getElementById('qvSwatches');
  const selectedColorName = document.getElementById('qvSelectedColorName');
  if (selectedColorName) {
    selectedColorName.textContent = product.colors[0].name;
  }

  if (swatchesContainer) {
    swatchesContainer.innerHTML = product.colors.map((c, idx) => `
      <button 
        class="swatch-circle ${idx === 0 ? 'active' : ''}" 
        style="background-color: ${c.hex};" 
        title="${c.name}"
        onclick="updateQuickViewColor(${idx})"
        aria-label="${c.name}">
      </button>
    `).join('');
  }

  // Gallery
  updateQuickViewGallery(product.colors[0]);

  modal.classList.add('active');
  document.body.classList.add('modal-locked');
};

window.updateQuickViewColor = function(colorIndex) {
  if (!activeQuickViewProduct) return;
  activeQuickViewColorIdx = colorIndex;
  const color = activeQuickViewProduct.colors[colorIndex];

  const selectedColorName = document.getElementById('qvSelectedColorName');
  if (selectedColorName) selectedColorName.textContent = color.name;

  const swatches = document.querySelectorAll('#qvSwatches .swatch-circle');
  swatches.forEach((s, idx) => s.classList.toggle('active', idx === colorIndex));

  updateQuickViewGallery(color);
};

function updateQuickViewGallery(color) {
  const mainDisplay = document.getElementById('qvMainImage');
  const thumbContainer = document.getElementById('qvThumbs');
  if (!mainDisplay || !thumbContainer) return;

  mainDisplay.src = color.img;

  const angles = [
    { label: "Front Angle", src: color.img },
    { label: "Studio Angle", src: color.hoverImg || color.img }
  ];

  thumbContainer.innerHTML = angles.map((ang, idx) => `
    <button class="qv-thumb ${idx === 0 ? 'active' : ''}" onclick="changeQvMainImage('${ang.src}', this)">
      <img src="${ang.src}" alt="${ang.label}">
    </button>
  `).join('');
}

window.changeQvMainImage = function(src, btn) {
  const mainDisplay = document.getElementById('qvMainImage');
  if (mainDisplay) mainDisplay.src = src;
  document.querySelectorAll('.qv-thumb').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
};

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
  document.body.classList.remove('modal-locked');
}

// 6. STYLE SWITCHER (LOOK 01 - CLASSIC vs LOOK 02 - BOLD)
function initStyleSwitcher() {
  const btnClassic = document.getElementById('switchLookClassic');
  const btnBold = document.getElementById('switchLookBold');

  if (btnClassic && btnBold) {
    btnClassic.addEventListener('click', () => applyStyleLook('classic'));
    btnBold.addEventListener('click', () => applyStyleLook('bold'));
  }
}

function applyStyleLook(lookKey) {
  const look = STYLE_LOOKS[lookKey];
  if (!look) return;

  // Toggle active buttons
  const btnClassic = document.getElementById('switchLookClassic');
  const btnBold = document.getElementById('switchLookBold');
  if (lookKey === 'classic') {
    btnClassic.classList.add('active');
    btnBold.classList.remove('active');
  } else {
    btnBold.classList.add('active');
    btnClassic.classList.remove('active');
  }

  // Update content with smooth fade
  const container = document.getElementById('styleSwitchDisplay');
  if (!container) return;

  container.style.opacity = '0.4';
  setTimeout(() => {
    document.getElementById('styleLookTitle').textContent = look.title;
    document.getElementById('styleLookTagline').textContent = look.tagline;
    document.getElementById('styleLookDesc').textContent = look.description;
    document.getElementById('styleLookQuote').textContent = `“${look.quote}”`;
    document.getElementById('styleLookMoodImg').src = look.moodImage;
    document.getElementById('styleHeroBagImg').src = look.heroBag.img;
    document.getElementById('styleHeroBagName').textContent = look.heroBag.name;
    document.getElementById('styleHeroBagPrice').textContent = look.heroBag.price;
    document.getElementById('stylePairingTip').textContent = look.heroBag.pairWith;

    // Palette chips
    const paletteContainer = document.getElementById('styleLookPalette');
    if (paletteContainer) {
      paletteContainer.innerHTML = look.palette.map((hex, idx) => `
        <div class="palette-chip">
          <span class="chip-color" style="background-color: ${hex};"></span>
          <span class="chip-label">${look.paletteNames[idx]}</span>
        </div>
      `).join('');
    }

    const ctaBtn = document.getElementById('styleShopNowBtn');
    if (ctaBtn) {
      ctaBtn.onclick = () => openQuickView(look.heroBag.productId);
    }

    container.style.opacity = '1';
  }, 200);
}

// 7. CUSTOMER REVIEWS SLIDER
function initReviewsSlider() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  container.innerHTML = CUSTOMER_REVIEWS.map(rev => `
    <div class="review-card">
      <div class="review-stars">★★★★★</div>
      <blockquote class="review-quote">“${rev.quote}”</blockquote>
      <div class="review-meta">
        <img class="review-avatar" src="${rev.avatar}" alt="${rev.author}">
        <div class="review-author-info">
          <h4 class="review-name">${rev.author} <span class="verified-badge">✓ Verified Customer</span></h4>
          <p class="review-loc">${rev.city} • Purchased ${rev.product}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 8. LIVE SEARCH OVERLAY
function initSearchOverlay() {
  const openBtns = document.querySelectorAll('[data-action="open-search"]');
  const closeBtn = document.getElementById('closeSearchOverlay');
  const overlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('siteSearchInput');
  const resultsContainer = document.getElementById('searchResultsList');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (overlay) {
        overlay.classList.add('open');
        setTimeout(() => searchInput && searchInput.focus(), 150);
      }
    });
  });

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('open');
    });
  }

  if (searchInput && resultsContainer) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length < 2) {
        resultsContainer.innerHTML = '<p class="search-hint">Type to search for Tote, Shoulder, Crossbody, Work, Laptop bags...</p>';
        return;
      }

      const matches = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.features.some(f => f.toLowerCase().includes(q))
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `<p class="search-empty">No matching designs found for "${q}". Explore our <a href="#best-sellers" onclick="document.getElementById('searchOverlay').classList.remove('open');">Best Sellers</a>.</p>`;
        return;
      }

      resultsContainer.innerHTML = matches.map(prod => `
        <div class="search-result-row" onclick="document.getElementById('searchOverlay').classList.remove('open'); openQuickView('${prod.id}');">
          <img src="${prod.colors[0].img}" alt="${prod.name}">
          <div class="search-result-info">
            <h5>${prod.name}</h5>
            <span class="search-result-cat">${prod.categoryLabel} • ${prod.tagline}</span>
            <div class="search-result-price">₹${prod.salePrice.toLocaleString()} <span class="orig">₹${prod.originalPrice.toLocaleString()}</span></div>
          </div>
          <button class="btn-search-view">View</button>
        </div>
      `).join('');
    });
  }
}

// 9. TRACK ORDER MODAL SIMULATION
function initOrderTracking() {
  const trackBtns = document.querySelectorAll('[data-action="track-order"]');
  const modal = document.getElementById('trackOrderModal');
  const closeBtn = document.getElementById('closeTrackOrder');
  const submitBtn = document.getElementById('btnSubmitTracking');
  const resultBox = document.getElementById('trackingStatusResult');

  trackBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (submitBtn && resultBox) {
    submitBtn.addEventListener('click', () => {
      const orderNo = document.getElementById('trackOrderInput').value.trim();
      if (!orderNo) {
        window.toastManager.show({ title: "Order Number Required", message: "Please enter your ADDO-XXXX order number.", type: "error" });
        return;
      }
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div class="track-timeline">
          <div class="track-step completed">
            <span class="track-dot"></span>
            <strong>Order Placed & Confirmed</strong>
            <small>Yesterday, 4:32 PM</small>
          </div>
          <div class="track-step completed">
            <span class="track-dot"></span>
            <strong>Quality Inspected & Packed in Dust Bag</strong>
            <small>Today, 9:15 AM</small>
          </div>
          <div class="track-step in-transit">
            <span class="track-dot"></span>
            <strong>In Transit with BlueDart Express Air</strong>
            <small>Expected Delivery: Tomorrow by 2:00 PM</small>
          </div>
          <div class="track-step pending">
            <span class="track-dot"></span>
            <strong>Delivered to Doorstep</strong>
            <small>Pending</small>
          </div>
        </div>
      `;
    });
  }
}

// 10. FAQ ACCORDION
function initFaqAccordion() {
  document.querySelectorAll('.faq-accordion-item').forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-accordion-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// 11. NEWSLETTER FORM & COUPON UNLOCK
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput ? emailInput.value.trim() : '';

    if (email) {
      window.toastManager.show({
        title: "Welcome to AddoIndia Circle!",
        message: "Your 10% welcome coupon code is: WELCOME10",
        type: "success",
        duration: 6000
      });
      emailInput.value = '';
    }
  });
}

// 12. GENERAL MODALS CLOSING
function initModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    const close = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');
    if (close) close.addEventListener('click', () => modal.classList.remove('active'));
    if (backdrop) backdrop.addEventListener('click', () => modal.classList.remove('active'));
  });

  // Simulated checkout complete
  const completeOrderBtn = document.getElementById('btnCompleteOrder');
  if (completeOrderBtn) {
    completeOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const checkoutModal = document.getElementById('checkoutModal');
      if (checkoutModal) checkoutModal.classList.remove('active');
      
      // Clear cart
      if (window.storeManager) {
        window.storeManager.cart = [];
        window.storeManager.save('addo_cart', []);
        window.storeManager.renderBadgeCounts();
        window.storeManager.renderCartItems();
      }

      window.toastManager.show({
        title: "Order Placed Successfully! 🎉",
        message: "Order #ADDO-8492 placed. Confirmation email & tracking link sent.",
        type: "success",
        duration: 6000
      });
    });
  }
}

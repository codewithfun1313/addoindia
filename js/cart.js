// ADDOINDIA - Cart & Wishlist State Management

class StoreManager {
  constructor() {
    this.cart = this.load('addo_cart', [
      // Preload with an iconic product so the cart has initial luxury life
      {
        id: "prod-ava-tote",
        name: "The Ava Tote",
        colorName: "Cognac Brown",
        colorHex: "#7B3F00",
        price: 3499,
        originalPrice: 6299,
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
        quantity: 1
      }
    ]);
    this.wishlist = this.load('addo_wishlist', ["prod-claire-tophandle"]);
    this.promoCode = null;
    this.discountAmount = 0;
    this.freeShippingThreshold = 1999;
    this.init();
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn("Storage write error", e);
    }
  }

  init() {
    this.renderBadgeCounts();
    this.renderCartItems();
    this.renderWishlistDrawer();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Cart open triggers
    document.querySelectorAll('[data-action="open-cart"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.openCart();
      });
    });

    // Wishlist open triggers
    document.querySelectorAll('[data-action="open-wishlist"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.openWishlist();
      });
    });

    // Close drawers
    document.querySelectorAll('[data-action="close-drawer"]').forEach(el => {
      el.addEventListener('click', () => {
        this.closeDrawers();
      });
    });

    const backdrop = document.getElementById('drawerBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => this.closeDrawers());
    }

    // Promo code apply
    const promoBtn = document.getElementById('applyPromoBtn');
    const promoInput = document.getElementById('promoInput');
    if (promoBtn && promoInput) {
      promoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        if (code === 'WELCOME10') {
          this.promoCode = code;
          this.discountPercent = 0.10;
          this.renderCartItems();
          window.toastManager.show({
            title: "Coupon Applied!",
            message: "10% Extra Discount has been applied to your order.",
            type: "success"
          });
        } else if (code === 'PREPAID500' || code === 'EXTRA500') {
          this.promoCode = code;
          this.discountFixed = 500;
          this.renderCartItems();
          window.toastManager.show({
            title: "Coupon Applied!",
            message: "₹500 flat discount unlocked on your order.",
            type: "success"
          });
        } else {
          window.toastManager.show({
            title: "Invalid Code",
            message: "Try code 'WELCOME10' or 'PREPAID500'",
            type: "error"
          });
        }
      });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        this.openCheckoutModal();
      });
    }
  }

  // CART OPERATIONS
  addToCart(product, selectedColorIndex = 0, quantity = 1) {
    const color = product.colors ? product.colors[selectedColorIndex] : { name: "Default", hex: "#000", img: product.img };
    const itemImg = color.img || (product.colors && product.colors[0].img) || product.img;

    const existingIndex = this.cart.findIndex(
      item => item.id === product.id && item.colorName === color.name
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        colorName: color.name,
        colorHex: color.hex,
        price: product.salePrice,
        originalPrice: product.originalPrice,
        img: itemImg,
        quantity: quantity
      });
    }

    this.save('addo_cart', this.cart);
    this.renderBadgeCounts();
    this.renderCartItems();

    window.toastManager.show({
      title: "Added to Bag",
      message: `${product.name} (${color.name}) added to your shopping bag.`,
      type: "cart"
    });

    this.openCart();
  }

  updateQuantity(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.cart.splice(index, 1);
    }
    this.save('addo_cart', this.cart);
    this.renderBadgeCounts();
    this.renderCartItems();
  }

  removeFromCart(index) {
    const item = this.cart[index];
    this.cart.splice(index, 1);
    this.save('addo_cart', this.cart);
    this.renderBadgeCounts();
    this.renderCartItems();
    if (item) {
      window.toastManager.show({
        title: "Item Removed",
        message: `${item.name} removed from your bag.`,
        type: "info"
      });
    }
  }

  // WISHLIST OPERATIONS
  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    const name = prod ? prod.name : "Product";

    if (index > -1) {
      this.wishlist.splice(index, 1);
      window.toastManager.show({
        title: "Wishlist Updated",
        message: `${name} removed from your wishlist.`,
        type: "info"
      });
    } else {
      this.wishlist.push(productId);
      window.toastManager.show({
        title: "Saved to Wishlist",
        message: `${name} saved to your wishlist favourites.`,
        type: "wishlist"
      });
    }

    this.save('addo_wishlist', this.wishlist);
    this.renderBadgeCounts();
    this.renderWishlistDrawer();
    this.updateWishlistButtonStates();
  }

  isWishlisted(productId) {
    return this.wishlist.includes(productId);
  }

  updateWishlistButtonStates() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      const active = this.isWishlisted(id);
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-label', active ? 'Remove from Wishlist' : 'Add to Wishlist');
    });
  }

  // RENDERING
  renderBadgeCounts() {
    const totalCartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = totalCartCount;
      badge.style.display = totalCartCount > 0 ? 'flex' : 'none';
    });

    const totalWishlistCount = this.wishlist.length;
    document.querySelectorAll('.wishlist-count-badge').forEach(badge => {
      badge.textContent = totalWishlistCount;
      badge.style.display = totalWishlistCount > 0 ? 'flex' : 'none';
    });
  }

  renderCartItems() {
    const cartContainer = document.getElementById('cartDrawerItems');
    const emptyState = document.getElementById('cartEmptyState');
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountRow = document.getElementById('cartDiscountRow');
    const discountEl = document.getElementById('cartDiscountVal');
    const totalEl = document.getElementById('cartFinalTotal');
    const shippingProgressText = document.getElementById('shippingProgressText');
    const shippingProgressBar = document.getElementById('shippingProgressBar');

    if (!cartContainer) return;

    if (this.cart.length === 0) {
      cartContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      const summaryBox = document.getElementById('cartSummaryBox');
      if (summaryBox) summaryBox.style.display = 'none';
      if (shippingProgressBar) shippingProgressBar.style.width = '0%';
      if (shippingProgressText) {
        shippingProgressText.innerHTML = `Add <strong>₹${this.freeShippingThreshold.toLocaleString()}</strong> more for <strong>FREE Express Shipping</strong>`;
      }
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    const summaryBox = document.getElementById('cartSummaryBox');
    if (summaryBox) summaryBox.style.display = 'block';

    let subtotal = 0;
    cartContainer.innerHTML = this.cart.map((item, idx) => {
      subtotal += item.price * item.quantity;
      return `
        <div class="cart-item-card" data-index="${idx}">
          <div class="cart-item-thumb">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <div class="cart-item-header">
              <h4 class="cart-item-title">${item.name}</h4>
              <button class="cart-item-remove" onclick="storeManager.removeFromCart(${idx})" title="Remove item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div class="cart-item-color">
              <span class="color-dot" style="background-color: ${item.colorHex};"></span>
              <span>${item.colorName}</span>
            </div>
            <div class="cart-item-pricing">
              <span class="cart-sale-price">₹${(item.price * item.quantity).toLocaleString()}</span>
              ${item.originalPrice ? `<span class="cart-orig-price">₹${(item.originalPrice * item.quantity).toLocaleString()}</span>` : ''}
            </div>
            <div class="cart-item-qty-row">
              <div class="qty-stepper">
                <button class="qty-btn" onclick="storeManager.updateQuantity(${idx}, -1)" aria-label="Decrease">&minus;</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="storeManager.updateQuantity(${idx}, 1)" aria-label="Increase">&#43;</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Shipping Progress Calculation
    const remainingForFreeShip = Math.max(0, this.freeShippingThreshold - subtotal);
    const progressPercent = Math.min(100, (subtotal / this.freeShippingThreshold) * 100);

    if (shippingProgressBar) shippingProgressBar.style.width = `${progressPercent}%`;
    if (shippingProgressText) {
      if (remainingForFreeShip === 0) {
        shippingProgressText.innerHTML = `🎉 <strong>Congratulations!</strong> You've unlocked <strong>FREE Express Shipping</strong>`;
      } else {
        shippingProgressText.innerHTML = `Add <strong>₹${remainingForFreeShip.toLocaleString()}</strong> more for <strong>FREE Express Shipping</strong>`;
      }
    }

    // Discounts
    let discount = 0;
    if (this.promoCode === 'WELCOME10') {
      discount = Math.round(subtotal * 0.10);
    } else if (this.promoCode === 'PREPAID500' || this.promoCode === 'EXTRA500') {
      discount = Math.min(500, subtotal);
    }

    const finalTotal = Math.max(0, subtotal - discount);

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
    if (discountRow) {
      if (discount > 0) {
        discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-₹${discount.toLocaleString()}`;
      } else {
        discountRow.style.display = 'none';
      }
    }
    if (totalEl) totalEl.textContent = `₹${finalTotal.toLocaleString()}`;
  }

  renderWishlistDrawer() {
    const wishlistContainer = document.getElementById('wishlistDrawerItems');
    const emptyState = document.getElementById('wishlistEmptyState');
    if (!wishlistContainer) return;

    if (this.wishlist.length === 0) {
      wishlistContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    const wishlistedProducts = PRODUCTS.filter(p => this.wishlist.includes(p.id));

    wishlistContainer.innerHTML = wishlistedProducts.map(prod => {
      const color = prod.colors[0];
      return `
        <div class="wishlist-item-card">
          <div class="wishlist-thumb">
            <img src="${color.img}" alt="${prod.name}">
          </div>
          <div class="wishlist-info">
            <h4>${prod.name}</h4>
            <p class="wishlist-cat">${prod.categoryLabel}</p>
            <div class="wishlist-price">
              <span class="sale">₹${prod.salePrice.toLocaleString()}</span>
              <span class="orig">₹${prod.originalPrice.toLocaleString()}</span>
            </div>
            <div class="wishlist-actions">
              <button class="btn-bag-from-wishlist" onclick="storeManager.addToCart(PRODUCTS.find(p=>p.id==='${prod.id}'), 0, 1)">Move to Bag</button>
              <button class="btn-remove-wishlist" onclick="storeManager.toggleWishlist('${prod.id}')" title="Remove">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  openCart() {
    this.closeDrawers();
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
    document.body.classList.add('drawer-locked');
  }

  openWishlist() {
    this.closeDrawers();
    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
    document.body.classList.add('drawer-locked');
  }

  closeDrawers() {
    document.querySelectorAll('.drawer-panel').forEach(d => d.classList.remove('open'));
    const backdrop = document.getElementById('drawerBackdrop');
    if (backdrop) backdrop.classList.remove('visible');
    document.body.classList.remove('drawer-locked');
  }

  openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
      modal.classList.add('active');
      this.closeDrawers();
    }
  }
}

window.storeManager = new StoreManager();

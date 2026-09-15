// Toast Notification System
class ToastManager {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'addo-toast-container';
    document.body.appendChild(this.container);
  }

  show({ title, message, type = 'success', duration = 3200, icon = '✦' }) {
    const toast = document.createElement('div');
    toast.className = `addo-toast addo-toast-${type}`;

    let iconSvg = '';
    if (type === 'cart') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;
    } else if (type === 'wishlist') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#B38F61" stroke="#B38F61" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    } else {
      iconSvg = `<span class="toast-custom-icon">${icon}</span>`;
    }

    toast.innerHTML = `
      <div class="toast-icon-wrapper">${iconSvg}</div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        ${message ? `<div class="toast-msg">${message}</div>` : ''}
      </div>
      <button class="toast-close" aria-label="Close">&times;</button>
    `;

    this.container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    const removeToast = () => {
      toast.classList.remove('visible');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    };

    toast.querySelector('.toast-close').addEventListener('click', removeToast);
    setTimeout(removeToast, duration);
  }
}

window.toastManager = new ToastManager();

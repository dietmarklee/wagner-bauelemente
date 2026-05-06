(function () {
  if (localStorage.getItem('cookieAccepted')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-text">
      Diese Website verwendet technisch notwendige Cookies.
      Weitere Informationen finden Sie in unserer
      <a href="/datenschutz.html">Datenschutzerklärung</a>.
    </div>
    <button id="cookie-ok">Verstanden</button>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #1a1a1a;
      color: #fff;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      z-index: 9999;
      font-size: 0.9rem;
      flex-wrap: wrap;
    }
    #cookie-banner a {
      color: #fff;
      text-decoration: underline;
    }
    #cookie-ok {
      background: #fff;
      color: #1a1a1a;
      border: none;
      padding: 0.5rem 1.2rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      white-space: nowrap;
      flex-shrink: 0;
    }
    #cookie-ok:hover {
      background: #e0e0e0;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(banner);

  document.getElementById('cookie-ok').addEventListener('click', function () {
    localStorage.setItem('cookieAccepted', '1');
    banner.remove();
  });
})();

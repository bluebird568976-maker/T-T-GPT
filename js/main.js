const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();
  if (!name || !message) return;
  alert(`${name} 様\nお問い合わせ内容を確認しました。\n\n現在はフォームの表示確認用です。実際の送信には送信先サービスの設定が必要です。`);
});

const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header.style.transform = current > lastScroll && current > 100 ? 'translateY(-100%)' : 'translateY(0)';
  header.style.transition = 'transform .35s ease';
  lastScroll = current;
});

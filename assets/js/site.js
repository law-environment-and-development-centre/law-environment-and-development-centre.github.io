// Mobile menu: the Menu button shows and hides the main navigation on small
// screens. Without JavaScript the menu is simply always shown.
(function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!button || !nav) return;

  function setOpen(open) {
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
})();

(function(){
  const DEFAULT_TITLE = 'Frost Chicken';
  const DEFAULT_FAVICON = 'https://images.emojiterra.com/google/android-11/512px/1f414.png';

  function apply() {
    try {
      const title = localStorage.getItem('siteTitle') || DEFAULT_TITLE;
      const favicon = localStorage.getItem('siteLogo') || DEFAULT_FAVICON;
      if (title) document.title = title;
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = favicon;
    } catch (e) {
      alert('Cloaking failed', e);
    }
  }

  apply();

  window.addEventListener('storage', (e) => {
    if (e.key === 'siteTitle' || e.key === 'siteLogo') apply();
  });

  window._applySiteSettings = apply;
})();

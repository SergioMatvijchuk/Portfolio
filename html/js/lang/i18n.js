function loadLanguage(langCode) {
    const existing = document.querySelector('#lang-script');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'lang-script';
    script.src = `./js/lang/${langCode}.js`;


    script.onload = () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (window.lang && window.lang[key]) {
                el.textContent = window.lang[key];
            }
        });
        localStorage.setItem('site-lang', langCode);

    };
    document.head.appendChild(script);
}

// Загружаем язык при загрузке страницы
const savedLang = localStorage.getItem('site-lang') || 'en';
loadLanguage(savedLang);
const savedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
    document.body.classList.add('light-theme');
} else if (savedTheme === 'dark') {
    document.body.classList.remove('light-theme');
}

document.addEventListener('click', (event) => {
    const toggleBtn = event.target.closest('#chengeTheme');
   
    if (toggleBtn) {
        const isLight = document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateIcon(toggleBtn, isLight);
    }
});

function updateIcon(button, isLight) {
    button.textContent = isLight ? '🌙' : '☀️';
}

const observer = new MutationObserver(() => {
    const toggleBtn = document.getElementById('chengeTheme');
    if (toggleBtn) {
        const isLight = document.body.classList.contains('light-theme');
        updateIcon(toggleBtn, isLight);
        observer.disconnect();
    }
});
observer.observe(document.body, { childList: true, subtree: true });
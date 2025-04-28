// Fonction pour basculer le thème
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Mettre à jour l'attribut data-theme
    html.setAttribute('data-theme', newTheme);
    
    // Mettre à jour le switch
    const themeSwitch = document.querySelector('.switch .input');
    if (themeSwitch) {
        themeSwitch.checked = newTheme === 'dark';
    }
    
    // Sauvegarder la préférence dans le localStorage
    localStorage.setItem('theme', newTheme);
}

// Initialiser le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    html.setAttribute('data-theme', savedTheme);
    
    // Mettre à jour le switch
    const themeSwitch = document.querySelector('.switch .input');
    if (themeSwitch) {
        themeSwitch.checked = savedTheme === 'dark';
        themeSwitch.addEventListener('change', toggleTheme);
    }
}); 
// Fonction pour basculer le thème
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Mettre à jour l'attribut data-theme
    html.setAttribute('data-theme', newTheme);
    
    // Mettre à jour l'icône
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Sauvegarder la préférence dans le localStorage
    localStorage.setItem('theme', newTheme);
}

// Initialiser le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    html.setAttribute('data-theme', savedTheme);
    
    // Mettre à jour l'icône
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Ajouter l'événement click au bouton
    themeToggle.addEventListener('click', toggleTheme);
}); 
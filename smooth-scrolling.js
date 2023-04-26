// Znajdź wszystkie linki a z klasą .nav-link
const navLinks = document.querySelectorAll('.nav-link');

// Dla każdego linku dodaj funkcję, która wykona się po kliknięciu
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // zatrzymaj domyślne zachowanie po kliknięciu
    
    // Pobierz atrybut href klikniętego linku
    const href = this.getAttribute('href');
    
    // Znajdź element na stronie z id równym wartości href
    const section = document.querySelector(href);
    
    // Przejdź płynnie do sekcji na stronie
    section.scrollIntoView({ behavior: "smooth" });
  });
});

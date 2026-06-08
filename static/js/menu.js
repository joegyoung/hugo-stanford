document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.su-menu-toggle');
  const popupMenu = document.querySelector('.su-popup-menu');

  if (menuToggle && popupMenu) {
    menuToggle.addEventListener('click', () => {
      // Check if the menu is currently expanded
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle the state
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      popupMenu.classList.toggle('is-active');
    });

    // Optional: Close the menu if a user clicks anywhere outside of it
    document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !popupMenu.contains(event.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        popupMenu.classList.remove('is-active');
      }
    });
  }
});
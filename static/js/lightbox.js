document.addEventListener('DOMContentLoaded', () => {
  // Target only images inside your post articles
  //const articleImages = document.querySelectorAll('article img');
  const articleImages = document.querySelectorAll('.container img');
  articleImages.forEach(img => {
    // Add a pointer cursor to let users know it's clickable
    img.style.cursor = 'pointer';
    
    img.addEventListener('click', () => {
      // Create the modal/popover background overlay
      const overlay = document.createElement('div');
      overlay.className = 'su-image-popover-overlay';
      
      // Create the high-res cloned image
      const popoverImg = document.createElement('img');
      popoverImg.src = img.src;
      popoverImg.alt = img.alt;
      popoverImg.className = 'su-image-popover-content';
      
      // Append elements together
      overlay.appendChild(popoverImg);
      document.body.appendChild(overlay);
      
      // Prevent scrolling on the main page while looking at the image
      document.body.style.overflow = 'hidden';
      
      // Close the popover on click
      overlay.addEventListener('click', () => {
        overlay.remove();
        document.body.style.overflow = '';
      });
    });
  });
});
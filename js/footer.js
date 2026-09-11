document.addEventListener('DOMContentLoaded', () => {
  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-container">
        <p>&copy; ${new Date().getFullYear()} Sprout Lab. All rights reserved.</p>
      </div>
    </footer>
  `;

  // Appends to the end of body or replaces an existing footer element
  const existingFooter = document.querySelector('footer');
  if (existingFooter) {
    existingFooter.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
});

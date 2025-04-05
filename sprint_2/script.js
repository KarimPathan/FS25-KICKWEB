window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.offsetHeight;
      document.body.classList.remove('intro-mode');
      document.body.classList.add('main-mode');
    }, 3000);
  });
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.offsetHeight;
      document.body.classList.remove('intro-mode');
      document.body.classList.add('main-mode');
      setTimeout(() => {
        document.body.style.opacity = 1;
    }, 10);
    }, 3000);

  });
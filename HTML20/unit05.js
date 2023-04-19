window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('visible', window.scrollY > 0);
  });
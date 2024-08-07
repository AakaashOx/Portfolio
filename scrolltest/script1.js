document.addEventListener('DOMContentLoaded', function () {
  const slideInSection = document.querySelector('.slide-in-section');
  
  window.addEventListener('scroll', function () {
    const sectionTop = slideInSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;
    
    if (sectionTop < triggerPoint) {
      slideInSection.classList.add('slide-in');
    }else{
      slideInSection.classList.remove('slide-in');
    }
  });
});

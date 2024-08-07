// Example: Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const slideInSection = document.querySelector('.imgSlPro1');
  
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

document.addEventListener('DOMContentLoaded', function () {
  const slideInSection = document.querySelector('.imgSlPro2');
  
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

document.addEventListener('DOMContentLoaded', function () {
  const slideInSection = document.querySelector('.imgSlPro3');
  
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
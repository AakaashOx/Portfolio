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

document.addEventListener('DOMContentLoaded', function () {
  const slideInSection = document.querySelector('.skthead');
  
  window.addEventListener('scroll', function () {
    const sectionTop = slideInSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;
    
    if (sectionTop < triggerPoint) {
      slideInSection.classList.add('slide-up');
    }else{
      slideInSection.classList.remove('slide-up');
    }
  });
});


window.addEventListener('scroll', function() {
  const images = document.querySelectorAll('.image-container');
  
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      image.classList.add('show');
    }else{
      image.classList.remove('show');
    }
  });
});

document.querySelectorAll('.image-container').forEach(container => {
  container.addEventListener('mousemove', function(e) {
      const image = this.querySelector('img'); // Selects the img element within the container

      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate center of the container
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate percentage distance from the center
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      // Apply transform to simulate perspective shift
      image.style.transform = `perspective(1000px) rotateX(${percentY * -5}deg) rotateY(${percentX * 5}deg)`;
  });

  container.addEventListener('mouseleave', function() {
      const image = this.querySelector('img'); // Selects the img element within the container
      image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'; // Reset on mouse leave
  });
});


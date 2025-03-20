// -----------------------
// Header Scroll Behavior
// -----------------------
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // -----------------------
  // Carousel Functionality
  // -----------------------
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;
  
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
    // Trigger typewriter effect for the new active slide
    typewriterEffect(slides[index].querySelector('.typed-text'));
  }
  
  // Next/Prev Button Events
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  
  // (Optional) Auto-play every 5 seconds
  // setInterval(() => {
  //   currentSlide = (currentSlide + 1) % slides.length;
  //   showSlide(currentSlide);
  // }, 5000);
  
  // -----------------------
  // Typewriter Effect
  // -----------------------
  let typingInProgress = false;
  
  function typewriterEffect(element) {
    if (!element) return;
    const textToType = element.getAttribute('data-text') || '';
    
    // If a typing effect is already in progress, reset it
    if (typingInProgress) {
      element.textContent = '';
      typingInProgress = false;
    }
    
    element.textContent = '';
    let index = 0;
    typingInProgress = true;
    
    // Expand the width for a nice blinking effect
    element.style.width = textToType.length + 'ch';
  
    const timer = setInterval(() => {
      if (index < textToType.length) {
        element.textContent += textToType.charAt(index);
        index++;
      } else {
        clearInterval(timer);
        typingInProgress = false;
      }
    }, 80); // Typing speed in ms
  }
  
  // Initialize first slide with typewriter on page load
  window.addEventListener('load', () => {
    showSlide(currentSlide);
  });
  
  // -----------------------
  // Simple Captcha Checkbox
  // -----------------------
  const captchaCheck = document.getElementById('captchaCheck');
  const submitBtn = document.querySelector('.contact-form button[type="submit"]');
  
  if (captchaCheck && submitBtn) {
    captchaCheck.addEventListener('change', () => {
      // Enable submit button only if checkbox is checked
      submitBtn.disabled = !captchaCheck.checked;
    });
  }
  
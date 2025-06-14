  document.addEventListener('DOMContentLoaded', function() {
  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = window.innerWidth < 768 ? 15 : 25;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 100 + 50;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      
      const duration = Math.random() * 20 + 10;
      particle.style.animationDuration = duration + 's';
      
      const delay = Math.random() * 5;
      particle.style.animationDelay = delay + 's';
      
      particlesContainer.appendChild(particle);
    }
  }
  
  function handleScrollAnimation() {
    const faders = document.querySelectorAll('.fade-in-section');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    if ('IntersectionObserver' in window) {
      const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          appearOnScroll.unobserve(entry.target);
        });
      }, appearOptions);
      
      faders.forEach(fader => {
        appearOnScroll.observe(fader);
      });
      
      const iosTitle = document.getElementById('ios-title');
      if (iosTitle) {
        iosTitle.classList.add('visible');
      }
      
      const appCards = document.querySelectorAll('.app-card');
      setTimeout(() => {
        appCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 100);
        });
      }, 500);
    }
  }
  
  function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    if (!menuToggle || !mobileMenu || !menuOverlay) return;
    
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    menuOverlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  function setupCategoryTabs() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const appCards = document.querySelectorAll('.app-card');
    
    if (!categoryTabs.length || !appCards.length) return;
    
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        categoryTabs.forEach(t => t.classList.remove('active'));
        
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        if (category === 'الكل') {
          appCards.forEach(card => {
            card.style.display = 'block';
            setTimeout(() => {
              card.classList.add('visible');
            }, 100);
          });
        } else {
          appCards.forEach(card => {
            card.classList.remove('visible');
            setTimeout(() => {
              const cardCategory = card.getAttribute('data-category');
              if (cardCategory === category || card.querySelector('.app-description').textContent.includes(category)) {
                card.style.display = 'block';
                setTimeout(() => {
                  card.classList.add('visible');
                }, 100);
              } else {
                card.style.display = 'none';
              }
            }, 300);
          });
        }
      });
    });
  }
  
  function setupDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        if (!confirm('هل أنت متأكد من تثبيت هذا التطبيق؟ قد يكون هناك مخاطر أمنية محتملة عند تثبيت تطبيقات من مصادر غير معروفة.')) {
          e.preventDefault();
          return;
        }
        
        const originalText = this.textContent;
        this.textContent = 'جاري التحميل...';
        setTimeout(() => {
          this.textContent = 'تم البدء!';
          setTimeout(() => {
            this.textContent = originalText;
          }, 1500);
        }, 1000);
      });
    });
  }
  
  function optimizeImages() {
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }
  
  function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      navbar.style.background = scrollPosition > 50 ? 'rgba(10, 0, 0, 0.9)' : 'transparent';
    });
  }
  // تشغيل جميع الوظائف
  createParticles();
  handleScrollAnimation();
  setupMobileMenu();
  setupCategoryTabs();
  setupDownloadButtons();
  optimizeImages();
  setupScrollEffects();
});
 function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // حجم عشوائي
                const size = Math.random() * 150 + 50;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // موضع عشوائي
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                // حركة عشوائية
                particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                container.appendChild(particle);
            }
        }
        
        // تأثيرات التمرير
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const sections = document.querySelectorAll('.fade-in-section');
            
            // جعل الشعار مرئيًا عند تحميل الصفحة
            const logo = document.getElementById('vr7-logo');
            if (scrollPosition > 50) {
                logo.style.opacity = '1';
                logo.style.transform = 'translateY(0)';
            }
            
            // جعل الأقسام مرئية عند التمرير إليها
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight * 0.8) {
                    section.classList.add('visible');
                }
            });
        }
        
        // إضافة تأثير النقر على الأزرار
        document.querySelectorAll('.action-button').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
        
        // تشغيل الوظائف عند تحميل الصفحة
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', () => {
            createParticles();
            handleScroll();
        });
        
        // تشغيل معالج التمرير مرة واحدة عند تحميل الصفحة
        setTimeout(handleScroll, 100);
        
        // تعريف حركة الجزيئات
        document.styleSheets[0].insertRule(`
            @keyframes float {
                0%, 100% { 
                    transform: translate(0, 0) rotate(0deg); 
                    opacity: 0.3;
                }
                25% { 
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 90}deg);
                    opacity: 0.6;
                }
                50% { 
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 180}deg);
                    opacity: 0.3;
                }
                75% { 
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 270}deg);
                    opacity: 0.6;
                }
            }
        `, 0);
        
        // إضافة تأثير تمرير سلس
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        
        // إنشاء جزيئات للخلفية
function createParticles() {
  const container = document.getElementById('particles');
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // حجم عشوائي
    const size = Math.random() * 150 + 50;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // موضع عشوائي
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    // حركة عشوائية
    particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(particle);
  }
}

// تأثيرات التمرير
function handleScroll() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const sections = document.querySelectorAll('.fade-in-section');
  
  // جعل العنوان مرئيًا عند تحميل الصفحة
  const title = document.getElementById('executor-title');
  if (scrollPosition > 50) {
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
  }
  
  // جعل الأقسام مرئية عند التمرير إليها
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight * 0.8) {
      section.classList.add('visible');
    }
  });
}

// إضافة تأثير النقر على الأزرار
document.querySelectorAll('.download-button').forEach(button => {
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

// تشغيل الوظائف عند تحميل الصفحة
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  createParticles();
  handleScroll();
});

// تشغيل معالج التمرير مرة واحدة عند تحميل الصفحة
setTimeout(handleScroll, 100);

// تعريف حركة الجزيئات
document.styleSheets[0].insertRule(`
            @keyframes float {
                0%, 100% { 
                    transform: translate(0, 0) rotate(0deg); 
                    opacity: 0.3;
                }
                25% { 
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 90}deg);
                    opacity: 0.6;
                }
                50% { 
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 180}deg);
                    opacity: 0.3;
                }
                75% { 
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 270}deg);
                    opacity: 0.6;
                }
            }
        `, 0);

// إضافة تأثير تمرير سلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });
});

// إضافة العناصر اللازمة للقائمة في DOM
document.addEventListener('DOMContentLoaded', function() {
  // إنشاء العناصر اللازمة للقائمة في DOM
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  document.body.appendChild(menuToggle);
  
  // إنشاء القائمة المتحركة
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  
  // نسخ روابط القائمة الأصلية إلى القائمة المتحركة
  const navLinks = document.querySelectorAll('.navbar a');
  const menuItemsList = document.createElement('ul');
  menuItemsList.className = 'mobile-menu-items';
  
  navLinks.forEach(link => {
    const li = document.createElement('li');
    const newLink = link.cloneNode(true);
    li.appendChild(newLink);
    menuItemsList.appendChild(li);
  });
  
  mobileMenu.appendChild(menuItemsList);
  document.body.appendChild(mobileMenu);
  
  // إنشاء طبقة التلاشي
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);
  
  // تحسين التفاعل مع القائمة
  menuToggle.addEventListener('click', function() {
    // تبديل الكلاسات بشكل أكثر دقة
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // تحسين التحكم بالتمرير
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    
    // إضافة تأثير تموج عند النقر
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    this.appendChild(ripple);
    
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
  
  // إغلاق القائمة عند النقر على الطبقة السوداء
  overlay.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  
  // إغلاق القائمة عند النقر على أي رابط في القائمة
  const mobileLinks = document.querySelectorAll('.mobile-menu-items a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
      
      // التنقل السلس بين الأقسام
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // إضافة مراقب التقاطع للأقسام
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  // مراقبة الأقسام القابلة للتلاشي
  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });
  
  // إضافة أنماط تموج للزر
  const style = document.createElement('style');
  style.textContent = `
    .menu-toggle {
      position: relative;
      overflow: hidden;
    }
    
    .ripple {
      position: absolute;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-effect 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple-effect {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});


const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');

// إضافة مستمع الحدث لزر القائمة
menuToggle.addEventListener('click', function() {
  // تبديل الكلاس في العناصر
  this.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  
  // منع التمرير عندما تكون القائمة مفتوحة
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// إغلاق القائمة عند النقر على الطبقة السوداء
menuOverlay.addEventListener('click', function() {
  menuToggle.classList.remove('active');
  mobileMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
});

document.querySelectorAll('.action-button').forEach(button => {
  if (button.textContent.includes('نسخ')) {
    button.addEventListener('click', function () {
      const codeBlock = this.closest('.script-content').querySelector('.code-block code');
      const textToCopy = codeBlock.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert('تم نسخ السكربت بنجاح!');
      }).catch(err => {
        alert('حدث خطأ أثناء النسخ: ' + err);
      });
    });
  }
});
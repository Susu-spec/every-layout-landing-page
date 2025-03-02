document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    document.querySelectorAll('button').forEach(function(btn) {
      btn.classList.toggle('dark-mode');
    });
    
    document.querySelectorAll('a').forEach(function(p) {
      p.classList.toggle('dark-mode');
    });
 
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) ctaSection.classList.toggle('dark-mode');
  
    const cta = document.querySelector('.cta');
    if (cta) cta.classList.toggle('dark-mode');
  
    const reviewDivs = document.querySelector('.review-divs');
    if (reviewDivs) reviewDivs.classList.toggle('dark-mode');

    const images = document.querySelector(".image-theme");
    if(images) images.classList.toggle('dark-mode')
  });
  
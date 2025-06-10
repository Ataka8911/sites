
        document.addEventListener('DOMContentLoaded', function() {
      const heroLink = document.querySelector('.btnmain');
      const modal = document.querySelector('.hidenav');
      const btn = document.querySelector('.btnmain');
      const head = document.querySelector('.header')
    

      if (heroLink && modal && btn) {
       
        heroLink.addEventListener('click', function(e) {
          e.preventDefault(); 
          modal.classList.toggle('is-hidden');
          btn.classList.toggle('btnmainsecondpos')
          head.classList.toggle('headerhide')
        });
      } else {
        console.error('Один из элементов не найден! Проверьте классы элементов.');
      }
    });
document.addEventListener('DOMContentLoaded', function() {
  const downloadButton = document.querySelector('.ArendaPDFDownload');
  
  if (downloadButton) {
    downloadButton.addEventListener('click', function(e) {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = '../anketa.pdf'; 
      link.download = 'anketa.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  } else {
    console.warn('Элемент .ArendaPDFDownload не найден на странице');
  }
});
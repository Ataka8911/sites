
        document.addEventListener('DOMContentLoaded', function() {
      // Находим элементы
      const heroLink = document.querySelector('.btnmain');
      const modal = document.querySelector('.hidenav');
      const btn = document.querySelector('.btnmain');
      const head = document.querySelector('.header')
    
      // Проверяем, что все элементы существуют
      if (heroLink && modal && btn) {
        // Открываем модальное окно при клике на кнопку
        heroLink.addEventListener('click', function(e) {
          e.preventDefault(); // Предотвращаем действие по умолчанию (если это ссылка)
          modal.classList.toggle('is-hidden');
          btn.classList.toggle('btnmainsecondpos')
          head.classList.toggle('headerhide')
        });
      } else {
        console.error('Один из элементов не найден! Проверьте классы элементов.');
      }
    });
    
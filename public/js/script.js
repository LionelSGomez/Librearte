document.addEventListener('DOMContentLoaded', function() {
    let a = document.getElementById('burger');
    let b = document.querySelector('.homeNav ul');
  
    a.addEventListener('click', function() {
      b.classList.toggle('show');
    });


    const menu = document.querySelector('.homeNav ul');
    const tabletSize = 768; 

    function checkViewportSize() {
        if (window.innerWidth >= tabletSize) {
            menu.classList.remove('show');
        }
    }
    window.addEventListener('DOMContentLoaded', checkViewportSize);
    window.addEventListener('resize', checkViewportSize);
  });
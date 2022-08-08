const mobileBtn = document.getElementById('mobile-CTA')
    nav = document.querySelector('nav')
    mobileBtnexit = document.getElementById('mobile-CTA-exit');

    mobileBtn.addEventListener('click', () => {
      nav.classList.add('menu-btn');
    })

    mobileBtnexit.addEventListener('click', () =>{
      nav.classList.remove('menu-btn');
    })
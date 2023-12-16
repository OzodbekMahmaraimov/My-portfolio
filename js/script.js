const hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 150 && backToTopBtn) {
        backToTopBtn.classList.add('show');
        backToTopBtn.classList.remove('hide');

    } else {
        if (backToTopBtn) {
            backToTopBtn.classList.remove('show');
            backToTopBtn.classList.add('hide');
        }
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// colors
let home = document.querySelector('.one-page');
let about = document.querySelector('.about-container');
let myProject = document.querySelector('.my-project-container');
let portfolio = document.querySelector('.portfolio');
let contactUs = document.querySelector('.contact-body');

// home 
document.querySelector('#color-home').addEventListener('input', function () {
    home.style.backgroundColor = document.querySelector('#color-home').value;
})

// about
document.querySelector('#color-about').addEventListener('input', function () {
    about.style.backgroundColor = document.querySelector('#color-about').value;
})

// my project
document.querySelector('#color-project').addEventListener('input', function () {
    myProject.style.background = document.querySelector('#color-project').value;
})

// portfolio
document.querySelector('#color-portfolio').addEventListener('input', function () {
    portfolio.style.backgroundColor = document.querySelector('#color-portfolio').value;
})

// contact US 
document.querySelector('#color-contact').addEventListener('input', function () {
    contactUs.style.background = document.querySelector('#color-contact').value;
})

const clearAll = () => {
    home.style.backgroundColor = '#003049';
    about.style.backgroundColor = '#040404';
    myProject.style.background = 'linear-gradient(45deg, #08001f, #30197d)';
    portfolio.style.backgroundColor = '#003049';
    contactUs.style.background = '#2c2f48';
    document.querySelector('#color-home').value = '';
    document.querySelector('#color-about').value = '';
    document.querySelector('#color-project').value = '';
    document.querySelector('#color-portfolio').value = '';
    document.querySelector('#color-contact').value = '';
}

document.addEventListener("DOMContentLoaded", function () {
    // Saytingiz yuklandi
    var preloader = document.querySelector(".loader");

    // 3 sekunddan so'ng "preloader"ni yashirish
    setTimeout(function () {
        preloader.style.display = "none";
    }, 1200);
});

setTimeout(function () {
    let homeImg = document.querySelector('.home_rasm-col');
    homeImg.classList.add('scaleImage');
}, 2000);

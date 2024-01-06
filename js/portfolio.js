window.addEventListener('DOMContentLoaded', () => {
    let allFilters = document.querySelectorAll("section.btns li.btn");
    let allCards = document.querySelectorAll("section.gallery div.card");

    for (let i = 0; i < allFilters.length; i++) {
        allFilters[i].addEventListener('click', myFunction);
    }

    function myFunction() {
        let currentTab = document.querySelector('section.btns  .active');
        currentTab.classList.remove('active');
        this.classList.add('active');
        let filter = this.getAttribute('data-filter');
        if (filter != 'all') {
            for (let i = 0; i < allCards.length; i++) {
                allCards[i].classList.add('hide');
                allCards[i].classList.remove('active');
                let currentItem = allCards[i].getAttribute('data-item');
                if (currentItem == filter) {
                    allCards[i].classList.add('active');
                    allCards[i].classList.remove('hide');
                }
            }
        } else {
            for (let i = 0; i < allCards.length; i++) {
                allCards[i].classList.remove('hide');
                allCards[i].classList.add('active');
            }
        }

    }
})
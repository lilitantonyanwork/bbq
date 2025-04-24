var swiper = new Swiper(".banner", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".product__slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const tab  = document.querySelectorAll(".tab__links");
const colorItem  = document.querySelectorAll(".color__item");


tab.forEach(button => {
    button.addEventListener("click", (event) => {
        const tabId = button.dataset.id
        openTab(event, tabId)

    });
})
colorItem.forEach(button => {
    button.addEventListener("click", (event) => {

        colorItem.forEach(i => i.classList.remove('color__item--active'));
        button.classList.add('color__item--active');

    });
})
function openTab(evt, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab__links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabId).style.display = "flex";
    evt.currentTarget.className += " active";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

const modalRequest = document.getElementById("request-modal");
const openRequest = document.querySelectorAll(".btn__request");
const openRequest1 = document.querySelector(".btn__call");
const closeBtn = document.querySelectorAll(".btn__close");
const mobMenu = document.querySelector(".mobile__navbar--menu");
const menu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".close__menu");

if (openRequest){
    console.log('aaa')
    openRequest.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            modalRequest.style.display = "flex";
        });
    })


}
openRequest1.addEventListener("click", (event) => {
    event.preventDefault();
    modalRequest.style.display = "flex";
});
mobMenu.addEventListener("click", (event) => {
    event.preventDefault();
   menu.classList.add('open');
});
menuClose.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.remove('open');
});
if(closeBtn){
    closeBtn.forEach(button => {

        button.addEventListener("click", () => {
            if (modalRequest){
                modalRequest.style.display = "none";
            }
        });
    });
}
window.addEventListener("click", (event) => {
    if (event.target === modalRequest) {
        modalRequest.style.display = "none";

    }
});
//inputMask
let phoneInputs = document.querySelectorAll('.js-phone-mask');
phoneInputs.forEach(function (input) {
    var maskOptions = {
        mask: '+7 (999) 999-99-99',  // Здесь вы можете установить свою маску
        greedy: false,
        placeholder: '_',
        showMaskOnHover: false,
    };

    Inputmask(maskOptions).mask(input);
});
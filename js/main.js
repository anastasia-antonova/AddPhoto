let slideIndex = 1;
let slideIndex2 = 1;

function scrollToSome(element) {
    const y = document.querySelector(element).getBoundingClientRect().top;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}

// console.log(document.querySelector('.our-location').querySelector('.images'));
// const ourLocationEl = document.querySelector('.our-location');
// if (ourLocationEl) {
//     console.log(ourLocationEl)
//     const imagesEl = ourLocationEl.querySelector('.images');
//   if (imagesEl) {
//       const childrenAr = imagesEl.children;
//       for (let node of childrenAr) {
//          console.log(node);
//       }
//   }
// }

function slider(className, obj, place, mainSlideIndex) {

    const ourLocationEl = document.querySelector(className);
    if (ourLocationEl) {
        console.log(ourLocationEl)
        const imagesEl = ourLocationEl.querySelector(obj);
        if (imagesEl) {
            const childrenAr = imagesEl.children;
            let i = 0;
            for (let node of childrenAr) {
                i++;
                node.src = "image/" + place + "/pic" + (i + mainSlideIndex) +".jpeg";
            }
        }
    }
    const btnRight = ourLocationEl.querySelector('.right');
    if (mainSlideIndex > 3) {
        btnRight.style.display = "none";
    } else {
        btnRight.style.display = "initial";
    }

    const btnLeft = ourLocationEl.querySelector('.left');
    if (mainSlideIndex < 0) {
        btnLeft.style.display = "none";
    } else {
        btnLeft.style.display = "initial";
    }
}


function slideRight() {
    slideIndex++;
    slider ('.our-location', '.images', 'our-location', slideIndex)
}

function slideLeft() {
    slideIndex--;
    slider ('.our-location', '.images', 'our-location', slideIndex)
}

function slideRightWork() {
    slideIndex2++;
    slider ('.slader-our-work', '.images', 'our-works', slideIndex2)

}

function slideLeftWork() {
    slideIndex2--;
    slider ('.slader-our-work', '.images', 'our-works', slideIndex2)

}

function send() {
    const form = document.querySelector('.form-section');
    if(form) {
        const groups = form.querySelectorAll('.form-group');
        console.log(groups)
        for (let a of groups) {
            const input = a.querySelector('input');
            let required = false;
            let number = false;
            if (input.value === '') {
                required = true;
                a.classList.add('form-group--error');
                a.querySelector('.required').style = "display: block";
                if (input.id === 'number') {
                    a.querySelector('.not-number').style = "display: none";
                }
            } else {
                if (input.id === 'number') {
                    a.querySelector('.required').style = "display: none";
                    if (!input.value.match(/^\d+$/)) {
                        number = true;
                        a.querySelector('.not-number').style = "display: block";
                        a.classList.add('form-group--error');
                    }
                }
            }
            if(!required && !number) {
                a.classList.remove('form-group--error');
                a.querySelector('.required').style = "display: none";
                if (input.id === 'number') {
                    a.querySelector('.not-number').style = "display: none";
                }
            }
        }
    }
}

const users = [
    { name: "Мария", avatarImage: "photo1.png", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus distinctio exercitationem omnis quis. Aliquam aut, explicabo maiores nihil rem rerum sed suscipit vitae!"},
    { name: "Сергей", avatarImage: "photo2.png",  comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus distinctio exercitationem omnis quis. Aliquam aut, explicabo maiores nihil rem rerum sed suscipit vitae!"},
    { name: "Руслан", avatarImage: "photo3.png",  comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus distinctio exercitationem omnis quis. Aliquam aut, explicabo maiores nihil rem rerum sed suscipit vitae!"}
]
const reviewSection = document.getElementsByClassName('card-reviews-section');
let myHtmlReview = '';
for (let element of users) {
    let button = '';
    if (element.name === 'Сергей') {
        button = `<button class="buttons2" onclick="openPopUp('.review')">Добавить отзыв</button>`
    }
    myHtmlReview += `<div class="card-reviews">
                    <img src="image/reviews/${element.avatarImage}" alt="ffg">
                    <div class="text-reviews">
                        <p class="name-review">${element.name}</p>
                        <p class="p-text">${element.comment}</p>
                        <a href="">Показать ещё</a>
                    </div>
                    ${button}
                </div>`
}
reviewSection[0].innerHTML = myHtmlReview

const boxStages = [
    {tittle: 'Заявка', text: `Съешь еще этих мягких французских булок, да выпей <br>чаю. Съешь еще этих мягки`, index: "1"},
    {tittle: 'Бронь', text: `Съешь еще этих мягких французских булок, да выпей <br>чаю. Съешь еще этих мягки`, index: "2"},
    {tittle: 'Съёмка', text: `Съешь еще этих мягких <br>французских булок, да выпей <br>чаю. Съешь еще этих мягки`, index: "3"},
    {tittle: `Составление <br> Технического задания`, text: `Съешь еще этих мягких <br>французских булок, да выпей <br>чаю. Съешь еще этих мягки`, index: "4"},
    {tittle: 'Готовые фото', text: `Съешь еще этих мягких <br>французских булок, да выпей <br>чаю. Съешь еще этих мягки`, index: "5"}
]
const stages = document.getElementsByClassName('content-stages');
let myHtmlStages = '';

for (let element of boxStages) {
    myHtmlStages += `<div class="box-stage" data-index="${element.index}">
            <div class="box-text">
                <p class="title-box-text">${element.tittle}</p>
                <p>${element.text}</p>
            </div>
        </div>`
}
stages[0].innerHTML = myHtmlStages;


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.burger-section').querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

function openPopUp(className) {
    document.querySelector(className).style = "display: flex";
    document.body.style.overflow = "hidden"
}

function  closePopUp(className) {
    document.querySelector(className).style = "display: none";
    document.body.style.overflow = "auto"
}

function openAnotherPopup(close, open) {
    closePopUp(close)
    openPopUp(open)
}








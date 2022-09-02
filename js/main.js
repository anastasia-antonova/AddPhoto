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

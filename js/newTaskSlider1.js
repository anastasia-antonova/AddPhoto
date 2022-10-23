function sliderGroup() {
    const box1Section = document.getElementById('box1');
    const imageElement = box1Section.getElementsByClassName('images');;
    if (imageElement.length) {
        const imageListDiv = imageElement[0];
        let imageHtml = '';
        const imgArray = [
            {
                img: 'pic1.jpeg'
            },
            {
                img: 'pic2.jpeg'
            },
            {
                img: 'pic3.jpeg'
            }];

        imgArray.forEach((value, index) => {
            let className = 'active';
            if(index === 0) {
                className += '-left';
            } else if(index === 2) {
                className += '-right';
            }
            imageHtml += `
                <img src="${'image/our-works/' + value.img }" alt="gh" class="${className}">
            `;
        });
        imageListDiv.innerHTML = imageHtml;
    }
}
sliderGroup();
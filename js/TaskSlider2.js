function sliderGroup2() {
    const box1Section = document.getElementsByClassName('our-location');
    if(box1Section.length) {
        const imageSlader2 = box1Section[0].getElementsByClassName('images');
        if(imageSlader2.length) {
            const imageListDiv = imageSlader2[0];
            let imageHtml = '';
            [1, 2, 3].forEach(value => {
                imageHtml += `<img src="image/our-location/pic${value}.jpeg" alt="gdh">`;
            });
            imageListDiv.innerHTML = imageHtml;
        }
    }
}

sliderGroup2();

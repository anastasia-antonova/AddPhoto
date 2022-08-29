function scrollToSome(element) {
    const y = document.querySelector(element).getBoundingClientRect().top;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}

var scroll = document.querySelector('.curve');
window.addEventListener('scroll', function() {
    var value = 3.2 + window.scrollY/ -500; // tocar el (x +) para ajustar la altura
    scroll.style.transform = `scaleY(${value})`;
})
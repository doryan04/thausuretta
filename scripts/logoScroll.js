addEventListener('scroll', function(){
    const logo = document.getElementsByClassName("logo")[0];
    let koef = 2.5;
    let scroll = window.pageYOffset;
    koef = 2.5 + scroll/50;
    logo.style.transform = "scale(calc(100% / " + koef + ")) translate(0)";
    logo.style.opacity = "1" - scroll * 0.002;
})
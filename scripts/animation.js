
// ========================== //
// Код анимации для плюшек!!! //
// ========================== //

const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");

addEventListener('scroll', function(){

    // Динамическое навигационное меню //

    let navigationBar = document.getElementsByClassName("navigation-dynamic")[0];

    if (window.pageYOffset >= navigationBar.clientHeight){
        navigationBar.classList.add("active");
    } else if (window.pageYOffset == 0) {
        navigationBar.classList.remove("active");
    }

    // Анимированные стрелочки //

    if (window.pageYOffset >= ((window.innerHeight * Math.cos(30 * (Math.PI/180))))/4){
        arrowLeft.id = "left_active";
        arrowRight.id = "right_active";
    } else if (window.pageYOffset == 0) {
        arrowLeft.id = "left";
        arrowRight.id = "right";
    }
});




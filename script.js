let header = document.querySelector("header");
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener ("scroll", function () {
    header.classList.toggle ("shadow", window.scrollY > 0);
});


menu.onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};




let darkmode = document.querySelector("#darkmode");

darkmode.addEventListener('click', () => {
    console.log("Dark mode button clicked"); // Add this line for debugging

    if (darkmode.classList.contains("bx-moon")) {
        console.log("Switching to dark mode"); // Add this line for debugging
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
        console.log("Switching to light mode"); // Add this line for debugging
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
});








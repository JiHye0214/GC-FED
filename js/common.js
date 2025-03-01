let url = window.location.pathname;
let currentPage = url.substring(1).split(".")[0];

// NAV 
const $navWrap = document.querySelectorAll("nav > a");

$navWrap.forEach((nav) => {
    const navText = 
    nav.innerText === "Home" ? "index" : 
    nav.innerText === "Contact Me" ? "contact" : 
    nav.innerText.toLowerCase();

    if(navText == currentPage) {
        if(navText == "contact") {
            $(nav).css("backgroundColor", "var(--yellow-hover)");
        } else {
            $(nav).css("borderBottom", "3px solid var(--my-yellow)");
        }
    } else {
        $(nav).css("color", "");
    }
})


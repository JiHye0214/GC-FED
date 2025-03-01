let url = window.location.pathname;
let currentPage = url.substring(1).split(".")[0];
console.log(currentPage)

// NAV 
const $navWrap = document.querySelectorAll("nav > a");
$navWrap.forEach((nav) => {
    const navText = nav.innerText == "Home" ? "index" : nav.innerText.toLowerCase();

    if(navText == currentPage) {
        $(nav).css("borderBottom", "3px solid var(--my-yellow)");
    } else {
        $(nav).css("color", "");
    }
})


const url = window.location.pathname;
const currentPage = url.split("/")[2].split(".")[0];

// NAV 
const $navWrap = document.querySelectorAll("nav > a");
$navWrap.forEach((nav) => {
    const navText = nav.innerText == "Home" ? "index" : nav.innerText.toLowerCase();

    if(navText == currentPage) {
        $(nav).css("color", "white");
    } else {
        $(nav).css("color", "");
    }
})


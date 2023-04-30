// Toggle class active
const containerNavbarII = document.querySelector ('.container-navbarII');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    containerNavbarII.classList.toggle('active');
};


// NAVBAR II
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.querySelector(".container-navbarII").classList.remove("scroll");
} else {
    document.querySelector(".container-navbarII").classList.add("scroll");
}
prevScrollpos = currentScrollPos;
}


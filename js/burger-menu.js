document.querySelector('.burger-icon').addEventListener('click', showBurgerMenu);
function showBurgerMenu() {
    const topNav = document.getElementById("topnav");
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}
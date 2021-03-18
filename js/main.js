$(document).ready(() => {
    AOS.init({
        delay: 200,
        duration: 750,
        easing: "ease-in-out",
    });
    $("#introButton").on("click", () => {
        location.hash = "intro";
    })
    $("#aboutButton").on("click", () => {
        location.hash = "intro";
    })
    $("#teamButton").on("click", () => {
        location.hash = "team";
    });
    $("#contactButton").on("click", () => {
        location.hash = "contact";
    });

    $(".navbar-menu a.navbar-item").on("click", () => {
        document.querySelector("#navbarMenu").classList.remove("is-active");
    });

    if ($(window).width() >= 900) {
        $("#team .site-body.content figure").removeClass("is-64x64");
        $("#team .site-body.content figure").addClass("is-128x128");
    }

    const navbarMenu = document.querySelector("#navbarMenu");
    $("#burgerIcon").on("click", () => {
        navbarMenu.classList.toggle("is-active");
    });
});

var fheaderTopbar = document.getElementById("stopbar"),
    fheaderHeader = document.getElementById("sheader"),
    fheaderHeaderMenu = document.getElementById("sheaderMenu"),
    fheaderWrap = document.getElementById("swrapHeader");

function headerFixed() {
    fheaderTopbar.classList.add("stickyTopbar"), fheaderHeader.classList.remove("ocult"), fheaderHeaderMenu.classList.remove("ocult"), fheaderWrap.classList.add("headerOcult")
}

function headerUnfixed() {
    fheaderTopbar.classList.remove("stickyTopbar"), fheaderHeader.classList.add("ocult"), fheaderHeaderMenu.classList.add("ocult", "hiddenMenu"), fheaderWrap.classList.remove("headerOcult")
}
window.addEventListener("scroll", (function () {
    window.scrollY > 100 ? headerFixed() : headerUnfixed()
}));
var menuClicado = !1,
    menuAtr = document.querySelector(".stickyHeader__menu"),
    menuMobile = document.querySelector(".stickyHeader__mobilemenu"),
    timeoutId = null;

function showMenu() {
    window.innerWidth > 1199 && (menuClicado ? (menuAtr.classList.add("hiddenMenu"), menuClicado = !1, document.removeEventListener("click", hideMenu), clearTimeout(timeoutId)) : (menuAtr.classList.remove("hiddenMenu"), menuClicado = !0, timeoutId = setTimeout((function () {
        document.addEventListener("click", hideMenu)
    }), 5e3), menuAtr.addEventListener("mouseover", (function () {
        clearTimeout(timeoutId)
    }))))
}

function hideMenu(e) {
    window.innerWidth > 1199 && e.target !== menuAtr && e.target !== menuMobile && (menuAtr.classList.add("hiddenMenu"), menuClicado = !1, document.removeEventListener("click", hideMenu))
}
menuMobile.addEventListener("click", showMenu), menuAtr.addEventListener("mouseout", (function (e) {
    window.innerWidth > 1199 && e.relatedTarget !== menuAtr && e.relatedTarget !== menuMobile && (clearTimeout(timeoutId), timeoutId = setTimeout((function () {
        hideMenu({
            target: null
        })
    }), 5e3))
}));
"use strict";

function slickAutor() {
    $(".shelfAutor ul li").length > 16 ? window.innerWidth > 1200 ? $(".shelfAutor ul").slick({
        slidesToShow: 4,
        rows: 4,
        infinite: !0
    }) : $(".shelfAutor ul").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: !0
    }) : window.innerWidth > 1200 && ($(".shelfAutor ul").attr("style", "display:flex;justify-content:center;flex-wrap:wrap;"), $(".shelfAutor ul li").attr("style", "margin-right:16px;"))
}
$(".shelfAutor li:not(.shelfAutorItem)").remove(), $(document).ready(function () {
    slickAutor()
});
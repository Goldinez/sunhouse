"use strict";

function filters() {
    $(".search-multiple-navigator .refino > h5").each((function (a) {
        var b = '<div class="filterSelect__title">' + $(this).text().replace(":", "") + "</div>",
            c = '<div class="filterSelect__options">' + $(this).parents("fieldset").find("div").html() + "</div>";
        $('<div class="filterSelect">' + b + c + "</div>").appendTo(".catalogFilters > .content"), a !== parseInt($(".search-multiple-navigator .refino > h5").length / 2) && a + 1 !== $(".search-multiple-navigator .refino > h5").length || $(".catalogFilters > .content > .filterSelect").wrapAll("<ul></ul>")
    })), $(".search-multiple-navigator .refino > h5").length > 2 && $('<a class="filterSelect__show show"><span></span> <strong></strong></a>').appendTo(".catalogFilters > .content > ul"), $(".filterSelect__title").click((function () {
        $(this).next(".filterSelect__options").slideToggle("fast")
    })), $("body").on("click", ".filterSelect__show", (function () {
        $(this).hasClass("show") ? ($(".catalogFilters > .content > ul:eq(1)").addClass("showing"), $(".filterSelect__show").removeClass("show").addClass("hide")) : ($(".catalogFilters > .content > ul:eq(1)").removeClass("showing"), $(".filterSelect__show").removeClass("hide").addClass("show"))
    }));
    var a = '<div class="categoriesSelect"><div class="categoriesSelect__title">Categorias</div><div class="categoriesSelect__options"></div></div>';
    $("body").hasClass("department") && $(a).appendTo(".catalogOptions > .content"), $("ul.departList").each((function () {
        $(this).appendTo(".catalogOptions > .content .categoriesSelect__options")
    })), $("body").hasClass("categoria") && $(a).appendTo(".catalogOptions > .content"), $("ul.catList").each((function () {
        $(this).appendTo(".catalogOptions > .content .categoriesSelect__options")
    })), $("body").hasClass("subcategoria") && $(a).appendTo(".catalogOptions > .content"), $("ul.subcatList").each((function () {
        $(this).appendTo(".catalogOptions > .content .categoriesSelect__options")
    })), $(".categoriesSelect__title").click((function () {
        $(this).next(".categoriesSelect__options").slideToggle("fast")
    })), $('<div class="orderSelect"><div class="orderSelect__title">Ordenar por</div><div class="orderSelect__options"></div></div>').appendTo(".catalogOptions > .content"), $(".orderBy:eq(0) > select:eq(0) > option").each((function () {
        if ("Selecione" != $(this).text()) {
            var a = '<a href="javascript:void(0)" value="' + $(this).attr("value") + '">' + $(this).text() + "</div>";
            $(a).appendTo(".catalogOptions > .content .orderSelect__options")
        }
    })), $(".orderSelect__title").click((function () {
        $(this).next(".orderSelect__options").slideToggle("fast")
    })), $(".catalogFilters input[type='checkbox']").vtexSmartResearch(), $(".orderSelect__options > a").click((function () {
        $(".sub:eq(0) fieldset.orderBy select").val($(this).attr("value")).change()
    })), $(".pager.bottom").appendTo(".catalogOptions:eq(1) .content")
}

function mobile() {
    $('<a href="javascript:void(0)" id="closeFilters"><input class="Xclose" type="radio" id="closeX" checked=""><label class="hambClose" for="closeX"><span class="hambClose-line" id="hambFilter"></span></label></a>').appendTo(".catalogFilters"), $(".catalogOptions:eq(0)").appendTo(".catalogFilters"), $(".catalogOptions:eq(1) .categoriesSelect,.catalogOptions:eq(1) .orderSelect").hide(), $(".catalogProducts .busca-vazio").length || $('<a href="javascript:void(0)" class="btnFilterMobile">Filtrar</a>').insertBefore(".catalogProducts"), $("body").on("click", ".btnFilterMobile", (function () {
        $(".catalogFilters").addClass("active"), $("#closeFilters").click((function () {
            $(".catalogFilters").removeClass("active")
        }))
    })), $(".filterSelect label").click((function () {
        $(".catalogFilters").removeClass("active")
    }))
}
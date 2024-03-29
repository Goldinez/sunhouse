"use strict";

function breadcrumb() {
    vtxctx.departmentName, vtxctx.categoryName
}

function verifyShelf() {
    $(".shelfRecomended li").length < 1 && $(".shelfRecomended").hide()
}

//
function images() {
    function a() {
        var a = setInterval((function () {
            $(".zoomPad #image-main").each((function () {
                if ($(this).attr("src").indexOf("495-495/") > 0) {
                    var b = $(this).attr("src").replace("495-495/", "530-530/");
                    $(this).attr("src", b)
                } else clearInterval(a)
            }))
        }))
    }
    a(), $(".productContent__images .thumbs li a").click((function () {
        a()
    })), $(".thumbs img").each((function () {
        var a = $(this).attr("src").replace("95-95/", "200-200/");
        $(this).attr("src", a)
    }))
}
//

// Modelo display precos antigo - DESABILITADO
function setInfos() {
    function f(a) {
        var b = (q - a).toFixed(2),
            c = (q / 100).toFixed(2);
        v = (b / c).toFixed(0)
    }
    var q = parseFloat(skuJson_0.skus[0].listPriceFormated.replace("R$ ", "").replace(".", "").replace(",", ".")),
        h = parseFloat(skuJson_0.skus[0].bestPriceFormated.replace("R$ ", "").replace(".", "").replace(",", ".")),
        r = "<span class='productContent__infos-price--listprice'>De: <strong>" + skuJson_0.skus[0].listPriceFormated + "</strong></span>";
    $(".productContent__infos-price").html(r + "<span class='productContent__infos-price--bestprice'>Por:</span>"), "R$ 0,00" === $(".productContent__infos-price--listprice strong").text() && ($(".productContent__infos-price--listprice").hide(), q = h), f(h);
    var m = "<div><p>" + skuJson_0.skus[0].bestPriceFormated + '</p> <span>em <strong>10x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
        e = (h - h / 100 * 2).toFixed(2);
    if (f(e), parseFloat(e) >= 1e4) {
        var a;
        (a = e.toString().replace(".", ",")).length > 6 && (a = a.charAt(0) + a.charAt(1) + "." + a.substr(2));
        var i = "<div><p>R$ " + a + '</p> <span>em <strong>6x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
            d;
        f(d = (e - e / 100 * 2).toFixed(2))
    } else {
        var a;
        (a = e.toString().replace(".", ",")).length > 6 && (a = a.charAt(0) + "." + a.substr(1));
        var i = "<div><p>R$ " + a + '</p> <span>em <strong>6x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
            d;
        f(d = (e - e / 100 * 2).toFixed(2))
    }
    if (parseFloat(d) >= 1e4) {
        var b;
        (b = d.toString().replace(".", ",")).length > 6 && (b = b.charAt(0) + b.charAt(1) + "." + b.substr(2));
        var j = "<div><p>R$ " + b + '</p> <span>em <strong>3x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
            g;
        f(g = (d - d / 100 * 3).toFixed(2))
    } else {
        var b;
        (b = d.toString().replace(".", ",")).length > 6 && (b = b.charAt(0) + "." + b.substr(1));
        var j = "<div><p>R$ " + b + '</p> <span>em <strong>3x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
            g;
        f(g = (d - d / 100 * 3).toFixed(2))
    }
    if (parseFloat(g) >= 1e4) {
        var c;
        (c = g.toString().replace(".", ",")).length > 6 && (c = c.charAt(0) + c.charAt(1) + "." + c.substr(2));
        var k, _ = m + i + j + (k = "<div><p>R$ " + c + '</p> <span><strong>no Pix</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>")
    } else {
        var c;
        (c = g.toString().replace(".", ",")).length > 6 && (c = c.charAt(0) + "." + c.substr(1));
        var k, _ = m + i + j + (k = "<div><p>R$ " + c + '</p> <span><strong>no Pix</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>")
    }
    $(".productContent__infos-installment").html(_);
    var s = $(".productContent__images #image img:eq(0)").attr("src"),
        t = (document.domain, window.location);
    $(".productContent__options-socials--pinar a").attr("href", "http://pinterest.com/pin/create/button/?url=" + t + "&media=" + s);
    var u = "OlÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡, seja bem vindo a Sun House. Este ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© o nosso WhatsApp do Atendimento ao Cliente e TeleVendas.\n Por aqui poderÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ tirar dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºvidas sobre produtos que estÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o sendo anunciados em nosso site e fazer o orÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§amento completo de acordo com sua busca.\n Temos mais de 3.000 metros quadrados em nossas lojas e mais de 6.000 produtos para lhe atender!\n EndereÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§os e Telefones: Rua Teodoro Sampaio, 1587 -> 11 - 3082-2044\n Rua Teodoro Sampaio, 1749 -> 11 - 2503-2996\n OUTLET: Rua Doutor Gabriel Covelli, 58, Casa Verde\n VocÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© estava visualizando: " + skuJson_0.name;
    $(".productContent__options-socials--whatsapp a").attr("href", "https://api.whatsapp.com/send?phone=5511994877664&text=" + u), $(".productContent__infos-buyButton .buy-button-ref").text("ADICIONAR AO CARRINHO");
    var v, n, o, w = setInterval((function () {
            if ($(".productContent__infos-freight fieldset > .prefixo").length > 0) {
                $(".frete-calcular").appendTo(".productContent__infos-freight fieldset > .prefixo");
                var a = '<div class="moreQty">+</div>';
                $('<div class="minusQty">-</div>').insertBefore(".productContent__infos-freight fieldset > .quantity > input"), $(a).insertAfter(".productContent__infos-freight fieldset > .quantity > input"), 1 == parseInt($(".quantity > input").val()) && $(".minusQty").addClass("disabled"), $(".freight-zip-box").attr("placeholder", "Informe o CEP"), clearInterval(w)
            }
        })),
        p = "",
        l = "";
    $(".productInfos").text().indexOf("Kilogramas") > -1 ? l = "kg" : $(".productInfos").text().indexOf("Gramas") > -1 && (l = "g"), $(".productContent__images-dimensions--weight strong:last").text($(".lblPesoReal").text().replace(",00", "") + l), 1 == $(".notifyme").is(":visible") && ($(".notifyme-client-name").val("UsuÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡rio"), $(".productContent__infos-price,.productContent__infos-installment").hide()), $(".productContent__infos-similars").find(".outras-cores").length <= 0 && $(".productContent__infos-similars").hide()
}

function qty() {
    $("body").on("click", ".quantity .minusQty", (function () {
        2 == parseInt($(".quantity > input").val()) && $(".minusQty").addClass("disabled"), parseInt($(".quantity > input").val()) > 1 && $(".quantity > input").val(parseInt($(".quantity > input").val()) - 1)
    })), $("body").on("click", ".quantity .moreQty", (function () {
        1 == parseInt($(".quantity > input").val()) && $(".minusQty").removeClass("disabled"), $(".quantity > input").val(parseInt($(".quantity > input").val()) + 1)
    }))
}

function shelfs() {
    $(".shelfRecomended ul,.shelfQCCT ul,.shelfRecents ul").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: !1,
        arrows: !0,
        autoplay: !1
    })
}

function bindEvents() {
    $(".productContent__options-opinions,.productContent__images-dimensions--rating").click((function () {
        $("body,html").animate({
            scrollTop: $("div.opinions").position().top - 104
        })
    }))
}

function setDesigners() {
    $(".productContent__images-flags .flag").each((function () {
        if ($(this).attr("class").indexOf("designer-") >= 0) {
            $(this).addClass("designerFlag");
            var a = $(this).text().split("designer-")[1];
            $(this).wrap('<a href="/designers/' + a + '"></a>'), $(this).css("background-image", 'url("https://sunhouse.vteximg.com.br/arquivos/designer-' + a + '.png")'), $('<a href="/designers/' + a + '" class="productContent__infos-designer"><span class="productContent__infos-designer--photo" style="background-image:url(https://sunhouse.vteximg.com.br/arquivos/designer-' + a + '.png)"></span>Designer: ' + a.replace("-", " ") + "<i></i></a>").insertAfter(".productContent__infos-similars")
        }
    }))
}

function flagsp() {
    $(".productContent__images-flags .flag.black-friday").length > 0 && $(".productContent__images-flags .flag.black-friday").appendTo(".productContent__images-flags"), $(".productContent__images-flags .flag.vitrine-home---lancamento").length > 0 && $(".productContent__images-flags .flag.vitrine-home---lancamento").appendTo(".productContent__images-flags"), $(".productContent__images-flags .flag.designerFlag").length > 0 && $(".productContent__images-flags .flag.designerFlag").parent("a").appendTo(".productContent__images-flags"), $(".productContent__images-flags .flag.pronta-entrega").length > 0 && $(".productContent__images-flags .flag.pronta-entrega").appendTo(".productContent__images-flags"), $(".productContent__images-flags .flag-moveis-sustentaveis").length > 0 && $(".productContent__images-flags .flag-moveis-sustentaveis").appendTo(".productContent__images-flags")
}

function mobile() {
    $(".productContent__images-dimensions").insertAfter(".productContent__infos"), $(".shelfRecomended ul,.shelfQCCT ul,.shelfRecents ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1,
        autoplay: !1
    })
}

$(document).ready((function () {
    if (breadcrumb(), images(), ShippingValue(), bindEvents(), setDesigners(), flagsp(), verifyShelf(), $(".flag.lp-outlet").length > 0) {
        $('<div class="pdpDetalhes"><img src="https://sunhouse.vteximg.com.br/arquivos/pdp-detalhes.png" /></div>').insertAfter(".breadcrumb");
        var a = {
            url: "/api/catalog_system/pub/products/crossselling/similars/" + skuJson.productId,
            method: "GET",
            timeout: 0,
            headers: {
                "Content-Type": "application/json"
            }
        };
        $.ajax(a).done((function (a) {
            a[0].link && $('<a href="' + a[0].link + '" style="display:block;width:335px;height:55px;font-size:18px;font-weight:400;color:#FFF;text-align:center;line-height:55px;background:#E47621;border-radius:4px;margin-top:24px;">VISITAR PRODUTO NOVO</a>}').insertBefore(".productContent__infos-comunication")
        }))
    }
    window.innerWidth < 1200 ? mobile() : shelfs()
})), $(document).ready((function () {
    let btn = document.querySelector(".btnScroll"),
        itn = document.querySelector(".productDescription");
    btn.addEventListener("click", (function () {
        itn.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    }))
})), $(document).ready((function () {
    let btnt = document.querySelector(".btnOpn", ".btnOpnBanner"),
        itnt = document.querySelector(".opinions");
    btnt.addEventListener("click", (function () {
        itnt.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    }))
}));

// Calcula frete automatico ao inserir CEP no input
window.addEventListener("load", function () {
    setTimeout(function () {

        // Para calcular o frete assim que for inserido no input
        $('#txtCep').on('keypress', function () {
            var cepValue = $(this).val().replace(/\D/g, ''); // Remove caracteres não numéricos

            if (cepValue.length === 8) {
                $('#btnFreteSimulacao').click();
                displayGratis();
                setInterval(displayGratis, 3000);
            }
        });

    }, 1000); // 1 segundos de espera
});

// Substitui 'Retirada em SP' por 'Gratis' no display da table de precos de frete
function displayGratis() {
    const elementsWithText = document.querySelectorAll("*:not(script):not(style)");
    
    // Itera através dos elementos para encontrar e substituir o texto
    elementsWithText.forEach(element => {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
            const text = element.childNodes[0].textContent;
            const newText = text.replace("Retirada em SP", "Grátis");
            
            if (newText !== text) {
                element.childNodes[0].textContent = newText;
            }
        }
    });
}

// Montagem Service Fn
//window.addEventListener("load", function () {
    //setTimeout(function () {
        //document.getElementById("btnFreteSimulacao").addEventListener("click", function () {
            //checarCep();
        //});
    //}, 1000); // 1 segundos de espera
//});

// Montagem Service Fn - TESTES
window.addEventListener("load", function () {
    setTimeout(function () {
        var btnFreteSimulacao = document.getElementById("btnFreteSimulacao");
        if (btnFreteSimulacao) {
            btnFreteSimulacao.addEventListener("click", function () {
                checarCep();
            });
        } 
        // Apenas debug:
        //else {
            // Faça outra coisa aqui, caso o elemento não exista
            //console.log("O elemento btnFreteSimulacao não foi encontrado.");
        //}
    }, 1000); // 1 segundo de espera
});
// Montagem Service Fn - TESTES

function checarCep() {
    var cep = document.getElementById("txtCep").value;
    var cepNumerico = cep.replace(/\D/g, ''); // Remove não números do CEP
    cepNumerico = parseInt(cepNumerico); // Converte para número inteiro

    const montagemBlock = document.getElementById("openService");
    
    const montagemInfo = document.getElementById("productMontagem-info");

    // Verifica se o CEP está nas faixas especificadas
    if ((cepNumerico >= 1000000 && cepNumerico <= 5999999 && montagemBlock) ||
        (cepNumerico >= 8000000 && cepNumerico <= 8499999 && montagemBlock)) {
        montagemInfo.classList.add("montagem_show");
    } else {
        montagemInfo.classList.remove("montagem_show");
    }
}
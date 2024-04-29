function fnAddtoCart() {
    $("body").on("click", "#wishlist__add-to-cart", (function (a) {
        a.preventDefault();

        // Variavel que captura o id do produto de algum elemento alvo
        //var skuId = $(this).parents(".shelfProduct").attr("data-id");
        var skuId = $(this).parents(".giftlistsku-input-wishedamt").attr("name");
        
        // Bloco adiciona ao carrinho Vtex
        $.ajax({
            url: "/api/catalog_system/pub/products/search/?fq=productId:" + skuId,
            method: "GET",
            timeout: 0,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).done((function (a) {
            var skuId = {
                id: a[0].items[0].itemId,
                quantity: 1,
                seller: "1"
            };
            vtexjs.checkout.addToCart([skuId], null, 1).done((function (a) {
                toastr.options = {
                    closeButton: !0,
                    debug: !1,
                    newestOnTop: !1,
                    progressBar: !0,
                    positionClass: "toast-top-center",
                    preventDuplicates: !1,
                    onclick: null,
                    showDuration: "500",
                    hideDuration: "1000",
                    timeOut: "5000",
                    extendedTimeOut: "0",
                    showEasing: "swing",
                    hideEasing: "linear",
                    showMethod: "fadeIn",
                    hideMethod: "fadeOut"
                }, toastr.success("Produto adicionado ao carrinho!")
            }))
        }))
    }))
}
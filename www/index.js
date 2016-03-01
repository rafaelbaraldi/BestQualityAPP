$(function(){


    // Carrega os produtos mais populares
    requestClientes();

    function requestClientes(){

        // Executa ajax
        $.ajax({
            url: "http://www.mocky.io/v2/56d58b4b1000005a0d4afdcd",
            type: "GET",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(data){

                console.log(data);

                for(i in data){

                    var cliente = data[i];

                    console.log(cliente);
                    console.log(cliente.nome);

                    $("#divSwiper").html($("#divSwiper").html() + "<div class=\"swiper-slide swiper-container-h\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide\">" + cliente.nome + "</div><div class=\"swiper-slide\">Informações do cliente 1</div><div class=\"swiper-slide\">Promoções  do cliente 1</div><div class=\"swiper-slide\">Mapa do cliente 1</div></div><div class=\"swiper-pagination swiper-pagination-h\"></div></div>");

                }
            }
        });
    }
});

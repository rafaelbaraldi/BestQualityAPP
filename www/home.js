$(function(){


    // Carrega os produtos mais populares
    requestClientes();

    function requestClientes(){

        // Executa ajax
        $.ajax({
            url: "http://demo3007992.mockable.io/retornaClientes",
            type: "GET",
            success: function(data){

                console.log(data);

                for(i in data){

                    var cliente = data[i];

                    console.log(cliente);
                    console.log(cliente.nome);
                    console.log(cliente.URLImagem);

                    // $("#divSwiper").html($("#divSwiper").html() + "<div class=\"swiper-slide swiper-container-h\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide\">" + cliente.nome + "</div><div class=\"swiper-slide\">Informações do cliente 1</div><div class=\"swiper-slide\">Promoções  do cliente 1</div><div class=\"swiper-slide\">Mapa do cliente 1</div></div><div class=\"swiper-pagination swiper-pagination-h\"></div></div>");


                    $("#divSwiper").append("<div class=\"swiper-slide swiper-container-h\" style=\"background-color:" + cliente.cor + "\">" +
                    "<div class=\"swiper-wrapper\" style=\"background-color:" + cliente.cor + "\">" +
                        "<div class=\"swiper-slide\" style=\"background-color:" + cliente.cor + "\">" +
                            "<img src=\"" + cliente.URLImagem + "\">" +
                        "</div>" +
                        "<div class=\"swiper-slide\" style=\"background-color:" + cliente.cor + "\">Informações do cliente 1</div>" +
                        "<div class=\"swiper-slide\" style=\"background-color:" + cliente.cor + "\">Promoções  do cliente 1</div>" +
                        "<div class=\"swiper-slide\">" +
                            "<div id=\"map" + i + "\"></div>" +
                        "</div>" +
                    "</div>" +
                    "<div class=\"swiper-pagination swiper-pagination-h\" style=\"background-color:" + cliente.cor + "\"></div>" +
                "</div>");

                    initMap(i, cliente.latitude, cliente.longitude);
                }


                //  Initialize Swiper
                var swiperH = new Swiper('.swiper-container-h', {
                    pagination: '.swiper-pagination-h',
                    paginationClickable: true,
                    spaceBetween: 50
                });
                var swiperV = new Swiper('.swiper-container-v', {
                    pagination: '.swiper-pagination-v',
                    paginationClickable: true,
                    direction: 'vertical',
                    spaceBetween: 50
                });

                initMap("", -23.6570978, -46.6916158);
                // initMap(0, -23.6570978, -46.6916158);
            }
        });
    }

    function initMap(i, lat, lng) {
        var mapDiv = document.getElementById('map' + i);
        var myLatLng = {lat: lat, lng: lng};
        var map = new google.maps.Map(mapDiv, {
          center: myLatLng,
          zoom: 15
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });

        google.maps.event.trigger(map, 'resize'); 
    }
});

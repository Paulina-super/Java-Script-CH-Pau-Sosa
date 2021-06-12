const RenderproductList = (prodList) => {
    $('#prod').html('');
    $.getJSON("productos.json", function(data) {
        var productsToRender = [];
        $.each(data, function(key, productos) {
            productsToRender.push(`<div class="card" id=${"card-product-" + productos.id
        } style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${productos.nombre}</h5>
              <h6 class="card-title">${productos.cantidad}</h6>
              <p>Precio:${productos.precio}</p>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>`);
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });

};
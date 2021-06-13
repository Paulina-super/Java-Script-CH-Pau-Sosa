const RenderProductList = (prodList) => {
    $('#prod').html('');

    let productoTexto = LocalItem(LocalStorageGlobalVariables.Todos_Productos);

    let productosJSON = ConvertorJson(productoTexto);

    let productsToRender = [];
    $.each(productosJSON, function(key, productos) {
        productsToRender.push(ProductCard(productos));
    });

    $('#prod').html(productsToRender);
};
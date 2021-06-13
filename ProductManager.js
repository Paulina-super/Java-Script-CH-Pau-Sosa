const AgregarProducto = (idProducto) => {
    let productoTexto = LocalItem(LocalStorageGlobalVariables.Todos_Productos);
    let productosJSON = ConvertorJson(productoTexto);

    let productoAjuste = productosJSON.findIndex((p) => p.id == idProducto);
    productosJSON[productoAjuste].cantidad -= 1;
    productoTexto = ConvertorString(productosJSON);
    LocalItem(LocalStorageGlobalVariables.Todos_Productos, productosJSON);
    RenderProductList();
    let productToCart = productosJSON.find(p => p.id = idProducto)



};
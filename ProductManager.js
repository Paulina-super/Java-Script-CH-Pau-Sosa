const AgregarProducto = (idProducto) => {
    let productoTexto = LocalItem(LocalStorageGlobalVariables.Todos_Productos);
    let productosJSON = ConvertorJson(productoTexto);

    let productoAjuste = productosJSON.findIndex((p) => p.id == idProducto);
    productosJSON[productoAjuste].cantidad -= 1;
    let productoTexto = ConvertorJson(productosJSON);
    LocalItem(LocalStorageGlobalVariables.Todos_Productos, productosJSON);

};
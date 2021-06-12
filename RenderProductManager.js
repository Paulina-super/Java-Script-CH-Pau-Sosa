const RenderProductList = (prodList) => {
    $('#prod').html("");
    let productoTexto = LocalItem(LocalStorageGlobalVariables.Todos_Productos)
    let productosJSON = ConvertorJson(productoTexto);
    $('#prod').html(productosJSON);
};
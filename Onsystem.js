const Init = () => { LoadDataBaseFromJSON(); }
const LoadDataBaseFromJSON = () => {
    $.getJSON("productos.json", function(productos) {
        let productosJASON = ConvertorString(productos)
        SetLocal(LocalStorageGlobalVariables.Todos_Productos, productosJASON);
    });
};
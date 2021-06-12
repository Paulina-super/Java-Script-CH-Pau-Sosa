/* EJERCICIOS ENTREGA CLASES 1 Y 2 JUNTOS*/

/* EJERCICIOS ENTREGA CLASES 3 Y 4: Calcular valor final de un producto seleccionado en función de impuestos y descuentos.*/
/*var iva = 1.21;
var ganancias = 1.03;
var limite = 50000;
let importe = prompt("Ingrese importe");
let total = importe * iva;
let final = total * ganancias;
console.log("Importe total $" + total);


if (total > limite) {
    alert("Sumar impuesto a las ganancias");
    console.log("Total final con impuesto a las ganancias $" + final);
} else {
    alert("No sumar impuesto a las ganancias");
    console.log("Total final sin impuesto a las ganancias $" + total);
}*/


/*Ejercicios Clases 5 y 6 y Pre Entrega Final: Calculador de Costos de Importación*/


var areaPreferencia = "Mercosur";
var areaNoPreferencia = ["Union Europea", "China", "Estados Unidos"]
var iva = 1.21;
let valorUnitario = prompt("Ingrese valor unitario del bien");
let cantidad = prompt("Ingrese cantidad total");
let total = valorUnitario * cantidad;
let final = total * iva;

class Bien {
    constructor(descripcion, codigo, origen, tipoDeDestinacion) {
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.origen = origen;
        this.tipoDeDestinacion = tipoDeDestinacion;
    }
    Arancel() {
        console.log("${this.origen} determina el % de arancel")
    }
}

var Tenedores = new Bien("Tenedores de acero", "08.25", "Mercosur", "Consumo")

if (origen = areaPreferencia) {
    alert("Arancel 0%");
} else {
    alert("Arancel 35%");
}


let pau = prompt("como estas de humor?");
/*  ||     let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
*/
class Carrito {
    constructor(producto, codigo, precio) {
        this.producto = producto;
        this.codigo = codigo;
        this.precio = precio;

    }
}
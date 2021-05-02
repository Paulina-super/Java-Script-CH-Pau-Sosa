/* EJERCICIOS ENTREGA CLASES 1 Y 2 JUNTOS*/

/* EJERCICIOS ENTREGA CLASES 3 Y 4: Calcular valor final de un producto seleccionado en función de impuestos y descuentos.*/
var iva = 1.21;
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
}
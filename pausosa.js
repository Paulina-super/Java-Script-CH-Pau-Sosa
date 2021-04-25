/* EJERCICIOS ENTREGA CLASES 1 Y 2 JUNTOS*/
var iva = 1.21;
var ganancias = 1.03;
var limite = 50000;
let importe = prompt("Ingrese importe");
let total = importe * iva;
console.log("Importe total $" + total);

if (total > limite) {
    alert("Sumar impuesto a las ganancias");
}
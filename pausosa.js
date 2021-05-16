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


/*Ejercicios y Pre entrega: Calculador de Costos de Importación*/



var areaPreferencia = Mercosur;
var areaNoPreferencia = [UnionEuropea, China, EstadosUnidos]
var iva = 1.21;
var iibb = 1.03;
let valorUnitario = prompt("Ingrese valor unitario del bien");
let cantidad = prompt("Ingrese cantidad total");
let total = valorUnitario * cantidad;
let final = total * iva * ganancias;

class Bien {
    constructor(descripcion, codigo, origen, tipoDeBien) {
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.origen = origen;
        this.tipoDeBien = tipoDeBien;
    }
    Arancel(origen = areaNoPreferencia => "Arancel 35%") {
        console.log("${this.nombre} esta registrado")
    }
}

var Tenedores = new Bien("Tenedores de acero", "08.25", "China", "Consumo")




for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if (i == 5) {
        break;
    }
    alert(i);
}
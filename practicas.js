 let numeros = [1, 2, 3, 4, 5]

 /*numeros.find(numeroActual => numeroActual > 3)*/
 /*find encuentra al primer numero mas cercano que cumple la condicion*/
 /*numeros.filter(numeroActual => numeroActual > 3)*/
 /*filter devuelve un array de lo que estemos filtrando*/

 /*numeros.forEach(numeroActual => console.log(numeroActual))*/

 /* var palabras = [hola, como, va]

  palabras.join()

  numeros.map(numeroActual => numeroActual * 25)
  numeros.indexOf(4)*/
 var reducer = (acumulador, valor) => acumulador / 100 + valor
 numeros.reduce(reductora)

 var sumaV2 = (n1, n2) => n1 + n2

 numeros.reduce((acumulador, valor) => acumulador + valor)

 var persona = { nombre: "paula", apellido: "sosa", edad: 31 }
 for (var propiedad in persona) { console.log(propiedad, persona[propiedad]) }
 /*for in recorre propiedades de un abjeto*/
 /* typeof para saber que tipo de objeto es*/

 for (var valor of numeros) {
     console.log(valor)
 }

 /*for of recorre los objetos de un array*/

 paula.toUpperCase()
 paula.toLowerCase()


 var nombre = "pedro"
 var edad = 40
 var direccion = "laprida 696"

 nombre + " " + edad + " " + direccion

 nombre.slice(0, 3)
 nombre.substr(-5, nombre.lenght)

 var persona = {
         nombre: "pau",
         apellido: "sosa",
         edad: 31,
         hablar: function() { console.log(this.nombre) },
         atributos: { velocidad: 10, fuerza: 20, }
     }
     /*molde para repetir variables:clase*/

 class PersonaClase {
     constructor(nombre, apellido, edad) {
         console.log("el constructor es el primero que se ejecuta")
         this.nombre = nombre;
         this.apellido = apellido;
         this.edad = edad;
     }
     hablar() {
         console.log("${this.nombre} esta hablando")
     }
 }
 var Paula = new PersonaClase("Paula", "Sosa", 31)



 class Empleados {
     constructor(nombre, apellido, cuil) {
         console.log("el constructor es el primero que se ejecuta")
         this.nombre = nombre;
         this.apellido = apellido;
         this.cuil = cuil;
     }
     hablar() {
         console.log("${this.nombre} esta registrado")
     }
 }
 var Paula = new Empleados("Paula", "Sosa", 27345645867)

 class Animal {
     constructor(nombre) {
         this.nombre = nombre;

     }
     hablar() {
         console.log(`${this.nombre} esta hablando`)
     }
 }
 var gatito = new Animal("Bebes")



 class Leon extends Animal {}

 var alex = new Leon("Alex")

 /*la nueva clase puede agregar modificaciones a la herencia*/

 class Animal {
     constructor(nombre) {
         this.nombre = nombre;
     }

     hablar() {
         console.log(`${this.nombre} esta hablando`)
     }
 }
 //como extender propiedades y metodos de una clase
 class Leon extends Animal {
     constructor(nombre) {
         super(nombre); //Siempre usar super cuando necesitamos ejecutar el constructor de quiene extendemos
         this.tieneMelena = true;
     }

     atacar() { console.log(`${this.nombre} esta atacando`) }
 }
 /*localStorage
 Storage {length: 0}
 localStorage.setItem("username", "pausosa")
 undefined
 localStorage.getItem("username")
 "pausosa"*/
 /* sessionStorage.setItem()
/*siempre devuelven un string*/




 localStorage
 Storage  { length: 0 }
 length: 0 __proto__: Storage
 localStorage.setItem("user", JSON.stringify({ username: "", islog: false, lastLogin: undefined }))
 undefined
 localStorage
 Storage  {
     user: "{"
     username ":"
     ","
     islog ":false}",
     length: 1
 }
 JSON.parse(localStorage.getItem("user")) { username: "", islog: false }
 `´
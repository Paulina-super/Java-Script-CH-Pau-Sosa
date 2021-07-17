const nombreInput = document.querySelector('#nombre');
const dniInput = document.querySelector('#dni');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const aclaracionesInput = document.querySelector('#aclaraciones');

const formulario = document.querySelector('#nuevo-turno');
const contenedorAsignado = document.querySelector('#asignado');


class Turnos {
    constructor() {
        this.turnos = [];
    }
    agregarTurnos(turno) {/*verificar que no se repitan los turnos*/
        this.turnos = [...this.turnos, turno];
    }
}
/*CAMBIAR NOMBRE CLASS*/
class Ver {
    imprimirAlerta(mensaje, tipo) {
        this.borrarAlertas();
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'col-12');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.textContent = mensaje;

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.turnos'));

    }
    borrarAlertas(){$(".alert").remove()}
    mostrarTurno(nuevoTurno){
        const liTurno= document.createElement('li');
        liTurno.classList.add("nombre","dni","telefono","fecha","hora","aclaraciones");
        document.querySelector("#asignado").append(liTurno);
    }

}
const ver= new Ver();
const turnera=new Turnos();

eventListeners();

function eventListeners() {
    nombreInput.addEventListener('input', datosTurno);
    dniInput.addEventListener('input', datosTurno);
    telefonoInput.addEventListener('input', datosTurno);
    fechaInput.addEventListener('input', datosTurno);
    horaInput.addEventListener('input', datosTurno);
    aclaracionesInput.addEventListener('input', datosTurno);
    formulario.addEventListener('submit', nuevoTurno);
}

const turnoObj = {
    nombre: '',
    dni: '',
    telefono: '',
    fecha: '',
    hora: '',
    aclaraciones: ''
}

function datosTurno(e) {
    turnoObj[e.target.name] = e.target.value;
}

function nuevoTurno(e) {
    e.preventDefault();
    let turno= Object.assign({},turnoObj)
    const { nombre, dni, telefono, fecha, hora, aclaraciones } = turno;
    if (nombre === '' || dni === '' || telefono === '' || fecha === '' || hora === '' || aclaraciones === '') {
        ver.imprimirAlerta('Todos los campos son obligatorios', 'error')
    }else{
        turno.id = Date.now();
        turnera.agregarTurnos(turno);
        ver.borrarAlertas();
        ver.mostrarTurno(turno);
    }
}

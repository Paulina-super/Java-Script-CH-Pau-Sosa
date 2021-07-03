const nombreInput = document.querySelector('#nombre');
const dniInput = document.querySelector('#dni');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const aclaracionesInput = document.querySelector('#aclaraciones');

const fomulario = document.querySelector('#nuevo-turno');
const contenedorAsignado = document.querySelector('#asignado');


class Turnos {
    constructor() {
        this.turnos = [];
    }
    agregarTurnos(turno) {
        this.turnos = [...this.turnos, turno];
    }
}

class Ver {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'col - 12 ');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.textContent = mensaje;

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.turnos'));

    }
}
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

function nuevoturno(e) {
    e.preventDefault();
    const { nombre, dni, telefono, fecha, hora, aclaraciones } = turnoObj;
    if (nombre === '' || dni === '' || telefono === '' || fecha === '' || hora === '' || aclaraciones === '') {
        ver.imprimirAlerta('Todos los campos son obligatorios', 'error')

        return;
    }
}

turnoObj.id = Date.now();

administrarTurnos.agregarTurnos(turnoObj);
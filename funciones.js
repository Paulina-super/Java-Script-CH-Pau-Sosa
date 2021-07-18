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
        this.turnos = JSON.parse(localStorage.getItem("turnos") || "[]");
    }
    agregarTurnos(turno) {
      this.validarTurno(turno);
      this.turnos = [...this.turnos, turno];
      localStorage.setItem("turnos", JSON.stringify(this.turnos));
    }
    validarTurno(turno) {
      // que no se repitan los turnos
      // que no se puedan sacar turnos para atrás
      // que los turnos sean cada 15 minutos
      // que no se pueda sacar turno fuera de horario 9:00 a 20:00

      for (let i = 0; i < this.cantidadTurnos(); i++) {
        if (this.turnos[i].dni == turno.dni) {
            throw "Ya hay un turno para este DNI";
        }
      }
    }
    cantidadTurnos(){
        return this.turnos.length;
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
    borrarAlertas(){
        $(".alert").remove()
    }
    mostrarTurnos(turnera){
        $(".turno").remove()
        for (let i = 0; i < turnera.cantidadTurnos(); i++){
            const nuevoTurno= turnera.turnos[i]
            const divTurno= document.createElement('div');
            divTurno.classList.add('turno');
            document.querySelector("#asignado").append(divTurno);
            const hTitulo= document.createElement('h3');
            hTitulo.textContent= "Turno " + nuevoTurno.id;
            divTurno.append(hTitulo);
            const ulTurno = document.createElement('ul');
            divTurno.append(ulTurno);
            const liNombre= document.createElement('li');
            liNombre.textContent= "Nombre: " + nuevoTurno.nombre;
            ulTurno.append(liNombre);
            const liDni= document.createElement('li');
            liDni.textContent= "DNI: " + nuevoTurno.dni;
            ulTurno.append(liDni);
            const liTelefono= document.createElement('li');
            liTelefono.textContent= "Teléfono: " + nuevoTurno.telefono;
            ulTurno.append(liTelefono);
            const liFecha= document.createElement('li');
            liFecha.textContent= "Fecha: " + nuevoTurno.fecha;
            ulTurno.append(liFecha);
            const liHorario= document.createElement('li');
            liHorario.textContent= "Horario: " + nuevoTurno.hora;
            ulTurno.append(liHorario);
            const liAclaraciones= document.createElement('li');
            liAclaraciones.textContent= "Aclaraciones: " + nuevoTurno.aclaraciones;
            ulTurno.append(liAclaraciones);
        }
    }

}
const ver= new Ver();
const turnera=new Turnos();
ver.mostrarTurnos(turnera);

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
        try {
          turno.id = turnera.cantidadTurnos()+1;
          turnera.agregarTurnos(turno);
          ver.borrarAlertas();
          ver.mostrarTurnos(turnera);
        } catch (e) {
          ver.imprimirAlerta(e, "error");
        }
    }
}


const nombreInput = document.querySelector('#nombre');
const dniInput = document.querySelector('#dni');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const aclaracionesInput = document.querySelector('#aclaraciones');

const formulario = document.querySelector('#nuevo-turno');


class Turnos {
    constructor() {
        this.turnos = JSON.parse(localStorage.getItem("turnos") || "[]");
    }
    agregarTurnos(turno) {
      this.acomodarHora(turno);
      this.limpiarTurnos();
      this.validarTurno(turno);
      this.turnos = [...this.turnos, turno];
      localStorage.setItem("turnos", JSON.stringify(this.turnos));
    }
    acomodarHora(turno) {
      let partes = turno.hora.split(":");
      let h = partes[0];
      let m = partes[1];
      while (m % 15 != 0) { m--; }
      turno.hora = h + ":" + m;
    }
    limpiarTurnos() {
      let turnosValidos = [];
      for (let i = 0; i < this.cantidadTurnos(); i++) {
        let turno = this.turnos[i];
        if (!this.esAnteriorAFechaActual(turno)) {
          turnosValidos.push(turno);
        }
      }
      this.turnos = turnosValidos;
    }
    validarTurno(turno) {
      // que no se puedan sacar turnos para atrás
      if (this.esAnteriorAFechaActual(turno)) {
        throw "No se pueden pedir turnos en el pasado";
      }

      for (let i = 0; i < this.cantidadTurnos(); i++) {
        // que no se pueda sacar más de un turno para la misma persona
        if (this.turnos[i].dni == turno.dni) {
            throw "Ya hay un turno para este DNI";
        }

        // que no se repitan los turnos
        if (this.turnos[i].fecha == turno.fecha && this.turnos[i].hora == turno.hora) {
            throw "Este horario ya fué asignado a otro paciente";
        }
      }
    }
    esAnteriorAFechaActual(turno) {
      let fechaTurno = new Date(turno.fecha + "T" + turno.hora);
      let fechaActual = new Date();
      return fechaTurno < fechaActual;
    }
    cantidadTurnos(){
        return this.turnos.length;
    }
}

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
    mostrarTurno(nuevoTurno){
        this.borrarAlertas();

        const divTurno = document.createElement('div');
        divTurno.classList.add('text-center', 'alert', 'col-12', 'alert-info');
        document.querySelector('#contenido').insertBefore(divTurno, document.querySelector('.turnos'));

        const hTitulo= document.createElement('h3');
        hTitulo.textContent= "Turno " + nuevoTurno.id;
        divTurno.append(hTitulo);
        const divNombre= document.createElement('div');
        divNombre.textContent= "Nombre: " + nuevoTurno.nombre;
        divTurno.append(divNombre);
        const divDni= document.createElement('div');
        divDni.textContent= "DNI: " + nuevoTurno.dni;
        divTurno.append(divDni);
        const divTelefono= document.createElement('div');
        divTelefono.textContent= "Teléfono: " + nuevoTurno.telefono;
        divTurno.append(divTelefono);
        const divFecha= document.createElement('div');
        divFecha.textContent= "Fecha: " + nuevoTurno.fecha;
        divTurno.append(divFecha);
        const divHorario= document.createElement('div');
        divHorario.textContent= "Horario: " + nuevoTurno.hora;
        divTurno.append(divHorario);
        const divAclaraciones= document.createElement('div');
        divAclaraciones.textContent= "Aclaraciones: " + nuevoTurno.aclaraciones;
        divTurno.append(divAclaraciones);
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
        try {
          turno.id = turnera.cantidadTurnos()+1;
          turnera.agregarTurnos(turno);
          ver.borrarAlertas();
          ver.mostrarTurno(turno);
          formulario.reset()
        } catch (e) {
          ver.imprimirAlerta(e, "error");
        }
    }
}


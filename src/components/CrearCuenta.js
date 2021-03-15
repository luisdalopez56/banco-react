import { CrearClienteFetch } from '../helpers/CrearClienteFetch'
import { CrearCuentaFetch } from '../helpers/CrearCuentaFetch'


export const CrearCuenta = ({ setVerCrearCuenta, setDatosNuevaCuenta }) => {

function crearCuenta(){

    let iban = document.getElementById('numero').value;
    let dni = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let direccion = document.getElementById('direccion').value;
    let localidad = document.getElementById('localidad').value;
    let fNacimiento = document.getElementById('fNacimiento').value;

    let saldo = document.getElementById('saldo').value;
    let interesAnual = document.getElementById('interesAnual').value;

    CrearClienteFetch(iban, dni, nombre, apellidos, direccion, localidad, fNacimiento)
    .then((res) => {
        console.log(res.message);
        CrearCuentaFetch(iban,dni,saldo,interesAnual)
        .then((res) => {
            alert("Cuenta creada")
            setVerCrearCuenta(false);
            window.location.reload();

        })
    })

}

    return (
        <div>
            <h3>Crear cuenta</h3>
            <label >Numero de cuenta:</label>
            <input type="text" id="numero" /><br></br>
            <label >DNI:</label>
            <input type="text" id="dni" /><br></br>
            <label >Nombre:</label>
            <input type="text" id="nombre" /><br></br>
            <label >Apellidos:</label>
            <input type="text" id="apellidos" /><br></br>
            <label >Direccion:</label>
            <input type="text" id="direccion" /><br></br>
            <label >Localidad:</label>
            <input type="text" id="localidad" /><br></br>
            <label >Fecha de Nacimiento:</label>
            <input type="date" id="fNacimiento" /><br></br>
            <label >Saldo:</label>
            <input type="text" id="saldo" /><br></br>
            <label >Interés Anual:</label>
            <input type="text" id="interesAnual" /><br></br>

            <button  onClick={() => crearCuenta()} id="create">Crear Cuenta</button>
            {/* <button type="submit" onclick="location.reload()" id="back">Volver</button> */}
            <button onClick={() => setVerCrearCuenta(false)} >Volver</button>

        </div>
    )
}
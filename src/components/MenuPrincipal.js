import { CargarCuentaFetch } from '../helpers/CargarCuentaFecth'
import { CrearNuevoMovimientoFetch } from '../helpers/CrearNuevoMovimientoFetch'
import { ActualizarSaldoFetch } from '../helpers/ActualizarSaldoFetch'
import { VerMovimientosFetch } from '../helpers/VerMovimientosFetch'
import { EliminarCuentaFetch } from '../helpers/EliminarCuentaFetch'

import React, { useState } from 'react'

import { VerMovimientos } from './VerMovimientos'
import { VerDatosCuentaBancaria } from './VerDatosCuentaBancaria'
import { CrearCuenta } from './CrearCuenta'

export const MenuPrincipal = ({ cuentas }) => {

    const [datoscuenta, setDatosCuenta] = useState('');
    const [verDatosCuenta, setVerDatosCuenta] = useState(false);

    const [verRojos, setVerRojos] = useState(false);
    const [mensajeRojos, setEnRojosMensaje] = useState(false);
    const [cuentaRojosSeleccionada, setcuentaRojosSeleccionada] = useState('');

    const [verMovimientos, setVerMovimientos] = useState(false);
    const [movimientosCuenta, setMovimientosCuenta] = useState(false);

    const [verCrearCuenta, setVerCrearCuenta] = useState(false);
    const [datosNuevaCuenta, setDatosNuevaCuenta] = useState('');


    function crearCuenta(nuevaCuenta) {

    }

    function cambiarVerDatos(iban) {
        CargarCuentaFetch({ iban })
            .then((data) => {

                setDatosCuenta((data.message))
                setVerDatosCuenta(true);
            })

    }

    function ingresarDinero(iban) {
        let cantidad = prompt("Inserta la cantidad a ingresar");
        let tipo = "ingreso";
        CrearNuevoMovimientoFetch({ iban, cantidad, tipo })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.message);
                    ActualizarSaldoFetch({ iban, cantidad })
                        .then((res) => {
                            if (res.status === 200) {
                                alert("Ingreso realizado");
                            }
                        })
                }
            })


    }

    function reintegroDinero(iban) {
        let cantidad = "-" + prompt("Inserta la cantidad a retirar");
        console.log(cantidad);
        let tipo = "reintegro";
        CrearNuevoMovimientoFetch({ iban, cantidad, tipo })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.message);
                    ActualizarSaldoFetch({ iban, cantidad })
                        .then((res) => {
                            if (res.status === 200) {
                                alert("Retirada realizada");
                            }
                        })
                }
            })
    }

    function enRojos(iban) {
        CargarCuentaFetch({ iban })
            .then((data) => {
                // setDatosCuenta((data.message));
                console.log(data.message.saldo);
                setVerRojos(true);
                setcuentaRojosSeleccionada(iban)
                // console.log(cuentaRojosSeleccionada);
                if (data.message.saldo < 0) {
                    setEnRojosMensaje("La cuenta tiene un saldo negativo, " + data.message.saldo)
                } else {
                    setEnRojosMensaje("La cuenta tiene un saldo positivo, " + data.message.saldo)
                }
            })
    }

    function ingresoInteres(iban, interesAnual, saldo) {
        console.log(iban, interesAnual, saldo);

        let cantidad = (saldo * interesAnual) / 12;

        let tipo = "intereses";
        CrearNuevoMovimientoFetch({ iban, cantidad, tipo })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.message);
                    ActualizarSaldoFetch({ iban, cantidad })
                        .then((res) => {
                            if (res.status === 200) {
                                alert("Ingreso mensual realizado");
                            }
                        })
                }
            })
    }

    function verMovimientosCuenta(iban) {

        VerMovimientosFetch({ iban })
            .then((res) => {
                if (res.status == 500) {
                    alert("Esta cuenta no tiene movimientos")
                } else {
                    setMovimientosCuenta(res.message);
                    setVerMovimientos(true);
                    setVerDatosCuenta(false);
                }


            })

    }

    function addCuenta() {
        setVerCrearCuenta(true)
    }

    function eliminarCuenta(iban) {
        let eliminar = window.confirm("¿Quieres eliminar esta cuenta?");
        if (eliminar == true) {
            EliminarCuentaFetch(iban)
                .then((res) => {
                    if(res.status == 200){
                        alert("Cuenta eliminada correctamente");
                        window.location.reload();
                    }
                })
        }


    }

    return (
        <div>
            <h1>Cuentas Bancarias</h1>
            <p> -- Luis David López Uceda 2º DAW -- </p>

            { (verMovimientos === false && verCrearCuenta === false) &&
                <div style={{ textAlign: "start", marginLeft: "15%" }}>
                    <button id="datos" onClick={() => addCuenta()} >Añadir nueva cuenta</button>
                </div>
            }
            <div id="cuentaVista" style={{ width: "100%" }}>



                {(cuentas !== '' && verMovimientos === false && verCrearCuenta === false) && <ul>
                    {cuentas.map((value, index) => {
                        return (
                            <div id="show" key={value} style={{ border: "1pt solid" }}>N.Cuenta <b>{value.iban}</b>
                                <div>
                                    <button id="datos" onClick={() => cambiarVerDatos(value.iban)}>Datos</button>
                                    <button id="ingreso" onClick={() => ingresarDinero(value.iban)}>Ingresar cantidad</button>
                                    <button id="reintegrar" onClick={() => reintegroDinero(value.iban)}>Reintegro</button>
                                    <button id="enRojos" onClick={() => enRojos(value.iban)}>En rojos</button>
                                    <button id="ingresoInteres" onClick={() => ingresoInteres(value.iban, value.interesAnual, value.saldo)}>Ingreso interés</button>
                                    <button id="verMovimientos" onClick={() => verMovimientosCuenta(value.iban)}>Ver movimientos</button>

                                    <button id="eliminarCuenta" onClick={() => eliminarCuenta(value.iban)} style={{ color: "red" }}>Eliminar cuenta</button>

                                    {(cuentaRojosSeleccionada === value.iban && verRojos === true && mensajeRojos !== '') && <p> <b>{mensajeRojos}</b></p>}

                                    {((datoscuenta !== '' && datoscuenta.iban === value.iban) && verDatosCuenta == true) && <VerDatosCuentaBancaria {...datoscuenta} />}

                                </div>
                            </div>


                        )
                        //  <button id="datos" onClick={this.handleClick()}>Datos</button>   
                    })}
                </ul>}
                {verMovimientos === true && <VerMovimientos movimientos={movimientosCuenta} setVerMovimientos={setVerMovimientos} />}
                {verCrearCuenta === true && <CrearCuenta setDatosNuevaCuenta={setDatosNuevaCuenta} setVerCrearCuenta={setVerCrearCuenta} />}


            </div>
        </div>
    )
}
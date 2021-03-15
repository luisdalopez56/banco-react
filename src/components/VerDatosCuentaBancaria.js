import React, { useState } from 'react'
import { CargarDatosClienteFetch } from '../helpers/CargarDatosClienteFetch'


export const VerDatosCuentaBancaria = ({ dni, iban, interesAnual, saldo }) => {

    // console.log(datosCuenta);
    const [datosCliente, setDatosCliente] = useState('');

    /* console.log(dni);
    console.log(iban); */

    if (datosCliente === '') {
        cargarDatosCliente();
    }

    function cargarDatosCliente() {
        CargarDatosClienteFetch({ dni })
            .then((data) => {
                setDatosCliente(data.message);
            })
    }


    return (
        <p>
            La cuenta <b>{iban}</b>,
    del titular <b>{datosCliente.nombre} {datosCliente.apellidos}</b>,
    residente en <b>{datosCliente.direccion}, {datosCliente.localidad} </b>
    y con fecha de nacimiento de <b>{datosCliente.fNacimiento}</b> tiene
    un saldo de <b> {saldo}</b> y
    un interés anual de <b> {interesAnual}</b> %.
        </p>
    )
}
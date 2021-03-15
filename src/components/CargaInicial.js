import { CargarCuentasFetch } from '../helpers/CargarCuentasFetch'

export const CargaInicial = ({ setCuentas }) => {

    window.onload = CargarCuentasFetch()
        .then(data => {
            setCuentas(data.message)
        });


    return ( 
        <div>
        <p> Cargando... </p> 
        </div>
    )
}
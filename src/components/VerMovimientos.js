export const VerMovimientos = ({ movimientos, setVerMovimientos,iban }) => {

    return (
        <div>
            <h2>Lista de movimientos </h2>
            <p>Numero de cuenta: <b>{movimientos[0].iban}</b></p>
            <button id="volver" onClick={() => setVerMovimientos(false)}>Volver</button>
            {movimientos &&
                <ul>
                    { 
                    movimientos.map((value, index) => {
                        return(
                            <p id="movimiento" key={index} style={{textAlign: "start"}}> <b> {value.tiempo} </b> |{value.tipo.toUpperCase()}| Cantidad: {value.cantidad}</p>
                        )
                    })
                    }
                </ul>
            }

        </div>

    )
}
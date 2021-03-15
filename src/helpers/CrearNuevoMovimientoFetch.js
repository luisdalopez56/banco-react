const PHP_BASE = 'http://localhost:8000/src/php/'

export const CrearNuevoMovimientoFetch = async({ cantidad, iban, tipo }) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("iban", iban);
    urlencoded.append("tipo", tipo);
    urlencoded.append("cantidad", cantidad);

    let res = await fetch(`${PHP_BASE}nuevoMovimiento.php`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: urlencoded
    });

    return await res.json();

}
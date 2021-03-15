const PHP_BASE = 'http://localhost:8000/src/php/'

export const ActualizarSaldoFetch = async({ cantidad, iban }) => {



    var urlencoded = new URLSearchParams();
    urlencoded.append("iban", iban);
    urlencoded.append("cantidad", cantidad);

    let res = await fetch(`${PHP_BASE}actualizarSaldo.php`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: urlencoded
    });

    return await res.json();

}
const PHP_BASE = 'http://localhost:8000/src/php/'

export const VerMovimientosFetch = async({ iban }) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("iban", iban);

    let res = await fetch(`${PHP_BASE}movimientos.php`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: urlencoded
    });

    return await res.json();

}
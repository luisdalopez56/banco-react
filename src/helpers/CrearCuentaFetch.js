const PHP_BASE = 'http://localhost:8000/src/php/'

export const CrearCuentaFetch = async(iban, dni, saldo, interesAnual) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("iban", iban);
    urlencoded.append("dni", dni);
    urlencoded.append("saldo", saldo);
    urlencoded.append("interesAnual", interesAnual);

    let res = await fetch(`${PHP_BASE}nuevaCuenta.php`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: urlencoded
    });

    return await res.json();

}
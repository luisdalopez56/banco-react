const PHP_BASE = 'http://localhost:8000/src/php/'

export const CargarCuentaFetch = async({ iban }) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("iban", iban);

    let res = await fetch(`${PHP_BASE}cuenta.php`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlencoded

    });

    return await res.json();

}
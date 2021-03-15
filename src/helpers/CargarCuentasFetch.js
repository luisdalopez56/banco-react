const PHP_BASE = 'http://localhost:8000/src/php/'

export const CargarCuentasFetch = async(dni) => {

    var urlencoded = new URLSearchParams();
    urlencoded.append("dni", dni);

    let res = await fetch(`${PHP_BASE}cuentas.php`, {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
    });

    return await res.json();

}
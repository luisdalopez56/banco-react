const PHP_BASE = 'http://localhost:8000/src/php/'

export const CrearClienteFetch = async(iban, dni, nombre, apellidos, direccion, localidad, fNacimiento) => {

    var urlencoded = new URLSearchParams();
    urlencoded.append("iban", iban);
    urlencoded.append("dni", dni);
    urlencoded.append("nombre", nombre);
    urlencoded.append("apellidos", apellidos);
    urlencoded.append("direccion", direccion);
    urlencoded.append("localidad", localidad);
    urlencoded.append("fNacimiento", fNacimiento);

    let res = await fetch(`${PHP_BASE}nuevoCliente.php`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: urlencoded
    });

    return await res.json();

}
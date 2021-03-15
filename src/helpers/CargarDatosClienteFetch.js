const PHP_BASE = 'http://localhost:8000/src/php/'

export const CargarDatosClienteFetch = async({ dni }) => {

    // console.log("Enviando dni", dni);

    var urlencoded = new URLSearchParams();
    urlencoded.append("dni", dni);

    let res = await fetch(`${PHP_BASE}cliente.php`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlencoded,

    });

    return await res.json();

}
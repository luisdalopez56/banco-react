<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header('Content-type: application/json');

require ('funciones.php');
require_once ('db.php');

$dni = htmlspecialchars($_POST['dni']);


if (!empty($dni)) {

    $stm = $pdo->prepare('SELECT * FROM cliente WHERE dni = :dni');

    $stm->execute(array(

        ':dni' => $dni

    ));

    if ($stm->rowCount() > 0) {
        
        $cliente = $stm->fetch(PDO::FETCH_ASSOC);

        echo devolverMensaje($cliente, 200);

    }
    else
        echo devolverMensaje('Cliente no encontrado', 500);

}else {
    echo devolverMensaje('Campos vacíos', 500);
}
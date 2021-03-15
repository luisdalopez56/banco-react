<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header('Content-type: application/json');

require ('funciones.php');
require_once ('db.php');

$iban = $_POST['iban'];


if (!empty($iban)) {

    $stm = $pdo->prepare('SELECT * FROM cuenta WHERE iban = :iban');

    $stm->execute(array(

        ':iban' => $iban

    ));

    if ($stm->rowCount() > 0) {
        
        $cuenta = $stm->fetch(PDO::FETCH_ASSOC);

        echo devolverMensaje($cuenta, 200);

    }
    else
        echo devolverMensaje('Cuenta no encontrada', 500);

}else {
    echo devolverMensaje('Campos vacíos', 500);
}
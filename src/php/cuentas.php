<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header('Content-type: application/json');

require ('funciones.php');
require_once ('db.php');

$stm = $pdo->prepare('SELECT * FROM cuenta');
$stm->execute();

if ($stm->rowCount() > 0) {

    $cuentas = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo devolverMensaje($cuentas, 200);
}else
    echo devolverMensaje('No hay cuentas para mostrar', 500);


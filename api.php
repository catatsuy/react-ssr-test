<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: x-csrf-token');
$stderr = fopen('php://stderr', 'w');
fwrite($stderr, var_export($_SERVER, true) . "\n");

switch($_SERVER['REQUEST_URI']) {
case '/csrf_token':
    echo json_encode(['token' => md5(rand())]);
    break;
case '/time':
    echo json_encode(['time' => microtime(true)]);
    break;
}

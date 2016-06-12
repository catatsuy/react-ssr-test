<?php

header('Content-Type: application/json');
$stderr = fopen('php://stderr', 'w');
fwrite($stderr, var_export($_SERVER, true) . "\n");

switch($_SERVER['REQUEST_URI']) {
case '/api/csrf_token':
    echo json_encode(['token' => md5(rand())]);
    break;
case '/api/time':
    echo json_encode(['time' => microtime(true)]);
    break;
}

<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$stderr = fopen('php://stderr', 'w');
fwrite($stderr, var_export($_SERVER, true) . "\n");
echo json_encode(['time' => microtime(true)]);

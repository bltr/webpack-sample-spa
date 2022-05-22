<?php
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

if ($uri === '/api') {
    echo '{"title": "App page"}';
} elseif ($uri === '/api/admin') {
    echo '{"title": "Admin page"}';
} else {
    http_response_code(404);
    echo 'Not Found';
}

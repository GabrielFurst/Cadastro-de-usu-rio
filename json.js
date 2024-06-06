<?php

header('Content-Type: application/json');


$data = json_decode(file_get_contents('php://input'), true);

// Verificar se todos os campos necessários foram enviados
if (isset($data['nome']) && isset($data['email']) && isset($data['senha']) &&
    isset($data['cpf']) && isset($data['endereco'])) {
    
   
    echo json_encode(['success' => true]);
} else {
   
    echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios.']);
}
?>

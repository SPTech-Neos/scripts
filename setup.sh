#!/bin/bash

# Função para verificar se o comando anterior foi executado com sucesso
check_status() {
    if [ $? -ne 0 ]; then
        echo "Erro: O comando anterior falhou. Abortando o script."
        exit 1
    fi
}

# Atualizar e instalar pacotes necessários
echo "Atualizando a lista de pacotes..."
sudo apt-get update
check_status

echo "Instalando pacotes: git, docker.io, docker-compose..."
sudo apt-get install -y git docker.io docker-compose
check_status

# Iniciar o docker-compose
echo "Iniciando o docker-compose..."
docker-compose up --build
check_status

echo "O script foi concluído com sucesso."

# Iniciar o docker-compose
docker-compose up --build


# para usar o script:
# Salve o script em um arquivo, por exemplo, setup.sh.
# Torne o script executável: chmod +x setup.sh.
# Execute o script: ./setup.sh.
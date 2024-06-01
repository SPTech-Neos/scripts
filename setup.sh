#!/bin/bash

# Atualizar e instalar pacotes necessários
sudo apt-get update
sudo apt-get install -y git docker.io docker-compose

# Adicionar o usuário ao grupo docker
sudo usermod -aG docker $USER

# Reiniciar a sessão para aplicar as mudanças de grupo
# Isso interrompe o script atual, então precisamos lidar com isso de outra forma

# Informar ao usuário para reiniciar a sessão
echo "Por favor, reinicie sua sessão para aplicar as mudanças de grupo, ou execute 'newgrp docker' para aplicar as mudanças sem reiniciar."

# Esperar o usuário executar a instrução ou reiniciar manualmente e então continuar
read -p "Pressione Enter para continuar depois de reiniciar a sessão ou executar 'newgrp docker'..."

# Iniciar o docker-compose
docker-compose up --build


# para usar o script:
# Salve o script em um arquivo, por exemplo, setup.sh.
# Torne o script executável: chmod +x setup.sh.
# Execute o script: ./setup.sh.
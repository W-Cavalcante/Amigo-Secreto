# Amigo-Secreto
## Descrição

Este projeto é uma aplicação web simples que permite aos usuários adicionar nomes a uma lista e sortear aleatoriamente um deles. O sorteio pode ser utilizado para brincadeiras como o Amigo Secreto, ajudando a escolher um participante de maneira justa e aleatória.

## Tecnologias Utilizadas

- `HTML`: Estruturação da página.

- `CSS`: Estilização e layout responsivo.

- `JavaScript`: Manipulação de DOM e lógica do sorteio.

## Funcionalidades

- Adicionar Nomes: O usuário pode inserir nomes na lista.

- Validação da Entrada: O sistema impede a adição de entradas vazias ou duplicadas.

- Listagem de Amigos: Os nomes adicionados aparecem em uma lista na tela.

- Sorteio Aleatório: Um nome é escolhido aleatoriamente da lista ao clicar no botão de sorteio.

- Exibição do Resultado: O nome sorteado é exibido na tela para o usuário.

## Como Usar

- Abra o arquivo index.html em um navegador.

- Digite um nome no campo de entrada e clique no botão "Adicionar".

- Após adicionar todos os participantes, clique no botão "Sortear Amigo".

- O nome sorteado será exibido na tela.

## Código Principal

O código principal em app.js realiza as seguintes tarefas:

Captura o valor do campo de entrada com document.getElementById().

Valida se a entrada não está vazia e se o nome já foi adicionado.

Atualiza a lista de amigos e exibe na tela.

Usa Math.random() e Math.floor() para sortear um nome aleatório.

Exibe o resultado no elemento HTML correspondente.

## Melhorias Futuras

- Implementar a remoção de nomes da lista.

- Adicionar um histórico de sorteios.

- Criar um design mais interativo e moderno.

## Autor

Desenvolvido por Walquiria Cavalcante. Sinta-se à vontade para contribuir com melhorias!


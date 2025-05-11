# Meu App Express

Este é um projeto simples de API em Node.js usando Express que permite consultar endereços a partir de um CEP utilizando a API pública do ViaCEP.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no terminal, dentro da pasta `meu-app-express`:

```
cd meu-app-express
npm install
```

## Iniciando a API

Para iniciar a API, utilize o comando:

```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Executando os testes

Para executar os testes automatizados, utilize o comando:

```
npm test
```

Certifique-se de que todas as dependências foram instaladas antes de executar os testes.

## Exemplo de Requisição

Para consultar um endereço pelo CEP, faça uma requisição GET para o endpoint `/cep/:cep`, substituindo `:cep` pelo CEP desejado. Por exemplo:

```
GET http://localhost:3000/cep/01001-000
```

A resposta será um objeto JSON contendo o endereço completo.

# Meu App Express

Este é um projeto simples de API em Node.js usando Express que permite consultar endereços a partir de um CEP utilizando a API pública do ViaCEP.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

```
npm install
```

## Iniciando a API

Para iniciar a API, utilize o comando:

```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Exemplo de Requisição

Para consultar um endereço pelo CEP, faça uma requisição GET para o endpoint `/cep/:cep`, substituindo `:cep` pelo CEP desejado. Por exemplo:

```
GET http://localhost:3000/cep/01001-000
```

A resposta será um objeto JSON contendo o endereço completo.
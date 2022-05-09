# NLW RETURN SERVER

## Projeto  
API desenvolvida para cadastrar um feedback no banco de dados e enviar um e-mail com o conteúdo do feedback
---

## Tecnologias

* Typescript
* Node
* Jest
* Express
* Prisma
* Cors
* nodemailer
---

## Request body

### Post

[localhost](http://localhost:3333/feedbacks)

```JSON
  {
    "type": "BUG",
    "comment": "há um bug no site"
  }

```

## Features

* Envio de e-mail
* Testes
* Use cases
* Princípios do SOLID
---

## Executando o projeto

Utilize `npm install` ou `yarn` para obter as dependências do projeto
```
  npm install
```

Configure as migrations do banco de dados
```
  npx prisma migrate dev
```

Utilize `npm run dev` ou `yarn dev` para rodar o projeto 
```
  npm run dev
```

Rode os testes
```
  npm tun test
```
# CRUD Backend

API REST para gerenciamento de clientes, desenvolvida com Node.js, Express e Drizzle ORM.

## Tecnologias

- Node.js
- Express
- Drizzle ORM
- PostgreSQL (Neon)
- dotenv

## Instalação
```bash
npm install
```

## Configuração

Cria um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL=postgresql://usuario:senha@host/banco?sslmode=require
```

## Rodando o projeto
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

## Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/clients | Lista todos os clientes ativos |
| POST | /api/clients | Cria um novo cliente |
| PUT | /api/clients/:id | Atualiza um cliente |
| DELETE | /api/clients/:id | Desativa um cliente (soft delete) |

## Estrutura de pastas
```
src/
 ├── controllers/
 │    └── clientController.js
 ├── db/
 │    ├── db.js
 │    └── schema.js
 ├── routes/
 │    └── clientRoute.js
 ├── services/
 │    └── clientServices.js
 └── index.js

# 📚 Documentação do Back-end - Meu Ritmo

Este documento descreve as principais funcionalidades e estrutura da API RESTful do projeto **Meu Ritmo**. O back-end foi desenvolvido utilizando **Node.js**, **TypeScript** e **MySQL**, seguindo princípios de organização de código em camadas (Model, Repository, Service, Controller).

---

## 📌 Tecnologias Utilizadas

* Node.js
* TypeScript
* Express.js
* MySQL
* JWT (Autenticação)
* dotenv
* bcryptjs

---

## 🧱 Estrutura do Projeto

```
├── src
│   ├── classes         # Models/Entidades
│   ├── controllers     # Controladores
│   ├── database        # Conexão com banco
│   ├── interfaces      # Interfaces para padronização
│   ├── repository      # Lógica SQL
│   ├── services        # Regras de negócio
│   └── routes.ts       # Rotas da API
```

---

## 🔐 Autenticação

* Login e geração de token JWT para sessões seguras.
* Rotas protegidas com middleware de autenticação.

### Exemplo de login:

```json
POST /login
{
  "email": "usuario@email.com",
  "senha": "123456"
}
```

---

## 📂 Endpoints da API

### Usuário

* `POST /usuario` → Cadastrar usuário
* `GET /usuario` → Listar todos os usuários
* `GET /usuario/:id` → Buscar usuário por ID

### Sono

* `POST /sono` → Registrar informações de sono
* `GET /sono/:id_usuario` → Listar sono por usuário

### Hidratação

* `POST /hidratacao` → Registrar ingestão de água
* `GET /hidratacao/:id_usuario` → Listar hidratação por usuário

### Exercício

* `POST /exercicio` → Registrar atividade física
* `GET /exercicio/:id_usuario` → Listar exercícios por usuário

---

## 🗃️ Conexão com Banco de Dados

A conexão é feita via módulo `mysql2`. Os dados são lidos do arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=dbmeuritmo
```

```ts
import mysql from 'mysql2';
export const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
```

---

## ✅ Validações e Tratamento de Erros

* Dados obrigatórios são validados antes da inserção.
* Erros do banco são tratados e retornados com mensagens amigáveis.
* Verificação de campos duplicados, datas inválidas e formatos incorretos.

---

## 🛡️ Segurança

* Hash de senhas com `bcryptjs`
* Sessões seguras com `jsonwebtoken`

---

## 📦 Instalação e Execução

```bash
npm install
npm run dev
```

---

## 📌 Observações

* A API segue princípios RESTful.
* O projeto pode ser consumido por um front-end web ou aplicação desktop (via Electron).

---

## 👨‍💻 Desenvolvido por

* Kayque Franco dos Santos de Sá
* Murillo Mendonça
* Arthur Cruz

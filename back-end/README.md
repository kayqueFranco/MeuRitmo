# 📚 Documentação do Back-end - Meu Ritmo

Este documento descreve as principais funcionalidades e estrutura da API RESTful do projeto **Meu Ritmo**. O back-end foi desenvolvido utilizando **Node.js**, **TypeScript** e **MySQL**, seguindo princípios de organização de código em camadas (Model, Repository, Service, Controller).

---

## 📌 Tecnologias Utilizadas

* Node.js
* TypeScript
* MySQL
* JWT (Autenticação)
* bcryptjs

---

## 🧱 Estrutura do Projeto

```
├── src
│   ├── classes         # Models/Entidades
│   ├── database        # Conexão com banco
│   ├── interfaces      # Interfaces para padronização
│   ├── repository      # Lógica SQL
│   ├── services        # Regras de negócio
│   └── app.ts       # Rotas da API
```

---

## 📂 Endpoints da API

### Usuário

* `POST /usuario` → Cadastrar usuário
* `GET /usuario` → Listar todos os usuários

### Resposta

* `POST /resposta` → Registrar questionário do usuário

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

## 🧾 Scripts SQL das Tabelas

```sql
CREATE TABLE usuario (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nome_usuario VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  senha VARCHAR(255) NOT NULL
);
```

```sql
CREATE TABLE resposta (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  objetivo VARCHAR(50) NOT NULL,
  horas_sono INT,
  qualidade_sono VARCHAR(50),
  quantidade_agua_ml INT,
  exercicios_semana INT,
  tempo_treino INT,
  intensidade_treino VARCHAR(50),
  atividade_diaria VARCHAR(50),
  alimentacao VARCHAR(100),
  datadia DATE,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);
```

---

## ✅ Validações e Tratamento de Erros

* Dados obrigatórios são validados antes da inserção.
* Erros do banco são tratados e retornados com mensagens amigáveis.
* Verificação de campos duplicados, datas inválidas e formatos incorretos.

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

* [Kayque Franco](https://github.com/kayqueFranco)
* [Murillo Mendonça](https://github.com/mmendoncamascarenha)
* [Arthur Cruz](https://github.com/arthurcruzalves)

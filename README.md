#  Meu Ritmo - Projeto Integrador (SENAC)

**Meu Ritmo** é um projeto voltado para o bem-estar físico e emocional, com o objetivo de ajudar pessoas a monitorarem hábitos saudáveis como hidratação, sono, atividade física e alimentação. A plataforma permite que o usuário registre e acompanhe seus dados diários, promovendo mais consciência sobre sua rotina e incentivando uma vida mais equilibrada.

O sistema foi desenvolvido como parte do Projeto Integrador do curso Técnico em Informática no SENAC.

---

## 🎯 Objetivo do Projeto

- Oferecer uma plataforma digital onde o usuário possa registrar e acompanhar dados relacionados à sua saúde.
- Promover a conscientização sobre a importância de hábitos saudáveis, como beber água regularmente, manter um sono adequado e praticar exercícios físicos.
- Fornecer dados organizados que permitam o autoconhecimento e o acompanhamento do progresso pessoal ao longo do tempo.

---

## 👥 Público-Alvo

- Pessoas interessadas em melhorar sua qualidade de vida por meio do monitoramento de hábitos diários.
- Estudantes, trabalhadores e qualquer pessoa que deseje acompanhar sua rotina de forma simples e digital.
- Profissionais da saúde que desejam utilizar o sistema como apoio em acompanhamentos clínicos.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **TypeScript**
- **Node.js**
- **Express.js**
- **MySQL**
- **Bootstrap**

---

## ⚙️ Configuração do Projeto

### 1. Instale as dependências:

```bash
npm install
```



### 2. Inicie o servidor:

```bash
npm start
```

---

## 🗄️ Estrutura de Banco de Dados (Meu Ritmo)

### Tabela: `usuario`

```sql
CREATE TABLE usuario (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nome_usuario VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  senha VARCHAR(255) NOT NULL
);
```

### Tabela: `sono`

```sql
CREATE TABLE sono (
  id_sono INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  hora_dormiu TIME,
  hora_acordou TIME,
  qualidade_sono VARCHAR(50),
  hora_durmidas INT,
  datadia DATE,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);
```

### Tabela: `hidratacao`

```sql
CREATE TABLE hidratacao (
  id_hidratacao INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  quantidade_agua_ml INT,
  datadia DATE,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);
```

### Tabela: `exercicio`

```sql
CREATE TABLE exercicio (
  id_exercicio INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  tipo_exercicio VARCHAR(50),
  duracao_min INT,
  intensidade VARCHAR(50),
  datadia DATE,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);
```

---

## 📌 Funcionalidades

- Cadastro e login de usuários
- Registro diário de:
  - Sono
  - Hidratação
  - Exercício físico
- Listagem e histórico por data
- Validação de dados com tratamento de erros
- API RESTful com Node.js + MySQL

---

## 🧹 Estrutura de Navegação (Seções)

- Home
- Cadastro/Login
- Registrar Dados
- Histórico
- Perfil do Usuário

---

## 👨‍💼 Equipe Desenvolvedora

- Kayque Franco dos Santos de Sá
- Luiz Damas Amorim
- Davi Do Couto
- Arthur Cruz 
- Murillo Mendonça

---

## 📄 Status do Projeto

✅ **Em Desenvolvimento** – novas funcionalidades estão sendo adicionadas constantemente.

---

## 📃 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.


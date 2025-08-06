
![GitHub License](https://img.shields.io/github/license/kayqueFranco/MeuRitmo)





# Meu Ritmo - Projeto Integrador (SENAC)

**Meu Ritmo** é um projeto voltado para o bem-estar físico e emocional, com o objetivo de ajudar pessoas a monitorarem hábitos saudáveis como hidratação, sono, atividade física e alimentação. A plataforma permite que o usuário registre e acompanhe seus dados diários, promovendo mais consciência sobre sua rotina e incentivando uma vida mais equilibrada.

O sistema foi desenvolvido como parte do Projeto Integrador do curso Técnico em Informática no SENAC.

---

## 🌟 Objetivo do Projeto

* Oferecer uma plataforma digital onde o usuário possa registrar e acompanhar dados relacionados à sua saúde.
* Promover a conscientização sobre a importância de hábitos saudáveis, como beber água regularmente, manter um sono adequado e praticar exercícios físicos.
* Fornecer dados organizados que permitam o autoconhecimento e o acompanhamento do progresso pessoal ao longo do tempo.

---

## 👥 Público-Alvo

* Pessoas interessadas em melhorar sua qualidade de vida por meio do monitoramento de hábitos diários.
* Estudantes, trabalhadores e qualquer pessoa que deseje acompanhar sua rotina de forma simples e digital.
* Profissionais da saúde que desejam utilizar o sistema como apoio em acompanhamentos clínicos.

---

## 🚀 Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **TypeScript**
* **Node.js**
* **Express.js**
* **MySQL**

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

## 📄 Estrutura de Banco de Dados (Meu Ritmo)

### Tabelas Utilizadas

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

## 📌 Funcionalidades

* Registro de respostas sobre hábitos e estilo de vida
* Armazenamento do objetivo do usuário (perder, ganhar ou manter peso)
* Análise das respostas e hábitos do usuário
* Geração de gráficos que mostram se os hábitos estão adequados
* Recomendações de exercícios e receitas com base no objetivo
* Histórico de dados
* Validação de dados com tratamento de erros
* API RESTful com Node.js + MySQL

---

## 🧠 Inteligência do Sistema

Com base nas respostas e dados registrados, o sistema:

* Analisa a qualidade dos hábitos do usuário (sono, hidratação, atividade, alimentação)
* Compara os hábitos com o objetivo definido (perder peso, ganhar massa ou manter)
* Gera gráficos e feedback visual sobre a adequação dos hábitos
* Indica receitas saudáveis e atividades físicas de acordo com o perfil do usuário

---

## 🧹 Estrutura de Navegação (Seções)

* Home
* Questionário
* Gráficos

---

## 👨‍💼 Equipe Desenvolvedora

* [Kayque Franco](https://github.com/kayqueFranco)
* [Luiz Damas Amorim](https://github.com/LuizDamasAmorim)
* [Davi Do Couto](https://github.com/Davicouto530)
* [Arthur Cruz](https://github.com/arthurcruzalves)
* [Murillo Mendonça](https://github.com/mmendoncamascarenha)

---

## 📅 Status do Projeto

✅ **Em Desenvolvimento** – novas funcionalidades estão sendo adicionadas constantemente.

---

## 📃 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

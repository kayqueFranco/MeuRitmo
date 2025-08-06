# 📚 Documentação do Front-end - Meu Ritmo

Esta documentação descreve as principais funcionalidades e estrutura da interface do usuário do projeto **Meu Ritmo**. O front-end foi desenvolvido com **HTML5**, **CSS3**, **JavaScript** e **TypeScript**, oferecendo uma experiência simples e interativa para o usuário.

---

## 🌐 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* TypeScript

---

## 🧭 Estrutura de Pastas

```
├── public
│   ├── css
│   ├── js
│   ├── img
│   └── pages
│       ├── home.html
│       ├── login.html
│       ├── cadastro.html
│       ├── questionario.html
│       ├── metas.html
│       ├── grafico.html
│       └── perfil.html
```

---

## 📌 Funcionalidades Principais

* Questionário de hábitos (água, sono, treino, alimentação
* Geração de gráficos com base nas respostas do usuário
* Sugestão de atividades e dicas personalizadas
* Layout responsivo e intuitivo

---

## 🎨 Navegação

A navegação é realizada por links e redirecionamentos após autenticação. As páginas estão divididas por tema: questionário e gráficos.

---

## 🔄 Integração com o Back-end

As requisições utilizam `fetch` e seguem o padrão REST com a API criada no back-end.

### Exemplo de requisição `POST` para respostas:

```js
fetch("http://localhost:3000/resposta", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id_usuario: 1,
    objetivo: "perder peso",
    horas_sono: 7,
    qualidade_sono: "Boa",
    quantidade_agua_ml: 2000,
    exercicios_semana: 3,
    tempo_treino: 40,
    intensidade_treino: "Moderada",
    atividade_diaria: "Ativa",
    alimentacao: "Equilibrada",
    datadia: "2025-06-20"
  })
})
```

---

## 💡 Boas Práticas

* Separação clara de responsabilidades por página
* Uso de `localStorage` para persistência de dados (como ID do usuário)
* Validação de formulários e mensagens de erro para usuário

---

## 🚧 Em Desenvolvimento

Funcionalidades como edição de perfil, exportação de dados e sugestões automáticas estão em desenvolvimento.

---

## 👨‍💻 Desenvolvido por

* [Davi Do Couto](https://github.com/Davicouto530)
* [Luiz Damas](https://github.com/LuizDamasAmorim)


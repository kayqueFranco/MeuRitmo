# 📚 Documentação do Front-end - Meu Ritmo

Esta documentação descreve as principais funcionalidades e estrutura da interface do usuário do projeto **Meu Ritmo**. O front-end foi desenvolvido com **HTML5**, **CSS3**, **JavaScript**, **Bootstrap** e **TypeScript**, oferecendo uma experiência simples e direta para o usuário.

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
│       ├── sono.html
│       ├── hidratacao.html
│       └── exercicio.html
```

---

## 📌 Funcionalidades Principais

* **Login e cadastro** com validação de campos obrigatórios
* **Registro de dados** (sono, hidratação, exercício) via formulários
* **Visualização de histórico** dos registros por usuário
* **Design responsivo** para dispositivos móveis e desktops

---

## 🎨 Navegação

A navegação entre páginas é feita por meio de links diretos. Após o login, o usuário é direcionado para o painel com as opções de registros.

---

## 🔄 Integração com o Back-end

As requisições são feitas com `fetch` e utilizam a API do back-end para CRUD:

### Exemplo de requisição `POST`:

```js
fetch("http://localhost:3000/sono", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id_usuario: 1,
    hora_dormiu: "22:30",
    hora_acordou: "06:30",
    qualidade_sono: "Boa",
    hora_durmidas: 8,
    datadia: "2025-06-20"
  })
})
```

---

## 💡 Boas Práticas

* Reaproveitamento de componentes com Bootstrap
* Validações de formulário no client-side
* Uso de `localStorage` para armazenar o token JWT (se necessário)

---

## 🚧 Em Desenvolvimento

Novas melhorias visuais e funcionais estão sendo implementadas.

---

## 👨‍💻 Desenvolvido por

* [Davi Do Couto](https://github.com/Davicouto530)
* [Luiz Damas](https://github.com/LuizDamasAmorim)

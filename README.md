# Todo List

Gerenciador de tarefas full stack com back-end em Spring Boot e front-end em React.

<img width="1140" height="640" alt="202606181248" src="https://github.com/user-attachments/assets/40bb6870-0bcd-4ced-b9fd-17eaa4cdd94f" />

## Tecnologias
https://camo.githubusercontent.com/e5c425a72ead42f4d2ffe8090fe6da8532c47f707bc108414f3302a8d8418a33/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176612d31372d6f72616e67653f7374796c653d666c61742d737175617265266c6f676f3d6f70656e6a646b
**Back-end:** Java 21, Spring Boot, Spring Data JPA, MySQL  
**Front-end:** React, Vite, JavaScript

## Funcionalidades

- Criar, editar e excluir tarefas
- Níveis de prioridade (Alta, Média, Baixa)
- Marcar tarefas como concluídas com feedback visual
- Busca em tempo real
- Transições animadas

## Rodando localmente

**Back-end**

```bash
cd todoolist
./mvnw spring-boot:run
```

Configure as credenciais do seu banco de dados em `application-local.properties`:

```
DB_URL=jdbc:mysql://localhost:3306/todolist
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

**Front-end**

```bash
cd todoolist-web
npm install
npm run dev
```

## API

| Método | Endpoint    | Descrição              |
|--------|-------------|------------------------|
| GET    | /todos      | Listar todas as tarefas |
| POST   | /todos      | Criar tarefa           |
| PUT    | /todos      | Atualizar tarefa       |
| DELETE | /todos/{id} | Excluir tarefa         |




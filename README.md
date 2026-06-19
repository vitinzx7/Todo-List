# Todo List

Gerenciador de tarefas full stack com back-end em Spring Boot e front-end em React.

<img width="1140" height="640" alt="202606181248" src="https://github.com/user-attachments/assets/40bb6870-0bcd-4ced-b9fd-17eaa4cdd94f" />

## Tecnologias

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




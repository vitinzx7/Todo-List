# Todo List - Full Stack

Aplicação full stack para gerenciar tarefas (CRUD) com backend em Spring Boot e frontend em React.

## Tecnologias

### Backend
- Java 21
- Spring Boot
- Spring MVC
- Spring Data JPA
- MySQL

### Frontend
- React
- Vite
- JavaScript (ES6+)

## Práticas adotadas
- API REST
- Separação de responsabilidades (Controller, Service, Repository)
- Componentes React reutilizáveis
- Camada de API isolada no frontend
- Gerenciamento de estado com hooks (useState, useEffect)
- Credenciais separadas do código com Spring Profiles

## Como Executar

### Backend

Clonar o repositório:
```bash
git clone https://github.com/vitinzx7/Todo-List
```

Configurar as variáveis de ambiente (ou criar `application-local.properties`):
```
DB_URL=jdbc:mysql://localhost:3306/todolist
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

Executar o backend:
```bash
cd todoolist
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:8080`.

### Frontend

```bash
cd todoolist-web
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

## API Endpoints

### Criar Tarefa
```
POST /todos
```
```json
{
  "nome": "Todo 1",
  "descricao": "Desc Todo 1",
  "prioridade": 1,
  "realizado": false
}
```

### Listar Tarefas
```
GET /todos
```

### Atualizar Tarefa
```
PUT /todos
```
```json
{
  "id": 1,
  "nome": "Todo 1 Atualizado",
  "descricao": "Desc atualizada",
  "prioridade": 2,
  "realizado": true
}
```

### Remover Tarefa
```
DELETE /todos/{id}
```

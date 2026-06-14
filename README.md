# Todo List API

API REST para gerenciamento de tarefas, desenvolvida com Java e Spring Boot.

## Tecnologias

- Java 17
- Spring Boot 3.5.14
- Spring Data JPA
- MySQL
- Maven

## Endpoints

URL base: `http://localhost:8080`

| Método   | Endpoint      | Descrição                          |
|----------|---------------|------------------------------------|
| `POST`   | `/todos`      | Criar uma nova tarefa              |
| `GET`    | `/todos`      | Listar todas as tarefas            |
| `PUT`    | `/todos`      | Atualizar uma tarefa existente     |
| `DELETE` | `/todos/{id}` | Deletar uma tarefa pelo ID         |

### Exemplo de body (POST / PUT)

```json
{
  "nome": "Estudar Spring Boot",
  "descricao": "Revisar conceitos de API REST",
  "realizado": false,
  "prioridade": 2
}
```

## Como rodar

**Pré-requisitos:** Java 17+, Maven, MySQL

**1. Criar o banco de dados:**
```sql
CREATE DATABASE todolist;
```

**2. Criar o arquivo de configuração local:**

Crie `src/main/resources/application-local.properties` com suas credenciais:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/todolist
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
```

**3. Rodar:**
```bash
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:8080`.

---

## Estrutura

```
todoolist/
└── src/main/java/br/com/victor/todoolist/
    ├── controller/
    │   └── TodoController.java
    ├── entity/
    │   └── Todo.java
    ├── repository/
    │   └── TodoRepository.java
    ├── service/
    │   └── TodoService.java
    └── TodoolistApplication.java
```


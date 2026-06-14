# Todo List API

API REST simples para gerenciamento de tarefas, desenvolvida com Java e Spring Boot.
O projeto é simples, mas segue a arquitetura em camadas padrão (Controller → Service → Repository).

---

## Tecnologias

- Java 17
- Spring Boot 3.5.14
- Spring Data JPA
- Spring Web (REST)
- MySQL
- Maven

---

## Estrutura do Projeto

```
todoolist/
└── src/
    └── main/
        └── java/br/com/victor/todoolist/
            ├── controller/
            │   └── TodoController.java      # Endpoints REST
            ├── entity/
            │   └── Todo.java                # Entidade JPA (tabela: todos)
            ├── repository/
            │   └── TodoRepository.java      # Acesso ao banco via JpaRepository
            ├── service/
            │   └── TodoService.java         # Regras de negócio
            └── TodoolistApplication.java    # Ponto de entrada da aplicação
```

---

## Endpoints

URL base: `http://localhost:8080`

| Método   | Endpoint       | Descrição                                   |
|----------|----------------|---------------------------------------------|
| `POST`   | `/todos`       | Criar uma nova tarefa                       |
| `GET`    | `/todos`       | Listar todas as tarefas (ordenadas)         |
| `PUT`    | `/todos`       | Atualizar uma tarefa existente              |
| `DELETE` | `/todos/{id}`  | Deletar uma tarefa pelo ID                  |

> Todos os endpoints retornam a lista atualizada de tarefas.

### Exemplo de body (POST / PUT)

```json
{
  "nome": "Estudar Spring Boot",
  "descricao": "Revisar conceitos de API REST",
  "realizado": false,
  "prioridade": 2
}
```

---

## Como rodar

### Pré-requisitos

- Java 17+
- Maven
- MySQL

### Configurar o banco de dados

```sql
CREATE DATABASE todoolist;
```

Configure o arquivo `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/todoolist
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
```

### Rodar a aplicação

```bash
cd todoolist
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:8080`.

---

## Autor

Feito por **Victor**

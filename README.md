# Todo List

Full stack task manager with Spring Boot backend and React frontend.


<img width="1140" height="640" alt="202606181248" src="https://github.com/user-attachments/assets/40bb6870-0bcd-4ced-b9fd-17eaa4cdd94f" />


## Tech Stack

**Backend:** Java 21, Spring Boot, Spring Data JPA, MySQL

**Frontend:** React, Vite, JavaScript

## Features

- Create, edit, and delete tasks
- Priority levels (High, Medium, Low)
- Mark tasks as done with visual feedback
- Real-time search
- Animated transitions

## Running locally

**Backend**

```bash
cd todoolist
./mvnw spring-boot:run
```

Configure your database credentials in `application-local.properties`:

```
DB_URL=jdbc:mysql://localhost:3306/todolist
DB_USERNAME=your_user
DB_PASSWORD=your_password
```

**Frontend**

```bash
cd todoolist-web
npm install
npm run dev
```

## API

| Method | Endpoint    | Description    |
|--------|-------------|----------------|
| GET    | /todos      | List all tasks |
| POST   | /todos      | Create task    |
| PUT    | /todos      | Update task    |
| DELETE | /todos/{id} | Delete task    |




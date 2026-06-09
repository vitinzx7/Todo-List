package br.com.victor.todoolist.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.victor.todoolist.entity.Todo;
import br.com.victor.todoolist.repository.TodoRepository;

@Service
public class TodoService {
    private TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> create(Todo todo) {
        todoRepository.save(todo);

    }

      public List<Todo> list() {
        
        todoRepository.find(todo)
        
    }

      public List<Todo> update() {
        
    }

      public List<Todo> delete() {
        
    }
    
}

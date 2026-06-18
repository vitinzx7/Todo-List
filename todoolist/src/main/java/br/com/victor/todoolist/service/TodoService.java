package br.com.victor.todoolist.service;

import java.util.List;

import org.springframework.data.domain.Sort;
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
        return list(todo.getClientId());

    }

      public List<Todo> list(String clientId) {
       Sort sort = Sort.by("prioridade").descending().and(
            Sort.by("nome").ascending());
         return todoRepository.findByClientId(clientId, sort);

    }

      public List<Todo> update(Todo todo) {
        todoRepository.save(todo);
          return list(todo.getClientId());

    }

      public List<Todo> delete(Long id, String clientId) {
        todoRepository.deleteById(id);
          return list(clientId);

    }
    
}

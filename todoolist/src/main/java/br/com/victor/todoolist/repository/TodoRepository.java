package br.com.victor.todoolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.victor.todoolist.entity.Todo;


public interface TodoRepository extends JpaRepository<Todo, Long> {
    
}

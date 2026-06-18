package br.com.victor.todoolist.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import br.com.victor.todoolist.entity.Todo;


public interface TodoRepository extends JpaRepository<Todo, Long> {

    List<Todo> findByClientId(String clientId, Sort sort);
}

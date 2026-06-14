package br.com.victor.todoolist.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.victor.todoolist.service.TodoService;

@RestController
@RequestMapping("/todos")
public class TodoController {
    private TodoService todoService;

  
}

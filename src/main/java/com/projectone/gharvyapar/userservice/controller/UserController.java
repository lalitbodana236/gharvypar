package com.projectone.gharvypar.userservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @GetMapping("/test")
    public ResponseEntity<?> test(){
        return ResponseEntity.ok("\"msg\":\"application is working\"");
    }
}

package com.example.dashboardserver.Controller;

import com.example.dashboardserver.Model.User;
import com.example.dashboardserver.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserService userService;


    @PostMapping("")
    public User signUp(@RequestBody Map<String, String> user, HttpServletResponse response){
        return userService.saveUser(user);
    }

    @DeleteMapping("/{name}")
    public int removeId(@PathVariable("name") String name){
        return userService.deleteUser(name);
    }

}
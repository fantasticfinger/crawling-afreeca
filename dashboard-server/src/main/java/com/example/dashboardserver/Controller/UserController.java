package com.example.dashboardserver.Controller;

import com.example.dashboardserver.Security.UserRepository;
import com.example.dashboardserver.Security.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@ResponseBody
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;



    @PostMapping("/user")
    public int signUp(@RequestBody Map<String, String> user){
        User u = User.builder()
                .name(user.get("name"))
                .password(passwordEncoder.encode(user.get("password")))
                .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정
                .build();
        //System.out.println(u.getName());
        return userRepository.save(u).getId();
    }



}
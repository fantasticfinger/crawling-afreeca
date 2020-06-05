package com.example.dashboardserver.Controller;

import com.example.dashboardserver.Repository.UserRepository;
import com.example.dashboardserver.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;


    @PostMapping("")
    public int signUp(@RequestBody Map<String, String> user, HttpServletResponse response){
        User u = User.builder()
                .name(user.get("name"))
                .password(passwordEncoder.encode(user.get("password")))
                .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정
                .build();
        //System.out.println(u.getName());
        return userRepository.save(u).getId();
    }

    @DeleteMapping("/{name}")
    public int removeId(@PathVariable("name") String name){
        System.out.println("id: "+ name);
        User member = userRepository.findByName(name);
        if(member == null){
            return -402;
        }
        System.out.println(member.getId());
        userRepository.deleteById( member.getId());
        return -201;
    }

}
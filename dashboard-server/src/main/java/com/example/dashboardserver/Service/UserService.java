package com.example.dashboardserver.Service;

import com.example.dashboardserver.Model.User;
import com.example.dashboardserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public User saveUser(Map<String, String> user){
        User u = User.builder()
                .name(user.get("name"))
                .password(passwordEncoder.encode(user.get("password")))
                .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정
                .build();
        return userRepository.save(u);
    }

    public int deleteUser(String name){
        //System.out.println("id: "+ name);
        User member = userRepository.findByName(name);
        if(member == null){
            return -402;
        }
        System.out.println(member.getId());
        userRepository.deleteById( member.getId());
        return -201;
    }

}

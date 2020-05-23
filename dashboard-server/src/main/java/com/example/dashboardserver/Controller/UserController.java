package com.example.dashboardserver.Controller;


import com.example.dashboardserver.Security.JwtTokenProvider;
import com.example.dashboardserver.Security.UserRepository;
import com.example.dashboardserver.Security.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@ResponseBody
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private UserRepository userRepository;

    // 회원가입
    @PostMapping("/join")
    public int join(@RequestBody Map<String, String> user) {
        User u = User.builder()
                .name(user.get("name"))
                .pw(passwordEncoder.encode(user.get("pw")))
                .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정
                .build();
        System.out.println(u.getName());
        return userRepository.save(u).getId();

    }

    // 로그인
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> user) {
        System.out.println(user.get("name"));
        User member = userRepository.findByName(user.get("name"));
                //.orElseThrow(() -> new IllegalArgumentException("가입되지 않은 E-MAIL 입니다."));
        System.out.println("22222222222222");
        if (!passwordEncoder.matches(user.get("pw"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }

        Map<String, String> ret = new HashMap<String,String>();

        ret.put("AccessToken", jwtTokenProvider.createToken(member.getUsername(), member.getAuthorities()));
        String refreshToken  = jwtTokenProvider.createRefreshToken(passwordEncoder);
        ret.put("RefreshToken", refreshToken);
        member.setRefresh_token(refreshToken);
        userRepository.save(member);

        return ret;

//        return jwtTokenProvider.createToken(member.getUsername(), member.getAuthorities());
    }
}
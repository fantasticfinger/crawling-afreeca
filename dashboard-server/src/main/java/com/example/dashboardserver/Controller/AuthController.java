package com.example.dashboardserver.Controller;

import com.example.dashboardserver.Security.JwtTokenProvider;
import com.example.dashboardserver.Security.User;
import com.example.dashboardserver.Security.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;


    // 로그인
    @PostMapping("/auth")
    public int login(@RequestBody Map<String, String> user, HttpServletResponse response) {
        System.out.println(user.get("name"));
        User member = userRepository.findByName(user.get("name"));
        if(member == null){
            Cookie cookie3 = new Cookie("X-AUTH-TOKEN", null);
            cookie3.setMaxAge(0);
            Cookie cookie4 =new Cookie("RefreshToken", null);
            cookie4.setMaxAge(0);
            response.addCookie(cookie3);
            response.addCookie(cookie4);
            return -400;
        }

        if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
            Cookie cookie3 = new Cookie("X-AUTH-TOKEN", null);
            cookie3.setMaxAge(0);
            Cookie cookie4 =new Cookie("RefreshToken", null);
            cookie4.setMaxAge(0);
            response.addCookie(cookie3);
            response.addCookie(cookie4);
            return -401;
        }

        String accessToken = jwtTokenProvider.createToken(member.getUsername(), member.getAuthorities());
        String refreshToken  = jwtTokenProvider.createRefreshToken(passwordEncoder);
        member.setRefresh_token(refreshToken);
        userRepository.save(member);
        Cookie cookie1 = new Cookie("X-AUTH-TOKEN", accessToken);
        cookie1.setMaxAge(3600);
        Cookie cookie2 = new Cookie("RefreshToken", refreshToken);
        response.addCookie(cookie1);
        response.addCookie(cookie2);

        return -200;

//        return jwtTokenProvider.createToken(member.getUsername(), member.getAuthorities());
    }

}

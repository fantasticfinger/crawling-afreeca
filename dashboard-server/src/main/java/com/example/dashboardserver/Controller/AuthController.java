package com.example.dashboardserver.Controller;

import com.example.dashboardserver.Security.JwtTokenProvider;
import com.example.dashboardserver.Model.User;
import com.example.dashboardserver.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping("")
    public Map<String,Object> getUser(ServletRequest request){

        SecurityContext securityContext = SecurityContextHolder.getContext();
        Map<String,Object> map = new HashMap<>();
        map.put("authority",securityContext.getAuthentication().getAuthorities());
        map.put("name",securityContext.getAuthentication().getName());

        return map;
    }


    // 로그인
    @PostMapping("")
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
        Cookie cookie2 = new Cookie("RefreshToken", refreshToken);
        response.addCookie(cookie1);
        response.addCookie(cookie2);

        return -200;

//        return jwtTokenProvider.createToken(member.getUsername(), member.getAuthorities());
    }

    @DeleteMapping("")
    public int logout(HttpServletResponse response){
        Cookie cookie1 = new Cookie("X-AUTH-TOKEN", null);
        cookie1.setMaxAge(0);
        Cookie cookie2 = new Cookie("RefreshToken", null);
        cookie2.setMaxAge(0);
        response.addCookie(cookie1);
        response.addCookie(cookie2);
        return -202;
    }









}

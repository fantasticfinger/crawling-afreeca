package com.example.dashboardserver.Controller;

import com.example.dashboardserver.Model.User;
import com.example.dashboardserver.Service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.*;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@AutoConfigureMockMvc
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)

public class UserControllerTest {
    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    UserController userController;

    @Autowired
    PasswordEncoder passwordEncoder;

    @MockBean
    private UserService userService;

    private MockMvc mockMvc;
    private User user;
    private Map<String, String> map;

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();

        user = User.builder()
                .id(2)
                .name("qqq")
                .password(passwordEncoder.encode("123"))
                .roles(Arrays.asList("ROLE_USER"))
                .refresh_token("refresh_token")
                .build();

        map = new HashMap<>();
        map.put("name", "qqq");
        map.put("password", "123");
        map.put("roles", "USER");
    }


    @Test
    @WithMockUser(username = "username", roles = {"USER"})
    public void postUser() throws Exception {

        when(userService.saveUser(map)).thenReturn(user);

        final ResultActions actions = mockMvc
                .perform(post("/user").content(objectMapper.writeValueAsString(map))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(objectMapper.writeValueAsString(user)))
                .andDo(print());
    }

    @Test
    @WithMockUser(username = "username", roles = {"USER"})
    public void deleteUser() throws Exception {
        final ResultActions actions = mockMvc
                .perform(delete("/user/{name}", "qqq"))
                .andExpect(status().isOk())
                .andDo(print());
    }

}

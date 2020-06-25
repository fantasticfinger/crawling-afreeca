package com.example.dashboardserver.Controller;

import com.example.dashboardserver.Model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@WithMockUser(username = "username", roles = {"USER"})
//@WebMvcTest
public class UserControllerTest {
    @MockBean
    UserController userController;
    @Autowired
    ObjectMapper objectMapper;

    private MockMvc mockMvc;


    final User user = User.builder()
            .id(0)
            .name("abc")
            .password("1q2w3e")
            .roles(Arrays.asList("ROLE_USER"))
            .refresh_token("refresh_token")
            .build();


    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }


    @Test
    public void postUser() throws Exception {
        Map<String, String> map = new HashMap<>();
        map.put("name", "qqq");
        map.put("password", "123");
        map.put("roles", "USER");

        String content = objectMapper.writeValueAsString(map);
        final ResultActions actions = mockMvc
                .perform(post("/user").content(content)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());

    }

}

package com.example.dashboardserver.Service;


import com.example.dashboardserver.Model.User;
import com.example.dashboardserver.Repository.RoomRepository;
import com.example.dashboardserver.Repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
        UserRepository.class,
        MyUserDetailsService.class
    })
public class MyUserDeatailsServiceTest {

    @MockBean
    UserRepository userRepository;

    @Autowired
    MyUserDetailsService myUserDetailsService;

    @Test
    public void loadByUserName(){
        User user = User.builder()
                .id(0)
                .name("abc")
                .password("1q2w3e")
                .roles(Arrays.asList("ROLE_USER"))
                .refresh_token("refresh_token")
                .build();

        when(userRepository.findByName("abc")).thenReturn(user);

        UserDetails ret = myUserDetailsService.loadUserByUsername("abc");

        verify(userRepository,times(1)).findByName("abc");

        assertThat(user,is(user));



    }

}

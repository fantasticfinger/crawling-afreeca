package com.example.dashboardserver.Security;

import com.example.dashboardserver.Model.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class UserTest {
    @Test
    public void getName(){
        final User user = User.builder()
                .name("qqq111")
                .password("qwe123")
                .refresh_token("asdasdasd")
                .build();

        final String name = user.getName();
        assertEquals("qqq11",name,"Is same User");

    }


    @Test
    public void getId(){
        final User user = User.builder()
                .name("qqq111")
                .password("qwe123")
                .refresh_token("asdasdasd")
                .build();

        final int id = user.getId();
        assertEquals(0,id);

        final User user2 = User.builder()
                .name("qqq1111")
                .password("qwe1234")
                .refresh_token("asdasdasd")
                .build();

        final int id2 = user.getId();

    }
}

package com.example.dashboardserver.Login;

import lombok.Data;
import javax.persistence.*;

@Data
public class User {
    @Id
    @GeneratedValue
    @Column(name = "num")
    private int num;
    @Column(name = "id")
    private String id;
    @Column(name = "pw")
    private String pw;

    public User(){};

    public User(String id, String pw) {
        this.id = id;
        this.pw = pw;
    }

}

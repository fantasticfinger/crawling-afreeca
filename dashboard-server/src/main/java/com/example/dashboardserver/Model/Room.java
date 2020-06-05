package com.example.dashboardserver.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Table(name="room")
@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    int id;

    @Column
    String uid;

    @Column
    Date date;
}

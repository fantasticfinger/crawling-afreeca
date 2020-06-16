package com.example.dashboardserver.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
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
    LocalDate date;
}

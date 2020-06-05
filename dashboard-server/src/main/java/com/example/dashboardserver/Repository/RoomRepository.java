package com.example.dashboardserver.Repository;

import com.example.dashboardserver.Model.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Integer> {
    Page<Room> findByUid(String uid, Pageable pageable);

}
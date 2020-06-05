package com.example.dashboardserver.Repository;

import com.example.dashboardserver.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer > {

//    Optional<User> findByName(String name);
    User findByName(String name);


}

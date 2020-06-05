package com.example.dashboardserver.Service;

import com.example.dashboardserver.Model.Room;
import com.example.dashboardserver.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Order;
import java.awt.print.Pageable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ContentsService {

    static final int pageSize = 10;

    @Autowired
    private RoomRepository roomRepository;

    public Map<String,Object> pagingRoom(int page){
        PageRequest pageRequest = PageRequest.of(page,pageSize,
                Sort.by("date").descending().and(Sort.by("uid"))
        );
        Map<String,Object> map = new HashMap<>();
        Page<Room> pages = roomRepository.findAll(pageRequest);
        map.put("rooms",pages.getContent());
        map.put("lastPage", pages.getTotalPages());
        return map;
    }

    public Map<String,Object> searchingById(String uid,int page){
        PageRequest pageRequest = PageRequest.of(page,pageSize,
                Sort.by("date").descending()
        );

        Map<String,Object> map = new HashMap<>();
        Page<Room> pages = roomRepository.findByUid(uid,pageRequest);
        map.put("rooms",pages.getContent());
        map.put("lastPage",pages.getTotalPages());
        return map;
    }

}

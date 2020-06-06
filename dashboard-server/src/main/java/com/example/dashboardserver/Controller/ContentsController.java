package com.example.dashboardserver.Controller;

import com.example.dashboardserver.Model.Room;
import com.example.dashboardserver.Service.ContentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/contents")
public class ContentsController {
    @Autowired
    private ContentsService contentsService;

    @GetMapping("/{page}")
    public Map<String, Object> getRoomList(@PathVariable("page") int page){
        return contentsService.pagingRoom(page);
    }

    @GetMapping("/{page}/{search}")
    public Map<String, Object> searchId(@PathVariable("page") int page, @PathVariable("search") String bjid){
        return contentsService.searchingById(bjid,page);
    }
}

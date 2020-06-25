package com.example.dashboardserver.Service;

import com.example.dashboardserver.Model.Room;
import com.example.dashboardserver.Repository.RoomRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.*;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import static org.mockito.Mockito.*;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
        ContentsService.class,
        RoomRepository.class
        })
public class ContentsServiceTest {

    @MockBean
    private RoomRepository roomRepository;

    @Autowired
    private ContentsService contentsService;

    static final int pageSize = 10;

    @Test
    public void findAll(){
        PageRequest pageRequest = PageRequest.of(0,pageSize,
                Sort.by("date").descending().and(Sort.by("uid"))
        );

        List<Room> list = Arrays.asList(
                Room.builder().id(0).uid("aa").date(LocalDate.of(2019,8,6)).build(),
                Room.builder().id(1).uid("aa").date(LocalDate.of(2019,8,7)).build(),
                Room.builder().id(2).uid("bb").date(LocalDate.of(2019,8,6)).build(),
                Room.builder().id(3).uid("cc").date(LocalDate.of(2019,8,6)).build()
        );

        Page<Room> rooms = new PageImpl(list);
        when(roomRepository.findAll(pageRequest))
                .thenReturn(rooms);

        Map<String, Object> ret = contentsService.pagingRoom(0);

        verify(roomRepository, times(1)).findAll(pageRequest);

        assertThat(list,is(ret.get("rooms")));
    }

    @Test
    public void searchById(){

        PageRequest pageRequest = PageRequest.of(0,pageSize,
                Sort.by("date").descending()
        );

        List<Room> ans = Arrays.asList(
                Room.builder().id(0).uid("aa").date(LocalDate.of(2019,8,6)).build(),
                Room.builder().id(1).uid("aa").date(LocalDate.of(2019,8,7)).build()
        );

        Page<Room> rooms = new PageImpl(ans);
        when(roomRepository.findByUid("aa",pageRequest))
                .thenReturn(rooms);

        Map<String, Object> ret = contentsService.searchingById("aa", 0);

        verify(roomRepository, times(1)).findByUid("aa",pageRequest);

        assertThat(ans,is(ret.get("rooms")));
    }


}

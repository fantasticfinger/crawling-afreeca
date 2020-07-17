package com.example.dashboardserver.Repository;

import com.example.dashboardserver.Model.Room;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.not;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertFalse;
import static org.mockito.Mockito.*;


@RunWith(SpringRunner.class)
//@SpringBootTest(classes = {
//        RoomRepository.class
//})
@DataJpaTest
public class RoomRepositoryTest {

    @Autowired
    RoomRepository roomRepository;

    static final int pageSize = 10;

    @Before
    public void setUp(){
        roomRepository.save(Room.builder().id(14).uid("aa").date(LocalDate.of(2019,8,6)).build());
        roomRepository.save(Room.builder().id(15).uid("aa").date(LocalDate.of(2019,8,7)).build());
        roomRepository.save(Room.builder().id(16).uid("bb").date(LocalDate.of(2019,8,6)).build());
    }

    @Test
    public void findByUidTest(){

        PageRequest pageRequest = PageRequest.of(0,pageSize,
                Sort.by("date").ascending().and(Sort.by("uid"))
        );

        List<Room> list = Arrays.asList(
                Room.builder().id(14).uid("aa").date(LocalDate.of(2019,8,6)).build(),
                Room.builder().id(15).uid("aa").date(LocalDate.of(2019,8,7)).build()
                );

        Page<Room> rooms = new PageImpl(list);
//        when(roomRepository.findByUid("aa",pageRequest))
//                .thenReturn(rooms);

        //verify(roomRepository, times(1)).findAll(pageRequest);

        assertThat(rooms.getContent(),is(roomRepository.findByUid("aa",pageRequest).getContent()));
        //assertThat(rooms,is(roomRepository.findByUid("bb",pageRequest)));
    }
}

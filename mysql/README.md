## Version && Dcoker Images
> Mysql Version : 8.0.20
> Docker Images : mysql:8.0.20



## Table 구조
1. Users : num(PK), id, pw로 구성 >> 회원가입 정보
2. Rooms : num(PK), id, date, Unique key (id + date) >> 대쉬보드에 뛰울 메타데이터 방송 id와 방송날짜

## Version && Docker Images
- Scala : 2.12
- Kafka : 2.0.1
- 주키퍼 이미지 > wurstmeister/zookeeper:latest
- 카프카 이미지 > wurstmeister/kafka:2.12-2.0.1 ()

## Kafka의 사용 목적
1. 크롤링 서버가 동시에 엘라스틱 서치에 접속해 엘라스틱 서치의 부하를 부하를 줄이기 위함
2. 다수의 크롤링 서버에서 들어오는 데이터를 LogStash를 활용하여 Elastic Search에 퍼올리기 위함


### 참고한 사이트
1. docker-compose 작성 참고 : https://miiingo.tistory.com/196
2. Kafka의 컨슈머 및 프로듀서 도커에서 동작중인지 확인하기 위해 
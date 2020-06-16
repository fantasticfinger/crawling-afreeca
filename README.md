# 아프리카Tv 채팅 크롤링 데이터 

## 기술스택
- Go (Crawling)
- Mysql
- kafka
- elasticsearch
- logstash
- SpringBoot
- React.js (대쉬보드)

## 데이터 플로우
> 채팅 내역 : Go crawler > kafka > elasricsearch   > dashboard  
> 메타데이터 :Go crawler > Mysql >  dashboard 

## 기능
- 로그인
- 회원가입
- 권한
	- 일반사용자
		- 크롤링된 채팅방 목록 조회
			- 크롤링된 채팅 조회
				- 'ID'에 해당하는 채팅내역 검색 출력
				- 'text'가 포함된 채팅내역 검색 출력
				- 채팅 유저 id 목록 출력
		- 크롤링 요청
	- 관리자
		- 일반사용자 목록 조회
			- 일반사용자 제거
---


### port 정리
- 8080 : adminer (mysql 대쉬보드)
- 8081 : crawler
- 9200 : elastcsearch
- 9092 : kafka
- 2181 : zookeeper
- 3306 : mysql 

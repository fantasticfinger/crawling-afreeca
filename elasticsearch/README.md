## Version && Docker Images
- ElasticSearch Version : 7.7.0
- 도커 이미지 > elasticsearch:7.7.0

## Elastic Search 사용 목적
1. 대쉬보드에서 필요한 정보 검색을 위함
2. 통계자료등을 나타낼때 정보를 가져오기 위함

## test
1. err - 시작할때 ) no new native processes can be started
> 싱글노드 실행시 발생하는 문제  
> Solution > discovery.type = single.node 
   
2. err - curl로 data Put) 
>{  
  "error" : "Content-Type header[applicationx-www-form-urlencoded] is not supported",  
  "status" : 406  
  }  
>Solution > curl 보낼 때 -H 'Content-Type: application/json' 추가


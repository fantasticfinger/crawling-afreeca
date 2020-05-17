# 설치해야할 파일목록
<!-- 셀레니움 -->
1. go get -v github.com/tebeka/selenium  >> cd vendor >> go run init.go --alsologtostderr  --download_browsers --download_latest
2. chromedriver랑 크롬 버전 맞아야함 크롬설치 되있어야함
<!-- 카프카 연동을 위함 -->
3. go get -v github.com/segmentio/kafka-go

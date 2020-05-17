package main

import (
	"context"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/segmentio/kafka-go"
	"github.com/tebeka/selenium"
)

var baseURL string = "http://play.afreecatv.com/kjs951006/223776155"
var filePath string = "/Users/like.jm/go/src/github.com/fantasticfinger/crawler/data/"

func main() {
	// Start a Selenium WebDriver server instance (if one is not already
	// running).

	const (
		seleniumPath     = "/Users/like.jm/go/src/github.com/tebeka/selenium/vendor/selenium-server.jar"
		chromeDriverPath = "/Users/like.jm/go/src/github.com/tebeka/selenium/vendor/chromedriver"
		port             = 8080
	)
	opts := []selenium.ServiceOption{
		selenium.ChromeDriver(chromeDriverPath),
		selenium.Output(os.Stderr), // Output debug information to STDERR.
	}
	selenium.SetDebug(false)
	service, err := selenium.NewSeleniumService(seleniumPath, port, opts...)
	if err != nil {
		panic(err) // panic is used only as an example and is not otherwise recommended.
	}
	defer service.Stop()

	// Connect to the WebDriver instance running locally.
	caps := selenium.Capabilities{"browserName": "chrome"}

	// chromeCaps := chrome.Capabilities{
	// 	Path: "",
	// 	// Args: []string{
	// 	// 	"--log-level=0", // <<<
	// 	// },
	// }

	//caps.AddChrome(chromeCaps)

	wd, err := selenium.NewRemote(caps, fmt.Sprintf("http://localhost:%d/wd/hub", port))
	if err != nil {
		panic(err)
	}

	// Navigate to the simple playground interface.
	if err := wd.Get(baseURL); err != nil {
		panic(err)
	}

	elem1, err := wd.FindElement(selenium.ByID, "szBjId")
	if err != nil {
		panic(err)
	}
	bjId, _ := elem1.GetAttribute("value")

	elem2, err := wd.FindElement(selenium.ByXPATH, "//ul[@class = 'detail_view']/li/span")
	if err != nil {
		panic(err)
	}
	yymmdd, _ := elem2.Text()

	date := getDate(yymmdd)

	filePath += bjId
	filePath += "_"
	filePath += date
	filePath += ".txt"

	// Get a reference to the text box containing code.
	elem, err := wd.FindElement(selenium.ByID, "stop_screen")
	if err != nil {
		panic(err)
	}
	elem.Click()

	index := 1
	for {
		time.Sleep(5 * time.Second)

		elements, err := wd.FindElements(selenium.ByXPATH, "//div[@class = 'chat_area']/*")

		if err != nil {
			panic(err)
		}
		var records string

		for ; index < len(elements); index++ {
			class_name, _ := elements[index].FindElement(selenium.ByTagName, "dt")
			membership, _ := class_name.GetAttribute("class")
			temp, _ := elements[index].Text()
			records += makeRecord(temp, membership)
		}

		if records != "" {
			WriteToFile(filePath, records)
			WriteToKafka(records)
		}

	}

}

func getDate(yymmdd string) string {
	var ret string

	year := yymmdd[0:4]
	month := yymmdd[5:7]
	day := yymmdd[8:10]

	ret += year
	ret += month
	ret += day

	return ret

}

func makeRecord(record, membership string) string {
	var ret string
	ret = ""
	//var temp string

	index := strings.Index(record, "\n")
	if index > 0 {

		first := record[0:index]
		text := record[index+1:]

		index2 := strings.LastIndex(first, "(")
		index3 := strings.LastIndex(first, ")")

		nickName := first[0:index2]
		id := first[index2+1 : index3]

		ret += `{` + "\n" +
			"\t" + `"id" : "` + id + `"` + "\n" +
			"\t" + `"membership" : "` + membership + `"` + "\n" +
			"\t" + `"nickName : "` + nickName + `"` + "\n" +
			"\t" + `"text : "` + text + `"` + "\n" +
			`},` + "\n"

		//fmt.Println(ret)
	}

	return ret

}

func WriteToKafka(records string) {
	topic := "test"
	partition := 0
	//fmt.Println("111111111111111111111111111")
	conn, err := kafka.DialLeader(context.Background(), "tcp", "localhost:9092", topic, partition)
	//fmt.Println("222222222222222222222222222222")
	if err != nil {
		panic(err)
	}
	//fmt.Println("333333333333333333333333")
	conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
	conn.WriteMessages(
		kafka.Message{Value: []byte(records)},
	)

	conn.Close()
}

func WriteToFile(filePath, record string) {

	f, err := os.OpenFile(filePath, os.O_WRONLY|os.O_APPEND, 0644)
	//f, err := os.Create(filePath)

	if err != nil {
		folderIndex := strings.LastIndex(filePath, "/")
		folderPath := filePath[0:folderIndex]
		fmt.Println("파일생성", folderPath)
		os.MkdirAll(folderPath, os.ModePerm)
		file, err1 := os.OpenFile(filePath, os.O_WRONLY|os.O_APPEND|os.O_CREATE, 0644)
		if err1 != nil {
			fmt.Println("File Open operation failed.")
			return
		}
		defer file.Close()

		return

	}
	defer f.Close()

	f.WriteString(fmt.Sprintf("%s\n", record))
}

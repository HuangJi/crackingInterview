package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
)

func isUpper(c string) bool {
	if c == strings.ToUpper(c) {
		return true
	} else {
		return false
	}
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()

    q, err := strconv.Atoi(strings.TrimSpace(scanner.Text()))
    if err != nil { fmt.Println(err) }

    for i := 0; i < q; i += 1 {
    	scanner.Scan()
    	a := strings.TrimSpace(scanner.Text())
    	scanner.Scan()
    	b := strings.TrimSpace(scanner.Text())
    	
    	// fmt.Println(string(a[2]))
    	// fmt.Println(b)
    	var answer string
    	bIndex := 0
    	endIndex := 0
    	// target := string(b[bIndex])
    	for j := 0; j < len(a); j += 1 {
    		if string(b[bIndex]) == strings.ToUpper(string(a[j])) {
    			// target := b[bIndex + 1]
    			bIndex += 1
    		}
    		if bIndex == len(b) {
    			answer = "YES"
    			endIndex = j
    			break
    		}
    	}
    	for k := endIndex + 1; k < len(a); k += 1 {
			if isUpper(string(a[k])) {
				answer = "NO"
				// break
			}
		}
		// fmt.Println(string(a[endIndex]))
    	if len(answer) == 0 {
    		answer = "NO"
    	}

    	fmt.Println(answer)
    }
    // fmt.Println(isUpper("A"))
}
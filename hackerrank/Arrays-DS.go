package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    scanner.Scan()
    array := strings.Fields(scanner.Text())
    for i := len(array) - 1; i >= 0; i -= 1 {
      fmt.Printf("%v", array[i])
      if i != 0 {
        fmt.Printf(" ")
      }
    }
}

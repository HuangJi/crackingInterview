package main

import (
    "bufio"
    "fmt"
    "os"
    // "strings"
    "strconv"
)

func sliceAtoi(sa []string) ([]int, error) {
    si := make([]int, 0, len(sa))
    for _, a := range sa {
        i, err := strconv.Atoi(a)
        if err != nil {
            return si, err
        }
        si = append(si, i)
    }
    return si, nil
}

func printFlat (array ...int) {
    for i := 0; i < len(array); i += 1 {
        if i != len(array) - 1 {
            fmt.Printf("%d ", array[i])
        } else {
            fmt.Printf("%d", array[i])
        }
    }
    fmt.Println()
}

func isPair (s string) bool {
    for i := 0; i < len(s) - 1; i += 1 {
        if s[i] == s[i + 1] {
            return true
        }
    }
    return false
}

func reducePair (s string) string {
    // newString string
    for isPair(s) {
        for i := 0; i < len(s) - 1; i += 1 {
            if s[i] == s[i + 1] {
                s = string(s[0:i]) + string(s[i+2:])
                // fmt.Println(s)
            }
        }
    }
    if len(s) == 0 {
        return "Empty String"    
    } else {
        return s
    }
}


func main() {
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    // scanner.Scan()

    lineSlice := scanner.Text()
    // fmt.Println(string(lineSlice[2]))
    // for reducePair
    fmt.Println(reducePair(lineSlice))
}

package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
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


func main() {
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    scanner.Scan()

    lineSlice := strings.Fields(scanner.Text())
    array, err := sliceAtoi(lineSlice)
    if err != nil {
        fmt.Println(err)
        return
    }
    // fmt.Println(array)
    for i := 1; i < len(array); i += 1 {
        flag := 0
        cursor := array[i]
        for j := i - 1; j >= 0; j -= 1 {
            if cursor <= array[j] {
                flag = 1
                array[j + 1] = array[j]
            } else {
                array[j + 1] = cursor
                flag = 0
                break
            }
            // printFlat(array...)
        }
        if flag == 1 {
            array[0] = cursor     
        }
        printFlat(array...)
    }
    // printFlat(array...)
}

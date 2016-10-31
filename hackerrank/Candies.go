package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
    "strconv"
)

func max(a, b int) int {
    if a >= b { 
        return a 
    } else {
        return b
    }
}

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

func findMax(list []int) int {
    max := list[0]
    for _, value := range list {
        if value > max {
            max = value 
        }
    }
    return max
}

func findMin(list []int) int {
    min := list[0]
    for _, value := range list {
        if value < min {
            min = value 
        }
    }
    return min
}

func main() {
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()

    n, err := strconv.Atoi(strings.TrimSpace(scanner.Text()))
    if err != nil { fmt.Println(err) }

    list := []int{}
    for i := 0; i < n; i += 1 {
        scanner.Scan()
        
        rating, err := strconv.Atoi(strings.TrimSpace(scanner.Text()))
        if err != nil { fmt.Println(err) }

        list = append(list, rating)
    }
    candyTable := make([]int, n)
    for i := 0; i < len(candyTable); i += 1 { candyTable[i] = 1 }

    for i := 1; i < len(candyTable); i += 1 {
        if list[i - 1] < list[i] {
            candyTable[i] = candyTable[i - 1] + 1
        }
    }

    for i := len(candyTable) - 1; i > 0; i -= 1 {
        if (list[i - 1] > list[i]) {
            candyTable[i - 1] = max(candyTable[i] + 1, candyTable[i - 1])
        }
    }
    sum := 0
    for _, num := range candyTable {
        sum += num
    }
    fmt.Println(sum)
}

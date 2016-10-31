package main

import (
	"bufio"
	"os"
	"fmt"
	"strconv"
	"strings"
	"sync"
	"errors"
)

type stack struct {
     lock sync.Mutex // you don't have to do this if you don't want thread safety
     s []int
}

func NewStack() *stack {
    return &stack {sync.Mutex{}, make([]int,0), }
}

func (s *stack) Push(v int) {
    s.lock.Lock()
    defer s.lock.Unlock()

    s.s = append(s.s, v)
}

func (s *stack) Pop() (int, error) {
    s.lock.Lock()
    defer s.lock.Unlock()


    l := len(s.s)
    if l == 0 {
        return 0, errors.New("Empty Stack")
    }

    res := s.s[l-1]
    s.s = s.s[:l-1]
    return res, nil
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

func main() {
	 //Enter your code here. Read input from STDIN. Print output to STDOUT
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	n, err := strconv.Atoi(strings.TrimSpace(scanner.Text()))
    if err != nil { fmt.Println(err) }
    stack := NewStack()
    for i := 0; i < n; i += 1 {
        scanner.Scan()
        
        lineSlice := strings.Fields(scanner.Text())
	    array, err := sliceAtoi(lineSlice)
	    if err != nil {
	        fmt.Println(err)
	    }
	    // fmt.Println(array)
	    if array[0] == 1 {
	    	// fmt.Println("push", array[1])
	    	stack.Push(array[1])
	    } else if array[0] == 2 {
	    	// fmt.Println("delete")
	    	stack.Pop()
	    } else {
	    	// fmt.Println("print")
	    	max := 0
	    	for _, e := range stack.s {
	    		if max < e { max = e }
	    	}
	    	fmt.Println(max)
	    }
        // list = append(list, rating)
    }
}
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
     s []string
}

func NewStack() *stack {
    return &stack {sync.Mutex{}, make([]string,0), }
}

func (s *stack) Push(v string) {
    s.lock.Lock()
    defer s.lock.Unlock()

    s.s = append(s.s, v)
}

func (s *stack) Pop() (string, error) {
    s.lock.Lock()
    defer s.lock.Unlock()


    l := len(s.s)
    if l == 0 {
        return "0", errors.New("Empty Stack")
    }

    res := s.s[l-1]
    s.s = s.s[:l-1]
    return res, nil
}

func (s *stack) Top() string {
    s.lock.Lock()
    defer s.lock.Unlock()

    return s.s[len(s.s) - 1]
}

func isMatch(a, b string) bool {
    if a == "{" {
        if b == "}" {
            return true
        }
    } else if a == "[" {
        if b == "]" {
            return true
        }
    } else if a == "(" {
        if b == ")" {
            return true
        }
    }
    return false
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
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	n, err := strconv.Atoi(strings.TrimSpace(scanner.Text()))
    if err != nil { fmt.Println(err) }
    for i := 0; i < n; i += 1 {
        stack := NewStack()
        scanner.Scan()
        bracket := scanner.Text()
        for j := 0; j < len(bracket); j += 1 {
            if len(stack.s) > 0 {
                if isMatch(stack.Top(), string(bracket[j])) {
                    stack.Pop()
                } else {
                    stack.Push(string(bracket[j]))
                }
            } else {
                stack.Push(string(bracket[j]))       
            }
        }
        if len(stack.s) != 0 {
            fmt.Println("NO")
        } else {
            fmt.Println("YES")
        }
    }
}
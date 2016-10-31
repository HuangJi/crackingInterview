#!/bin/python

import sys
import os

# Complete the function below.

def isMatch(s1, s2):
    if s2 is '}':
        if s1 is '{':
            return True
    elif s2 is ']':
        if s1 is '[':
            return True
    elif s2 is ')':
        if s1 is '(':
            return True
    return False

def isBracesBalanced(value):
    # print value[0]
    stack = []
    for i in xrange(0, len(value)):
        stack.append(value[i])

    output = []
    while len(stack) is not 0:
        print output
        e = stack.pop()
        if (len(output) is not 0):
            if not isMatch(e, output[0]):
                output.insert(0, e)
            else:

        else:
            output.insert(0, e)
        # print stack

    # print stack
    # stack.pop()
    # print stack
    # print isMatch('[', ']')
    # print isMatch('[', '}')
    # print isMatch('(', ')')
    # list
    return 0



# f = open(os.environ['OUTPUT_PATH'], 'w')

try:
    _value = raw_input()
except:
    _value = None

res = isBracesBalanced(_value)
print res
# f.write(str(int(res)) + "\n")
#
# f.close()

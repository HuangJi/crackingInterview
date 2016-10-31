#!/bin/python

import sys


t = int(raw_input().strip())
for a0 in xrange(t):
    n,k = raw_input().strip().split(' ')
    n,k = [int(n),int(k)]
    a = map(int,raw_input().strip().split(' '))
    # threshold = n / 2
    count = 0
    for arrival_time in a:
        if arrival_time <= 0:
            count += 1
    if count < k:
        print 'YES'
    else:
        print 'NO'
    # print a, threshold

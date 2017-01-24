#!/bin/python3

import sys


s = raw_input().strip()
# print s
count = 1
for c in s:
	if c.isupper():
		count += 1

print count
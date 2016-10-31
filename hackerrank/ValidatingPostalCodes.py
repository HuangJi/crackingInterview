# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys

passcode = int(raw_input().strip())
# print passcode

case = passcode >= 100000 and passcode <= 999999 ? 'a':'b'
print case

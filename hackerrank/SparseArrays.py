# Enter your code here. Read input from STDIN. Print output to STDOUT

n = int(raw_input().strip())
dictionary = {}

for i in xrange(0, n):
    string = raw_input().strip()
    if string in dictionary:
        dictionary[string] += 1
    else:
        dictionary[string] = 1

q = int(raw_input().strip())

for i in xrange(0, q):
    query = raw_input().strip()
    if query in dictionary:
        print dictionary[query]
    else:
        print 0

import sys

q = int(raw_input().strip())

for m in xrange(0, q):
    n = int(raw_input().strip())
    matrix = []
    for i in xrange(0, 2 * n):
    	matrix.append(map(int, raw_input().strip().split(' ')))
    r = 2 * n - 1
    sum = 0
    for p in xrange(0, n):
        for q in xrange(0, n):
            i, j = r - p, r - q
            sum += max(matrix[p][q], matrix[p][j] ,matrix[i][q] ,matrix[i][j])
    print sum
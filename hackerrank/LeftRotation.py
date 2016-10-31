# Enter your code here. Read input from STDIN. Print output to STDOUT

def get_new_index(index, d, n):
    delta = index - d
    while delta < 0:
        delta += n
    new_index = delta % n
    return new_index

n,d = raw_input().strip().split(' ')
n,d = [int(n),int(d)]

list = raw_input().strip().split(' ')
answer_list = [None] * n

for i in xrange(0, n):
    # print answer_list
    element = list[i]
    answer_list[get_new_index(i, d, n)] = element

# print answer_list
for i in xrange(0 , n):
    print answer_list[i],

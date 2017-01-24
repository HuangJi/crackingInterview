# def cutString(string, count):
#     if len(string) == 1:
#         return 'no', count
#     else:
#         for i in xrange(0, len(string) - 1):
#             if string[i] == string[i + 1]:
#                 string = string[:i] + string[i + 1:]
#                 count += 1
#                 return string, count
#         return 'no', count

# T = int(raw_input().strip())
# for t in xrange(0, T):
#     string = raw_input().strip()
#     flag = True
#     count = 0
#     while flag:
#         string, count = cutString(string, count)
#         if string == 'no':
#             flag = False
#     print count


T = int(raw_input().strip())
for t in xrange(0, T):
    string = raw_input().strip()
    count = 0
    sum = 0
    for i in xrange(0, len(string) - 1):
        if string[i] == string[i + 1]:
            count += 1
        else:
            sum += count
            count = 0
    if count != 0:
        sum += count
    print sum
import hashlib

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.count = 1

def get_hash_index(word):
    return int(hashlib.md5(word).hexdigest(), 16) % 3000

def ransom_note(magazine, rasom):
    hash_table = {}
    for word in magazine:
        index = get_hash_index(word)
        if index in hash_table:
            node = hash_table[index]
            while node.value != word:
                if node.next != None:
                    node = node.next
                else:
                    node.next = Node(word)
                    break
            node.count += 1
        else:
            hash_table[index] = Node(word)

    for word in rasom:
        index = get_hash_index(word)
        if index in hash_table:
            node = hash_table[index]
            if node.value == word:
                if node.count == 0:
                    return False
                node.count -= 1
                continue
            else:
                flag = True
                while node.value != word:
                    if node.next != None:
                        node = node.next
                    else:
                        flag = False
                if not flag:
                    return False
                else: 
                    if node.count == 0:
                        return False
                    node.count -= 1
        else:
            return False
    return True

m, n = map(int, raw_input().strip().split(' '))
magazine = raw_input().strip().split(' ')
ransom = raw_input().strip().split(' ')
answer = ransom_note(magazine, ransom)
if(answer):
    print "Yes"
else:
    print "No"

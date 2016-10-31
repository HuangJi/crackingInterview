value = raw_input()
stack = []

leftBrace = {'[', '{', '('}
# rightBrace = {']', '}', ')'}

for brace in value:
    try:
        if brace in leftBrace:
            stack.append(brace)
        elif brace == ']' and stack[-1] == '[' \
             or brace == '}' and stack[-1] == '{' \
             or brace == ')' and stack[-1] == '(':
            stack.pop()
        else:
            return False

    except Exception as e:
        return False

if len(stack) == 0:
    return True
else:
    return False

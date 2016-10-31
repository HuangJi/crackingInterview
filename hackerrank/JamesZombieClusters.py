def zombieClusters(zombies):
    
    def trace(i, j):
        zombies[i][j] = 2
        for i_new, j_new in [(i+1, j), (i-1, j), (i, j+1), (i, j-1)]:
            if 0 <= i_new < len(zombies) and 0 <= j_new < len(zombies[0]):
                if zombies[i_new][j_new] == 1:
                    trace(i_new, j_new)

    result = 0
    for i, row in enumerate(zombies):
        for j, cell in enumerate(row):
            if cell == 1:
                # print(i,j)
                trace(i, j)
                # print(zombies)
                result += 1
    return result

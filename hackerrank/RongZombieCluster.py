def  zombieClusters(zombies):
    clusterIdx = 0
    zombieClusterIdxs = [0] * len(zombies)
    for zombieIdx in xrange(len(zombies)):
        if zombieClusterIdxs[zombieIdx] != 0:
            continue

        clusterIdx += 1
        connectedZombies = [zombieIdx]
        while connectedZombies:
            zi = connectedZombies.pop()

            if zombieClusterIdxs[zi] != 0:
                continue

            zombieClusterIdxs[zi] = clusterIdx

            for zi2 in xrange(len(zombies)):
                if zi != zi2 and zombies[zi][zi2]:
                    connectedZombies.append(zi2)

    return clusterIdx

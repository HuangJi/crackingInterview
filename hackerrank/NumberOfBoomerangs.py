class Solution(object):
    def getDistanceSquare(point1, point2):
        return (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2

    def numberOfBoomerangs(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        hashTable = {}
        for i in xrange(0, len(points)):
            for j in xrange(i + 1, len(points)):
                distance = getDistanceSquare(points[i], points[j])
                if i in hashTable:
                    
                else:

        

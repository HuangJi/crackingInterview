class Solution(object):
    def minMoves(self, nums):
        count = 0
        nums.sort()
        for i in xrange(len(nums) - 1, 0, -1):
            count += nums[i] - nums[0]
        return count

solution = Solution()
solution.minMoves([1,2,3])

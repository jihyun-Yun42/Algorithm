function solution(nums) {
    const n2 = nums.length / 2
    const setArr = [...new Set(nums)]

    if(n2 < setArr.length) {
        return n2
    } else {
        return setArr.length
    }
}
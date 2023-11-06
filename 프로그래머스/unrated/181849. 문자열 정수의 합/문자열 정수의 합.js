function solution(num_str) {
    return num_str.split('').reduce((acc, pre) => acc + Number(pre), 0)
}
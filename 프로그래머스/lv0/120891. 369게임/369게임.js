function solution(order) {
    return Array.from(String(order)).reduce((pre, cur) => pre + (cur == 3 || cur == 6 || cur == 9? 1 : 0),0)
}
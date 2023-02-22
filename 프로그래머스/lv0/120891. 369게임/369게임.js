function solution(order) {
    return Array.from(String(order)).reduce((acc, cur) => acc + (Number(cur) % 3 === 0 && Number(cur) !== 0 ? 1 : 0) ,0)
}
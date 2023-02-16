function solution(n) {
    return Number(Array.from(String(n)).map(i => Number(i)).sort((a,b) => b-a).join(""))
}
function solution(s) {
    // Array.from(s)
    // console.log(Array.from(s)[s.length / 2])
    return Number.isInteger(s.length / 2) ? s[s.length / 2 -1] + s[s.length / 2] : s[Math.floor(s.length / 2)]
}

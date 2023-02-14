function solution(s) {
    let a = s.length % 2
    if (a == 0) {
        return s[s.length / 2 - 1] + s[s.length / 2]
    } else {
        return s[Math.floor(s.length / 2)]
    }
}
function solution(s) {
    // return (s.length !== 4 && s.length !== 6) ? false : (isNaN(Number(s))) ? false : true
    return s.indexOf("e") == -1 && Number(s) >= 0 && (s.length === 4 || s.length === 6)
}
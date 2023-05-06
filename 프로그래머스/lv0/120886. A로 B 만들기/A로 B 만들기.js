function solution(before, after) {
    return Array.from(before).sort().join('') ===  Array.from(after).sort().join('') ? 1 : 0
}
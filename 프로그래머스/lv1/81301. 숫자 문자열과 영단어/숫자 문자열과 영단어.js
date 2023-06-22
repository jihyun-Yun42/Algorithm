function solution(s) {
    const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i = 0; i <= 9; i++) {
        s = s.split(number[i]).join(i)
    }
    return Number(s)
}
function solution(a, b, n) {
    let empties = n
    let getCoke = 0
    while(empties >= a) {
        if(Number.isInteger(empties / a)) {
            getCoke = getCoke + empties / a * b
            empties = empties / a * b
        } else {
            getCoke = getCoke + parseInt(empties / a) * b
            empties = parseInt(empties / a) * b + empties % a
        }
    }
    return getCoke
}
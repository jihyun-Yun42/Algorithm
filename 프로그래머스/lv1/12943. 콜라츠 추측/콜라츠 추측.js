function solution(num) {
    for(let i = 0; i <= 500; i++) {
        if (i === 500) {
            return -1
        } else if (num == 1){
            return i
        } else if (num % 2 === 0) {
            num = num / 2
        } else if (num % 2 == 1) {
            num = num * 3 + 1
        }
    }
}
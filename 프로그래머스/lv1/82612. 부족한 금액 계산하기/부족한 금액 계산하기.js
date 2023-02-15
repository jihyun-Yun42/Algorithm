function solution(price, money, count) {
    let a = 0
    for (let i = 0; i <= count; i++) {
        a += (price * i)
    }
    return (a - money) > 0 ? a - money : 0
}
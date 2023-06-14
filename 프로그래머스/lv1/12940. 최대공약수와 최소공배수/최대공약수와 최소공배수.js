function solution(n, m) {
    const num = [n, m]
    num.sort((a,b) => a - b)
    const [min, max] = num
    let number = 1
    for(let i = min; i > 0; i--) {
        if(max % i === 0 && min % i === 0) {
            number = i
            break
        }
    }
    return [number, n * m / number]
}
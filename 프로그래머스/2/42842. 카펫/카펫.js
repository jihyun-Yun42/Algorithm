function solution(brown, yellow) {
    const yellowTwoWidth = (brown - 4) / 2
    const yellowArr = []
    
    for(let i = 1; i <= yellow; i++) {
        if(yellow % i === 0) {
            yellowArr.push(i)
        }
        if(yellowArr.includes(yellowTwoWidth - i) && yellowArr.includes(i)) {
            return [Math.max(yellowTwoWidth - i, i) + 2, Math.min(yellowTwoWidth - i, i) + 2]
            break
        }
    }
}
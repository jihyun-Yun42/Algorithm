function solution(d, budget) {
    const arr = d.sort((a, b) => a-b)
    for(let i = 0; i < d.length; i++) {
        budget -= arr[i]
        if(budget === 0) {
            return i + 1
        } else if(budget < 0) {
            return i
        }
    }
    return d.length
}
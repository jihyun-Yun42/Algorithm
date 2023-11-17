function solution(n, lost, reserve) {
    const newReserve = reserve.filter(item => !lost.includes(item)).sort((a,b) => a-b)
    const newLost = lost.filter(item => !reserve.includes(item)).sort((a,b) => a-b)
    
    return newLost.reduce((acc, pre) => {
        const index = newReserve.findIndex(item => item === (pre - 1) || item ===  (pre + 1))
        if(index >= 0) {
            newReserve.splice(index, 1)
            return acc
        } else {
            return acc - 1
        }
    }, n)
}
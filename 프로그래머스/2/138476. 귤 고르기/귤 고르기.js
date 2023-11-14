function solution(k, tangerine) {
    const tangSize = {}
    
    tangerine.forEach(tang => {
        if(tang in tangSize) {
            tangSize[tang] = tangSize[tang]+1
        } else {
            tangSize[tang] = 1
        }
    })
    const sortTangSize = Object.entries(tangSize).sort((a, b) => b[1] - a[1])
    let sum = 0
    let count = 0
    for(let i = 0; i < sortTangSize.length; i++) {
        if(sum < k) {
            sum += sortTangSize[i][1]
            count++
        }
    }
    return count
}
function solution(k, m, score) {
    let applepay = 0
    let newAppleScore = score.sort((a, b) => b - a)
    
    // while(m < newAppleScore.length) {
    //     const appleBox = newAppleScore.slice(0, m)
    //     console.log(m <= newAppleScore.length)
    //     applepay = applepay + appleBox[appleBox.length - 1] * m
    // }
    
    for(let i = m; i <= newAppleScore.length; i = i+m) {
        applepay += newAppleScore[i - 1] * m
    }
    
    return applepay
}
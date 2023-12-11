function solution(answers) {
    const one = [1,2,3,4,5]
    const two = [2,1,2,3,2,4,2,5]
    const three = [3,3,1,1,2,2,4,4,5,5]
    
    let oneRight = 0
    let twoRight = 0
    let threeRight = 0
    
    answers.forEach((e, idx) => {
        if(e === one[idx % one.length]) oneRight++
        if(e === two[idx % two.length]) twoRight++
        if(e === three[idx % three.length]) threeRight++
    })
    
    const answer = []
    const maxScore = Math.max(oneRight, twoRight, threeRight)
    
    if(maxScore === oneRight) answer.push(1)
    if(maxScore === twoRight) answer.push(2)
    if(maxScore === threeRight) answer.push(3)
    
    return answer
}
function solution(progresses, speeds) {
    const dateArr = progresses.map((item, index) => Math.ceil((100 - item) / speeds[index]))
    console.log('dateArr',dateArr)
    const answer = []
    let count = 1
    let stack = []
    for(let i = 0; i < dateArr.length; i++) {
        if(stack.length === 0) {
            stack.push(dateArr[i])
        }
        else if(stack[0] >= dateArr[i]) {
            count++
        }
        else {
            answer.push(count)
            count = 1
            stack.pop()
            stack.push(dateArr[i])
        }
        
        if(i === (dateArr.length -1)) {
            answer.push(count)
        }
    }
    
    return answer
}
function solution(s) {
    let result = 0
    for(let i = 0; i < s.length; i++) {
        const newStr = s
        const frontStr = newStr.substr(0, i)
        const newString = newStr.substring(i, newStr.length) + frontStr
        
        const stackArr = []
        
        for(let str of newString) {
            if(str === ']' && stackArr[stackArr.length - 1] === '['){
                stackArr.pop()
            } else if(str === '}' && stackArr[stackArr.length - 1] === '{') {
                stackArr.pop()
            } else if(str === ')' && stackArr[stackArr.length - 1] === '(') {
                stackArr.pop()
            } else {
                stackArr.push(str)
            }
        }
        
        if(stackArr.length === 0) {
            result++
        }
    }
    return result
}
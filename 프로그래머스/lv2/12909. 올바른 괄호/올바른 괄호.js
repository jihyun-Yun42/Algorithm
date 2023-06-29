function solution(s){
    if(s[0] === ")") {
        return false
    }
    const arr = s.split('')
    let num = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "(") {
            num+= 1
        } else if(arr[i] === ")") {
            num-= 1
        }
        
        if(num < 0) {
            return false
        }
    }
    if(num === 0) {
        return true
    } else {
        return false
    }
}
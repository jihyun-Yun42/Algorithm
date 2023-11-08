function solution (s) {
    let xArr = [];
    let yArr = [];
    let result = 0
    
    for(let a of s) {
        if(xArr.length !== 0 && xArr.length === yArr.length) {
            xArr = []
            yArr = []
            result++
            
            xArr.push(a)
        } else if(xArr.length === 0 || xArr[0] === a) {
            xArr.push(a)
        } else {
            yArr.push(a)
        }
    }
    
    if(xArr.length !== 0) {
        result++
    }
    return result
}
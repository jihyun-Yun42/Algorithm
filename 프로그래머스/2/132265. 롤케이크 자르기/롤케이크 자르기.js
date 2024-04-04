function solution(topping) {
    const firstTopping = {}
    const secondTopping = {}
    let firstCount = 0
    let secondCount = 0
    let totalCount = 0
    
    for(let i = 0; i < topping.length; i++){
        if(topping[i] in firstTopping) {
            firstTopping[topping[i]] += 1
        } else {
            firstTopping[topping[i]] = 1
            firstCount++
        }
    }
    
    for(let i = 0; i < topping.length; i++) {
        if(topping[i] in secondTopping) {
            secondTopping[topping[i]] += 1
            firstTopping[topping[i]] -= 1
        } else {
            secondTopping[topping[i]] = 1
            firstTopping[topping[i]] -= 1
            secondCount++
        }
        
        if(firstTopping[topping[i]] === 0) {
            firstCount--
        }
        
        if(firstCount === secondCount) {
            totalCount++
        }
    }
    
    return totalCount
} 
function solution(want, number, discount) {
    let answer = 0
    const obj = {}
    want.forEach((item, index) => {
        obj[item] = number[index]
    })
    
    for(let i = 0; i < discount.length - 9; i++) {
        const tenArr = discount.slice(i, i+10)
        const discountObj = {}
        tenArr.forEach(item => {
            discountObj[item] = (discountObj[item] || 0) + 1
        })
        
        const disArr = Object.entries(discountObj).filter(([key, value]) => obj[key] <= value)
        
        if(disArr.length === Object.entries(obj).length) {
            answer++
        }
    }
    return answer
}
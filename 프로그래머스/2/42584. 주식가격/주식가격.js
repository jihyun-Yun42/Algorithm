// function solution(prices) {
//     const answer = prices.map((price, idx) => {
//         return prices.slice(idx+1).reduce((second, target) => second + (price <= target ? 1: 0),0)
//     })
//     return answer
// }


const solution = prices => {
    const answer = []
    
    for(let i = 0; i < prices.length; i++) {
        let second = 0
        if(i === prices.length -1) {
            answer.push(0)
            break
        }
        
        for(let j = i+1; j < prices.length; j++) {
            if(prices[i] <= prices[j]) {
                second++
            } else if (prices[i] > prices[j]) {
                answer.push(second + 1);
                second = 0;
                break;
            }
            if (j === prices.length - 1) {
                answer.push(second);
                second = 0;
            }
        }
    }
    
    return answer
}
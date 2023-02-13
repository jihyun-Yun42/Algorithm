function solution(sizes) {
    let firstSize = [];
    let secondSize = [];
    let total = []
    for(let i = 0; i<sizes.length; i++) {
        total.push(sizes[i].sort((a, b) => a-b));
        firstSize.push(total[i][0]);
        secondSize.push(total[i][1]);
        
    }
    return Math.max(...firstSize) * Math.max(...secondSize) 
}
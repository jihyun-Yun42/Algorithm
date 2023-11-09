function solution(n, words) {
    let count = 1;
    let index = 0;
    
    for(let i = 1; i < words.length; i++) {
        if(i % n === 0) {
            count++
        }
        const firstWord = words[i][0]
        const prevLastWord = words[i-1][words[i-1].length-1]
        
        const prevWords = words.slice(0, i)
        
        if(firstWord !== prevLastWord || prevWords.includes(words[i])) {
            index = i
            break;
        } 
    }
    
    if(index === 0) return [0, 0]
    else {
        
        return [Math.trunc(index % n) + 1, count]
    }
}
function solution(cacheSize, cities) {
    let answer = 0;
    
    const cache = []
    
    for(let i = 0; i < cities.length; i++) {
        const cite = cities[i].toLowerCase()
        const index = cache.indexOf(cite)
        if(index >= 0) {
            cache.splice(index, 1)
            cache.unshift(cite)
            answer++
        } else {
            cache.unshift(cite)
            
            if(cache.length > cacheSize) {                
                cache.pop()
            }
            answer = answer + 5
        }
    }
    return answer
}
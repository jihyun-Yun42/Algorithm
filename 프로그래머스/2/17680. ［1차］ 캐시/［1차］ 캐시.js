function solution(cacheSize, cities) {
    const city = cities.map(a => a.toLowerCase());
    
    let queue = []
    let time = 0
    
    for(let i = 0; i < city.length; i++){
        if(!queue.includes(city[i])){ 
            time+=5
            queue.push(city[i])
            if(queue.length > cacheSize){ 
                queue.shift()
            }
        }
        else{ 
            time++
            let idx = queue.indexOf(city[i])
            queue.splice(idx, 1)
            queue.push(city[i])
        }
    }
    return time
}
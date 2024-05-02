function solution(friends, gifts) {
   let N = friends.length; 
   const nameMap = new Map(); 
   const giftTable = Array.from({length: N}).map(() => new Array(N).fill(0)); 
   const rankInfo = new Array(N).fill(0); 
   const nextMonth = new Array(N).fill(0); 
    
   friends.forEach((name, idx) => {
       nameMap.set(name, idx)
   }) 
    
   gifts.forEach((info) => {
       const [from, to] = info.split(' '); 
       giftTable[nameMap.get(from)][nameMap.get(to)]++; 
   })
   
    for(let i=0; i<N; i++){
        rankInfo[i] = giftTable[i].reduce((a,b) => a+b , 0) 
        for(let j=0; j<N; j++){ 
            rankInfo[i] -= giftTable[j][i]
        }
    }
     for (let i=0; i<N; i++) {
        for (let j=i+1; j<N; j++) {
            if (i===j) continue;
            if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
            if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
            if (giftTable[i][j] === giftTable[j][i]) {
                if (rankInfo[i] > rankInfo[j]) nextMonth[i]++
                if (rankInfo[i] < rankInfo[j]) nextMonth[j]++
            }
        }
    }
    
    return Math.max(...nextMonth)
}
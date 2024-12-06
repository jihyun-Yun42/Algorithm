function solution(n, k) {
    const answer = [];
    
    const getFactFunction = (n) => {
        let fact = 1;
        for(let i = 2; i <= n; i++) fact *= i;
        return (n) => fact/=n;
    }
    
    const getFact = getFactFunction(n);

    const dfs = (k,arr) =>{
        if(arr.length === 0) return;
        
        const fact = getFact(arr.length);
        
        answer.push(arr.splice(Math.ceil(k/fact)-1,1)[0]);
        dfs(k%fact,arr)
    }
    dfs(k,new Array(n).fill(null).map((_,idx)=>idx+1))
    return answer;
}
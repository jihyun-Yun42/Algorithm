function solution(ingredient) {
    let count = 0;
    let arr = []
    for(let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i])
        
        if(arr.at(-4) === 1
            && arr.at(-3) === 2
            && arr.at(-2) === 3
            && arr.at(-1) === 1) {
            arr.splice(arr.length -4, 4)
            count++
        }
    }

    return count;
}
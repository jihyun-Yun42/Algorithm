function solution(numbers, direction) {
    if(direction === "right"){
        numbers.unshift(...numbers.splice(numbers.length-1))
        return numbers
    } else {
        numbers.push(...numbers.splice(0,1))
        return numbers
    }
}
function solution(s){
    let a = s.toLowerCase().split('').filter(i => i === "p").length
    let b = s.toLowerCase().split('').filter(i => i === "y").length
    return (a===b) ? true : false
}
function solution(my_str, n) {
    let answer = []
    const num = my_str.length / n
    for(let i = 0; i < num; i++) {
        answer.push(my_str.substr(0, n));
        my_str = my_str.substr(n, my_str.length)
    }
    return answer
}
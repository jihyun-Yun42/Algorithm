function solution(my_string) {
    let num = my_string.match(/[0-9]+/g)
    if(!num) {
        return 0
    } else {   
        return num.reduce((acc, pre) => acc + Number(pre),0)
    }
}
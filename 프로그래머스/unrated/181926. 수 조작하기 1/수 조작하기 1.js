function solution(n, control) {
    const newArr = control.split('')
    
    for(let a of newArr) {
        switch (a) {
            case 'w':
                n++
                break;
            case 's':
                n--
                break;
            case 'd':
                n +=10
                break;
            case 'a':
                n -= 10
                break
        }
    }
    return n
}
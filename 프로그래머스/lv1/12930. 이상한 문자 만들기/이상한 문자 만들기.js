function solution(s) {
    // console.log(s.split(' '))
    let a = s.split(' ')
    let c = []
    for (let i = 0; i < a.length; i++){
        c[i] = []
        for(let j = 0; j< a[i].length; j++){
            if (j % 2 == 0) {
                c[i] += a[i][j].toUpperCase()
            }else {
                c[i] += a[i][j].toLowerCase()
            }
        }
    }
    // return c.join("")
    console.log(c.join(' '))
    return c.join(' ')
}
function solution(cipher, code) {
    // 첫번째 시도
    // return Array.from(cipher).map((cip, i) => (i+1) % code === 0 ? cip : cip.slice(i, 1)).join('')
    
    //두번째 시도
    // return Array.from(cipher).map((cip, i) => i !== 0 ? cip[code * i] : cip(slice(i,1))).join('')
    
    //세번째 시도
    let answer = []
    for(let i = 0; i<cipher.length; i++) {
        if((i+1) % code == 0) {
            answer.push(cipher[i])
        }
    }
    return answer.join('')
}
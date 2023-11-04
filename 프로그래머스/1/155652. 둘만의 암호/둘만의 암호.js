function solution(s, skip, index) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    
    const skipArr = skip.split('')
    skipArr.map(item => alphabet = alphabet.split(item).join(''))
    
    let answerStr = ''
    for(let i of s) {
        if(i === ' ') {
            answerStr = ' ' + alphabet[aIndex + index]
        } else {
            const aIndex = alphabet.indexOf(i)
            answerStr = answerStr + alphabet[aIndex + index]
        }
    }
    return answerStr
}
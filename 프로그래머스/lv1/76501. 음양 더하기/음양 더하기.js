
function solution(absolutes, signs) {
    signs.forEach((sig, i) => sig === false ? absolutes[i] = -absolutes[i] : absolutes[i] = absolutes[i])
    return absolutes.reduce((a, b) => a+b)
}
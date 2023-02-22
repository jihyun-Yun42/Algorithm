function solution(age) {
    let age962 = String(age).split('')
    let age2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    return age962.map(n => age2[n]).join('');
}
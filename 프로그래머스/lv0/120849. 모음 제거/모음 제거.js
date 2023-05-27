function solution(my_string) {
    return my_string.split('').filter((item, i) => item !== 'a' && item !== 'i' && item !== 'o' && item !== 'e' && item !== 'u' ).join('')
}
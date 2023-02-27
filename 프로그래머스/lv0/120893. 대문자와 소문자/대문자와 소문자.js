function solution(my_string) {
    return [...my_string].map(i=> i.charCodeAt() < 97 ? i.toLowerCase() : i.toUpperCase()).join('')
}
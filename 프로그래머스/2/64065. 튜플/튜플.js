function solution(s) {
    const regExp = /[\{\}]/g;
    const newArr = s.replaceAll(regExp,'').split(',')
    
    const obj = {}
    newArr.forEach(item => obj[item] = (obj[item] || 0) + 1)
    
    const sortObj = Object.entries(obj).sort((a, b) => b[1] - a[1])
    return sortObj.map(([key, value]) => Number(key))
}
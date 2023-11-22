function solution(clothes) {
    const clothesObj = {}
    clothes.forEach(([value, key]) => {
        if(key in clothesObj) clothesObj[key].push(value)
        else clothesObj[key] = [value]
    })

    return Object.values(clothesObj).reduce((acc, pre) => acc * (pre.length + 1), 1) -1
}
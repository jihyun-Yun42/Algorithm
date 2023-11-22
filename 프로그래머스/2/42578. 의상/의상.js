function solution(clothes) {
    const clothesObj = {}
    clothes.forEach(([value, key]) => {
        clothesObj[key] = (clothesObj[key] || 0) + 1
    })

    return Object.values(clothesObj).reduce((acc, pre) => acc * (pre + 1), 1) -1
}
function solution(name, yearning, photo) {
    const nameObj = {}
    name.map((name, index) => nameObj[name] = yearning[index])

    return photo.map((item, index) => {
        return item.reduce((acc, pre) => acc +(name.includes(pre) ? nameObj[pre] : 0),0)      
    })
}
function solution(a, b) {
    const StringAB = String(a) + String(b)
    const StringBA = String(b) + String(a)
    
    return Number(StringAB) > Number(StringBA) ? Number(StringAB) : Number(StringBA)
}
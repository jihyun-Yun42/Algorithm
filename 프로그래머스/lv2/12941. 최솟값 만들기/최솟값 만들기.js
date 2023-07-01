function solution(A,B){
    const newArrA = A.sort((a, b) => a-b)
    const newArrB = B.sort((a, b) => b-a)
    return newArrA.reduce((acc, pre, i) => acc + pre * newArrB[i], 0)
}
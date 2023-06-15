function solution(arr){
    return arr.filter((e, i, arr) => e !== arr[i + 1])
}
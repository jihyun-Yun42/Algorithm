function solution(arr1, arr2) {
    let arr4 = []
    for (let i = 0; i < arr1.length; i++) {
        let arr3 = []
        for(let j = 0; j < arr1[i].length; j++){
            arr3.push(arr1[i][j] + arr2[i][j])
        }
        arr4.push(arr3)
    }
    return arr4
}
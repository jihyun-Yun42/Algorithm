function solution(array, n) {
    array.push(n);
    array.sort((a, b) => a - b);
    let x = array.indexOf(n);
    if (x != 0 && x != array.length - 1) {
        if (array[x] - array[x-1] > array[x+1] - array[x]) {
            return array[x+1];
        } else {
            return array[x-1];
        }
    } else if (x == 0) {
        return array[x+1];
    } else {
        return array[x-1];
    }
}
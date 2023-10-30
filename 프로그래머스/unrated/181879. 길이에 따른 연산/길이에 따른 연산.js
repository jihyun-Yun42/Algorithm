function solution(num_list) {
    if(num_list.length > 10) {
        return num_list.reduce((acc, pre) => acc + pre, 0)
    } else {
        return num_list.reduce((acc, pre) => acc * pre, 1)
    }
}
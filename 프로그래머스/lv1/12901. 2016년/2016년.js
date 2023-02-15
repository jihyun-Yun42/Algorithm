function solution(a, b) {
    let weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    let date = new Date(2016,a-1,b)
    let week = weeks[date.getDay()]
    return week
}
function solution(people, limit) {
    people.sort((a, b) => b-a)
    let boatCount = 0;
    people.forEach(person => {
        if(person + people.at(-1) > limit){
            boatCount++
        }
        else{
            people.pop()
            boatCount++
        }
    })
    return boatCount
}
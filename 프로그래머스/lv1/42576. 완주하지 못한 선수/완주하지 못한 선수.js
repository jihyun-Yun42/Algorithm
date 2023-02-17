function solution(participant, completion) {
    // console.log( participant.map((arr, i)=> (participant.includes(completion[i])) ? delete participant[i] : participant[i]) )
    // console.log(participant.map((arr, i) => arr.includes(completion[i])))
    
//     for(let i = 0; i<participant.length; i++) {
//         return participant.filter(a => !(completion.indexOf(a)))
//     }
    participant.sort()
    completion.sort()
    for(let i = 0; i<participant.length; i++){
        if (participant[i] !== completion[i]) {
            return participant[i]
        }
    }
    
//     완주못한 사람 여러명을 찾을때
//     participantObj = {
        //     "leo" : 1,
        //     "kiki" : 1,
        //     "eden": 1
        // }   
//     participantObj[person]

//      completion.forEach((person)=> participantObj[person]-- )

//       {
//                   "leo" : 1,
//                  "kiki" : 0,
//                      "eden": 0
//         }
}
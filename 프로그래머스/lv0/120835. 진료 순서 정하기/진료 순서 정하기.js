function solution(emergency) {
    const copyEmer = [...emergency].sort((a,b) => b-a )
    return emergency.map((e,i) => copyEmer.indexOf(e) + 1)
}
function solution(players, callings) {
    const playerObject = {}
    players.forEach((item, index) => {
        playerObject[item] = index 
    })
    callings.forEach(item => {
        const idx = playerObject[item]
        const prevPlayer = players[idx-1]
        
        players[idx-1] = item
        players[idx] = prevPlayer
        
        playerObject[item] = idx - 1
        playerObject[prevPlayer] = idx
    })
    const sortPlayer = Object.entries(playerObject).sort((a, b) => a[1] - b[1])
    return sortPlayer.map(([player, idx]) => player)
}
function solution(phone_book) {
    phone_book.sort()
    
    for(let i = 0; i < phone_book.length; i++) {
        let target = phone_book[i]
        for(let j = i+1; j < phone_book.length; j++) {
            if(target === phone_book[j].slice(0, target.length)) {
                return false
            } else {
                break
            }
        }
    }
    return true
}
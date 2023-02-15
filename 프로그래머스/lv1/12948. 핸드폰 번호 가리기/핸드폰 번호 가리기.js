function solution(phone_number) {
    let phone = phone_number.split('')
    phone.splice(0, phone_number.length-4, '*'.repeat(phone_number.length-4))
    return phone.join('')
}
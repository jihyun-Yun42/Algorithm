function solution(phone_number) {
    let phone = [...phone_number]
    phone.splice(0, phone_number.length-4, '*'.repeat(phone_number.length-4))
    return phone.join('')
}
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    let a = Number(n[0]), b = Number(n[1]);
    a = '*'.repeat(a)
    for (let i = 0; i < b; i++) {
        i * console.log(a);
    }
    
    
    
});
// Pola ke-1

for (let x=4; x>=0 ;x--) {
    let temp = ""
    for (let y=0; y<5; y++) {
        if (y != x) {
            temp += "* "
        } else {
            temp += "  "
        }
    }
    console.log(temp)
}

console.log()

// Pola ke-2

for (let x=4; x>=0 ;x--) {
    let temp = ""
    for (let y=0; y<5; y++) {
        if (y != x) {
            temp += "  "
        } else {
            temp += "* "
        }
    }
    console.log(temp)
}
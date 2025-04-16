for (let i = 0; i<=5 ; i++) {
    let temp = ""
    for (let j = 5; j>0 ; j--) {
        if (j > i) {
            temp += " "
        } else if (j <= i) {
            temp += "* "
        }
    }
    console.log(temp)
}
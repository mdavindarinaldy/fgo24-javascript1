for (let i = 0; i<5; i++) {
    let temp = ""
    for (let j=0; j<5; j++) {
        if (i==0 || i==4 || j==0 || j==4) {
            temp += "* "
        } else {
            temp += "  "
        }
    }
    console.log(temp)
}
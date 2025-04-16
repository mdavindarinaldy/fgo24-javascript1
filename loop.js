let j = 5
for (let i=1;i<=j;i++){
    if (i == 4) {
        console.log("fazztrack")
    } else {
        console.log(i)
    }
}

let x = 5
while (x > 0) {
    let temp = ""
    let y = 0
    while (y < x) {
        temp += "* "
        y++;
    }
    console.log(temp)
    x--;
}
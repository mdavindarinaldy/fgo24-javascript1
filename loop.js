// FOR

console.log("Perulangan For")

let j = 5
for (let i=1;i<=j;i++){
    if (i == 4) {
        console.log("fazztrack")
    } else {
        console.log(i)
    }
}

for (let fi = 5; fi > 0; fi--) {
    let temp = ""
    for (let fj = 0; fj < fi; fj++) {
        temp += "* "
    }
    console.log(temp)
}

for (let fx = 0; fx <= 5; fx++) {
    let temp = ""
    for (let fy = 0; fy < fx; fy++) {
        temp += "* "
    }
    console.log(temp)
}

// WHILE

console.log("Perulangan While")

let wx = 0
while (wx < 5) {
    wx++
    if (wx == 4) {
        console.log("fazztrack")
    } else {
        console.log(wx)
    }
}

let x = 5
while (x > 0) {
    let temp = ""
    let y = 0
    while (y < x) {
        temp += "* "
        y++
    }
    console.log(temp)
    x--
}

let k = 0
while (k <= 5) {
    let temp = ""
    let l = 0
    while (l < k) {
        temp += "* "
        l++
    }
    console.log(temp)
    k++
}

// DO WHILE

console.log("Perulangan Do While")

let dx = 1
do {
    switch (dx) {
        case 4:
            console.log("fazztrack");
            break;
        default:
            console.log(dx)    
    }
    dx++
} while (dx <= 5)

let di = 5
do {
    let temp = ""
    let dj = 0
    do {
        temp += "* "
        dj++
    } while(dj < di)
    di--
    console.log(temp)
} while(di > 0)

let dk = 0
do {
    let temp = ""
    let dl = 0
    do {
        temp += "* "
        dl++
    } while(dl < dk)
    dk++
    console.log(temp)
} while(dk <= 5)
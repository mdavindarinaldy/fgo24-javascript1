const studentData = [
    {
        name: "John",
        score: 80
    }, {
        name: "Denis",
        score: 60
    }, {
        name: "Arie",
        score: 99
    }, {
        name: "Jane",
        score: 85
    }, {
        name: "Ed",
        score: 90
    }
]

let total = 0
let max = {
    score: 0
}
let min = {
    score: 100
}

for (let i=0; i < studentData.length; i++) {
    total += studentData[i].score
    if (max.score < studentData[i].score) {
        max = studentData[i]
    }
    if (min.score > studentData[i].score) {
        min = studentData[i]
    }
} 
console.log("Rata-rata score: "+total/studentData.length)
console.log(`Siswa dengan nama ${max.name} mendapatkan score tertinggi dengan score ${max.score}`)
console.log(`Siswa dengan nama ${min.name} mendapatkan score tertinggi dengan score ${min.score}`)
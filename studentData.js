const studentData = [
    {
        name: "John",
        score: 80
    }, {
        name: "Jane",
        score: 85
    }, {
        name: "Ed",
        score: 90
    }
]

let total = 0;
let min = 100;
let max = 0;

for (let i=0; i < studentData.length; i++) {
    total += studentData[i].score
    if (studentData[i].score < min) {
        min = studentData[i].score
    }
    if (studentData[i].score > max) {
        max = studentData[i].score
    }
}

let result = total / studentData.length
console.log("Rata-rata score: "+result)

for (let j=0; j<studentData.length; j++) {
    if (min == studentData[j].score) {
        console.log("Siswa dengan nilai terendah adalah "+ studentData[j].name)
    }
    if (max == studentData[j].score) {
        console.log("Siswa dengan nilai tertinggi adalah "+ studentData[j].name)
    }
}
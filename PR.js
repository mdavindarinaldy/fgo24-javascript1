const transactionData = [
    {
        itemName: "Kemeja",
        price: 500000,
        date: new Date("2025-01-12")
    }, {
        itemName: "Kaos",
        price: 150000,
        date: new Date("2025-02-01")
    }, {
        itemName: "Daster",
        price: 75000,
        date: new Date("2024-12-20")
    }, {
        itemName: "Rok",
        price: 60000,
        date: new Date("2025-01-24")
    }, {
        itemName: "Sepatu",
        price: 375000,
        date: new Date("2025-02-07")
    }, {
        itemName: "Sandal",
        price: 16000,
        date: new Date("2025-03-21")
    }, {
        itemName: "Jaket",
        price: 275000,
        date: new Date("2024-11-17")
    }, {
        itemName: "Rompi",
        price: 220000,
        date: new Date("2024-12-19")
    }, {
        itemName: "Sabuk",
        price: 50000,
        date: new Date("2025-01-12")
    }, {
        itemName: "Kerudung",
        price: 130000,
        date: new Date("2024-12-06")
    }
]

let max = {
    price : 0
}
let min = {
    price : 1000000
}

let total = 0

for (let i=0; i<transactionData.length; i++) {
    total += transactionData[i].price
    if (max.price < transactionData[i].price) {
        max = transactionData[i]
    } 
    if (min.price > transactionData[i].price) {
        min = transactionData[i]
    }
}

let priceDiff = 10000000 
let nearestPrice = {}
let average = total / transactionData.length
for (let i=0; i<transactionData.length; i++) {
    if (priceDiff > Math.abs(transactionData[i].price-average)) {
        nearestPrice = transactionData[i]
    }
}

console.log(`Transaksi dengan nominal tertinggi adalah pembelian ${max.itemName} dengan harga ${max.price}`)
console.log(`Transaksi dengan nominal terrendah adalah pembelian ${min.itemName} dengan tanggal transaksi ${min.date}`)
console.log(`Barang dengan harga yang paling mendekati nilai rata-rata transaksi adalah ${nearestPrice.itemName} dengan harga ${nearestPrice.price} dan nilai rata-rata ${average}`)


let  names = ["Mehmet", "Emin", "KILIÇ"]
let numbers = [1, 2, 3]

//exports.names = names
//exports.numbers = numbers



let greeting = (name) => {
    console.log(`Merhaba ${name}`)
}

module.exports = {
    isim:names,
    yas:numbers,
    selamla:greeting
}
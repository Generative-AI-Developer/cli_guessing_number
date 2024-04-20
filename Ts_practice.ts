
const numbers:number[] = [1,3,4,5,6]
console.log(numbers)

let fruites: string[] = ['Mango','Orange','Banana','Apple']
console.log(fruites)

let newFruiteList = fruites.push("kiwi")
console.log(newFruiteList)
console.log(fruites)

for (let index = 0; index < fruites.length; index++) {
    console.log(`tpn:${fruites[index]}:01-12-2023:16-04-2024:`) ;
    
}

for (const fruite of fruites) {
    console.log(fruite)



}

    // Map and filter methods

    const doubleNumber: number[] = numbers.map((curVal)=>curVal)
    console.log(doubleNumber)


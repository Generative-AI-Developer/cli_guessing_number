import inquirer from 'inquirer'
// computer will generate a random no
// use input for guessing no
// compare user input with rando no

const random_number = Math.floor(Math.random()*6+1)

async function Guessing() {
const answar = await inquirer.prompt([

    {
        name: "useGuessedNumber",
        type:"number",
        message: "Please guess a Number Between 1-6"
    }
    
])


console.log(answar)
if(answar.useGuessedNumber===random_number){
console.log("Congritulation You Guessed right Number")

}

if(answar.useGuessedNumber>random_number){
    console.log("The  Number is lesser ")
    Guessing()
}
if(answar.useGuessedNumber<random_number){
    console.log("The Number no is greater")
    Guessing()
}

}
Guessing()
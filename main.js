import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    INR: 74,
    PKR: 280
};
const answar = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Enter From Curruncy",
        choices: ["USD", "ERU", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter To Curruncy",
        choices: ["USD", "ERU", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your amount",
        type: "number"
    }
]);
let from_amount = currency[answar.from];
let to_amount = currency[answar.to];
let user_amout = answar.amount;
console.log(from_amount);
console.log(to_amount);
console.log(user_amout);

console.log("THis is promises")

let prom1 = new Promise((resolve, reject)=>{
 let a = Math.random();
 if (a<0.5) {
    reject("No random number was not supporting")
 }
 else{
    setTimeout(() => {
        console.log("Yes I am done")
        resolve("Asif")
    }, 3000);
 }

})

prom1.then((x)=>{
    console.log(x)
}).catch((err)=>{
    console.log(err)
})
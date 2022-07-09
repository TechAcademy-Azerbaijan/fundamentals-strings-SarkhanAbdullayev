let str = "Hello world! I learn to code."
let count = 0

for(let el of str){
    if(el == "!" || el == "."){
        count++
    }
}console.log(count);

task 5

let str = "+5-2+4-m/n*2:4"
let count = 0

for(let el of str){
    if(el == "+" || el == "-" || el == "*"){
        count++
    }
}console.log(count);

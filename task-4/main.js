let str = "Hello world! I learn to code."
let count = 0

for(let el of str){
    if(el == "!" || el == "."){
        count++
    }
}console.log(count);

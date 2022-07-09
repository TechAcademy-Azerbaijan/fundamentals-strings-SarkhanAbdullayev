let str = "Hello world! Hello,    country!"
let arr = str.split(" ")
let count = 0

for(let el of arr){
    if(el != ""){
        count++
    }
}console.log(count);

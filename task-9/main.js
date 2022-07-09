let s = "This is a cat sitting on a table"
s = s.toLowerCase()
let c = "t"
let count = 0

for(let el of s){
    if(el == c){
        count++
    }
}
console.log(count);

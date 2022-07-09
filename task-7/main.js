let str = "kpkkp"
let arr = str.split("p")
let max = 0

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i].length > max){
        max = arr[i].length
    }
}
console.log(max);

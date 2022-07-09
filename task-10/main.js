let str = "sd fsdf sdfsd f fd"
let indexes = []

for( let i = 0 ; i < str.length ; i++ ){
    if(str[i] == " "){
        indexes.push(i);
    }
}
let first = indexes[0]
let last = indexes[indexes.length - 1]

if(first == undefined && last == undefined){
    console.log("-1");
}
else{
    console.log(first);
    console.log(last);
}

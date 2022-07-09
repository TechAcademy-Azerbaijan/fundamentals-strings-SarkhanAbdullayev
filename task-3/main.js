let n = "255555222"
let five = 0
let two = 0

for(let el of n){
    if( el == 5 ){
        five++;
    }
    else{ two++
    }
}
if( five > two ){
    console.log("5");
}
else if( two > five ){
    console.log("2");
}
else{
    console.log("=");
}

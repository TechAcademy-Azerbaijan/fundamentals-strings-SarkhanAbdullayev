let n = "328"

let first = n[0]
let last = n[n.length - 1]

if( first > last ){
    console.log(first);
}
else if( last > first ){
    console.log(last);
}
else{
    console.log("=");
}

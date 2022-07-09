let str = "sdfsdfs dfs dffd"
let indexes = []

for( let i = 0 ; i < str.length ; i++ ){
    if(str[i] == " "){
        indexes.push(i);
    }
}
let last = indexes[indexes.length - 1]

if(indexes.length > 0){
    console.log(indexes[0]);
    console.log(last);
}
else{
    console.log("-1");
}

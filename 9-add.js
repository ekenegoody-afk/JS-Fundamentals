const arg1 = process.argv[2];
const arg2 = process.argv[3];

function add(a,b){
    return a+b;
}

if(!isNaN(arg1)&&!isNaN(arg2)){
    let answer = add(Number(arg1),Number(arg2));
    console.log(answer)
} else{
    console.log("NaN");
}


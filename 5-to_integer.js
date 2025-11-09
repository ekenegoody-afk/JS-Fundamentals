let arg = process.argv[2];
if(!isNaN(arg)){
    arg=Number(arg);
    console.log(`My number: ${arg}`);
}else{
    console.log('Not a number');
}
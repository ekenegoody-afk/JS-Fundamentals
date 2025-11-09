const arg = process.argv[2];
const num = Number(arg);

if (!isNaN(num) && num > 0) { 
    let count = num;
    while (count > 0) {
        console.log("C is fun");
        count--;
    }
} else {
    console.log("Not a number");
}

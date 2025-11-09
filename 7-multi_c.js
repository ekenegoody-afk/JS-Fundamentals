const arg = process.argv[2];
const num = Number(arg);

if (!isNaN(num)) { 
    let count = num;
    while (count > 0) {
        console.log("C is fun");
        count--;
    }
} 
else {
    console.log("Missing number of occurrences");
}

const fs = require('fs');
const filepath = 'text.txt';
fs.readFile(filepath, {encoding: 'utf8'}, (err, data) => {
    console.log(data);
});

let sum = 0;
for(let i=1; i<=7; i++){
    sum = sum + i;
}
console.log('Sum: ', sum);
const fs = require('fs');

//Synchronously write data to a file

fs.writeFileSync('example.txt', 'Hello, this is a sample text file.');

//Asynchronously write data to a file

fs.writeFileSync('example.txt', 'This is the updated content of the file.',(err) => {});


// const result =fs.readFileSync('contact.txt', 'utf8');

// console.log(result);

fs.readFile('contact.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
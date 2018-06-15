const lbl = require('line-by-line');

const lr = new lbl('./doc_links/shorterfile.csv', { encoding: 'utf8' });
console.log('connnected to database');

lr.on('error', err => console.log("ERROR OPENING THE CSV FILE"));

console.log('--------------------------------  total lines is ------------------------');
let Q = [];
let allTitles = [];
let counter = 0;
let wholeCounter = 0;
// lr.on('line', (line) => {
//     Q.push(line);
//     if (counter == 3) {
//         lr.pause();
//         allTitles.push(Q);
//         Q.forEach((item, index) => {
//             fetchData(item).then(data => {
//                 saveData(data);
//                 if (index == 3) {
//                     lr.resume();
//                     counter = 0;
//                 }
//             });
//         });
//         Q = [];
//     }
//     counter++;
//     wholeCounter++;
// });

// lr.on('end', () => {
//     Q.forEach((item, index) => {
//         fetchData(item).then(data => {
//             saveData(data);
//         });
//     });
//     console.log('All files parsed and saved to database');
// })
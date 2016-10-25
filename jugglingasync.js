var http = require('http');
var firstString = '';
var secondString = '';
var thirdString = '';

http.get(process.argv[2], (responseOne) => {
    responseOne
    .setEncoding('utf8')
    .on('data', (data) => {
        firstString += data;
    })
    .on('end', () => {
        http.get(process.argv[3], (responseTwo) => {
            responseTwo
            .setEncoding('utf8')
            .on('data', (dataTwo) => {
                secondString += dataTwo;
            })
            .on('end', () => {
                http.get(process.argv[4], (responseThree) => {
                    responseThree
                    .setEncoding('utf8')
                    .on('data', (dataThree) => {
                        thirdString += dataThree;
                    })
                    .on('end', () => {
                        console.log(firstString);
                        console.log(secondString);
                        console.log(thirdString);
                    });
                });
            });
        });
    });
});

import * as readline from 'readline';
import * as fs from 'fs';
import {calculateSum} from './slide.js';

let layers = [];

export const main = () => {
    var rl = readline.createInterface({
        input: fs.createReadStream('numbers.txt')
    });
    
    let lineNo = 0;
    rl.on('line', function (line) {
        if (lineNo > 0) {
            const layer = line.trim().split(' ');
            const parsedLayer = layer.map(number => Number.parseInt(number));
            layers[lineNo - 1] = parsedLayer
        }
        lineNo++;
    }).on('close', function () {
        let nextIndex = null;
        const sum = calculateSum(layers, nextIndex);
        console.log("SUM", sum)
    })
}

main();
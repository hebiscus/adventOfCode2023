import fs from "fs";
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const input = readFile("./fourth/input.txt").split("\n");

let winningPoints = 0;

input.forEach(line => {
    line.trim();
    const splitted = line.split(":");
    const numbers = splitted[1].split("|");
    const myNumbers = numbers[0].match(/\d+/g);
    const winningNumbers = numbers[1].match(/\d+/g);
    let nrOfMatches = 0;
    for (const number of myNumbers) {
        if (winningNumbers.includes(number)) {
            if (nrOfMatches == 0) {
                nrOfMatches += 1;
            } else {
                nrOfMatches *= 2;
            }
        }
    }
    winningPoints += nrOfMatches;
})

console.log(winningPoints);
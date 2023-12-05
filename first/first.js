import fs from "fs";
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const input = readFile("./first/input.txt").split("\n");

const numberHelper = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}

function replacer(oldString) {
    for (const number in numberHelper) {
        if (oldString.includes(number)) {
            oldString = oldString.replaceAll(number, number + numberHelper[number] + number);
        }
    }
    return oldString.replace(/\n/g, '')
}

const getDigits = () => {
    let numbers = [];
    const numberRegex = /^\d$/;
    input.forEach(line => {
        const newLine = replacer(line);
        let firstNumber = undefined;

        for (let i = 0; i < newLine.length; i++) {
            if (numberRegex.test(newLine[i])) {
                firstNumber = newLine[i].toString();
                break
            }
        }

        for (let i = newLine.length - 1; i >= 0; i--) {
            if (numberRegex.test(newLine[i])) {
                const fullNumber = Number(firstNumber + newLine[i].toString());
                numbers.push(fullNumber);
                break
            }
        }
    })
    return numbers.reduce((curr, next) => curr + next)
}
  
console.log(getDigits())

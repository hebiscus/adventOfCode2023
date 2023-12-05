import fs from "fs";
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const input = readFile("./input2.txt").split("\n");

const allPowers = [];

input.forEach(line => {
    line = line.trim();
    const splitted = line.split(":");
    const balls = splitted[1];
    const rounds = balls.split(";");
    const requiredColors = {};
    for (const round of rounds) {
        const sets = round.split(",");
        for (let set of sets) {
            set = set.slice(1);
            const splitted = set.split(" ")
            const numberOfBalls = Number(splitted[0]);
            const color = splitted[1];
            if (!(color in requiredColors)) {
                requiredColors[color] = numberOfBalls
            } else if (numberOfBalls > requiredColors[color]) {
                requiredColors[color] = numberOfBalls;
            }
        }
    }
    const requiredOnly = Object.values(requiredColors);
    allPowers.push(requiredOnly.reduce((curr,next) => curr * next));
})

console.log(allPowers.reduce((curr, next) => curr + next));


import fs from "fs";
const readFile = (path) => fs.readFileSync(path, { encoding: "utf8" });
const input = readFile("./input2.txt").split("\n");

const cubeBag = {
    red: 12,
    green: 13,
    blue: 14
}

const allIds = [];
const impossibleId = [];

input.forEach(line => {
    const splitted = line.split(":");
    const game = splitted[0];
    const balls = splitted[1];
    const rounds = balls.split(";");
    for (const round of rounds) {
        const sets = round.split(",");
        for (let set of sets) {
            set = set.slice(1);
            const splitted = set.split(" ")
            const numberOfBalls = splitted[0];
            const color = splitted[1];
            if (numberOfBalls > cubeBag[color]) {
                impossibleId.push(game);
                break
            }
        }
    }
    allIds.push(game);
})

const possibleGames = allIds.filter(id => !impossibleId.includes(id));
const ids = [];

for (let i = 0; i < possibleGames.length; i++) {
    const splitted = possibleGames[i].split(" ");
    ids.push(Number(splitted[1]));
}

console.log(ids.reduce((curr, next) => curr + next));


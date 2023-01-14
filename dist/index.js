#! /usr/bin/env node
//import inquirer
import inquirer from "inquirer";
//player
let health = 50;
const healthBoast = 15;
let playersAttckEffect = 30;
let playerPower = 20;
//enimes
const enimes = ["Thanos", "loki", "kang", "darkside"];
let enimesPower = 16;
let enimesheath = 50;
let enimesAttckEffect = 25;
//flight rounds
let round = 0;
// game function
async function gameFunc() {
    //user input about name and character
    const userInp = await inquirer.prompt([
        {
            name: "heroName",
            type: "input",
            message: "Enter your Name:",
        },
        {
            name: "character",
            type: "list",
            choices: ["iron man", "thor", "superman", "black panther"],
            message: "Select your hero:",
        },
    ]);
    console.log("\n");
    console.log(`\tName: ${userInp["heroName"]}`);
    console.log(`\tCharacter: ${userInp["character"]}`);
    console.log(`\thealth: ${health}`);
    console.log("\n");
    let run = true;
    while (run) {
        const phases = await inquirer.prompt([
            {
                name: "level",
                type: "list",
                choices: ["fight", "health boast", "exit"],
                message: "select phase:",
            },
        ]);
        if (phases["level"] === "fight") {
            // selecting enemy
            const check = Math.floor(Math.random() * (enimes.length - 0) + 0);
            const enimeyselect = enimes[check];
            console.log("\n");
            console.log(`\tRound ${++round}:fight`);
            console.log(`\t${userInp["character"]} Vs ${enimeyselect}`);
            console.log("\n");
            // for player
            const playerPunches = Math.floor(Math.random() * playerPower) + 1;
            console.log(`Your land ${playerPunches} hits to ${enimeyselect}`);
            health -= Math.floor(Math.random() * enimesAttckEffect);
            //for enemy
            const enimeyPunches = Math.floor(Math.random() * enimesPower) + 1;
            console.log(`Your got hit ${enimeyPunches} by ${enimeyselect}`);
            enimesheath -= Math.floor(Math.random() * playersAttckEffect + 5);
            // player health
            if (health > 0) {
                console.log("your health is", health);
            }
            else {
                console.log("your health is", health);
                console.log("you Dead:you have lost the game");
                break;
            }
            // enemy health
            if (enimesheath > 0) {
                console.log("your enmy health is ", enimesheath);
            }
            else {
                console.log("your enmy health is ", enimesheath);
                console.log("Enemy Dead:you have won the game");
                break;
            }
            console.log("\n");
        }
        if (phases["level"] === "health boast") {
            health += healthBoast;
            console.log("your health is", health);
        }
        if (phases["level"] === "exit") {
            console.log("your health is", health);
            console.log("you have quit the game");
            break;
        }
    }
}
gameFunc();

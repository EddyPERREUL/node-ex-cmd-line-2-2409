/* 
Le programme précedent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réecrivez le programme précedent pour qu'il puisse prendre un argument à son lancement en ligne de commande qui correspondera à l'age de la majorité dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:

% node interMajorityTest.js 21
Un utilisateur francais lancerait le programme avec la commande:

% node interMajorityTest.js 18
Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
*/

'use strict'
import readlineSync from 'readline-sync'
import chalk from 'chalk'

// Welcome phrase
console.log(`Hello, this questionnaire will define if you are allowed to vote`)
// Question about the user's identity
let name = readlineSync.question('1. Please enter your name : ')
let firstName = readlineSync.question('2. Please enter your first name: ')
// Security Check String (user's identity)
if (!isNaN(name) || !isNaN(firstName)) {
    console.log(chalk.red('Error : Letters must be entered'))
    console.log(chalk.blue('Usage : ex ' + chalk.green('"Harry Andrews"')))
    process.exit(1)
}
// Question on the age of the user
let ageQ = readlineSync.question('3. What is your age : ')
let age = Number(ageQ)
// Security Check Number (age of the user)
if (isNaN(age)) {
    console.log(
        chalk.red(
            chalk.red('Error : please enter a number ') + chalk.blue('ex : 18')
        )
    )
    process.exit(1)
}
//Question about the user's country
let country = readlineSync.question(
    '4. What country do you live in ' + chalk.blue('(Ex: us or fr)') + ' : '
)
console.log(country)
console.log(typeof country)
// Security Check (user's country)
/*
if (country != true) {
    console.log(chalk.red('Error : Please enter a value'))
    process.exit(1)
}
if (country != 'us' || country != 'fr') {
    console.log(
        chalk.blue('Usage : Please enter the country as in the example')
    )
    process.exit(1)
}
*/
// Verification of voting authorization
switch (country) {
    case 'us':
        if (age <= 21) {
            console.log(
                chalk.red(
                    `Sorry, ${firstName} ${name}, you are a minor, so you can't vote`
                )
            )
            break
        } else {
            console.log(
                chalk.green(
                    `${firstName} ${name}, you are of legal age, so you can vote`
                )
            )
            break
        }
    case 'fr':
        if (age <= 18) {
            console.log(
                chalk.red(
                    `Sorry, ${firstName} ${name}, you are a minor, so you can't vote`
                )
            )
            break
        } else {
            console.log(
                chalk.green(
                    `${firstName} ${name}, you are of legal age, so you can vote`
                )
            )
            break
        }
}
/*
if (age < 18) {
    console.log(
        chalk.red(
            `Sorry, ${firstName} ${name}, you are a minor, so you can't vote`
        )
    )
} else {
    console.log(
        chalk.green(
            `${firstName} ${name}, you are of legal age, so you can vote`
        )
    )
}
*/

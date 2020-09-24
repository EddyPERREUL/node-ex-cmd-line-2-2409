/* Un état vous demande d'ecrire un petit programme qui vérifit que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter */

'use strict'
import readlineSync from 'readline-sync'
import chalk from 'chalk'

// Welcome phrase
console.log(`Hello, this questionnaire will define if you are allowed to vote`)
// Question about the user's identity
let name = readlineSync.question('1. Please enter your name : ')
let firstName = readlineSync.question('2. Please enter your first name: ')
// Security Check String
if (!isNaN(name) || !isNaN(firstName)) {
    console.log(chalk.red('Error : Letters must be entered'))
    console.log(chalk.blue('Usage : ex ' + chalk.green('"Harry Andrews"')))
    process.exit(1)
}
// Question on the age of the user
let ageQ = readlineSync.question('3. What is your age : ')
let age = Number(ageQ)
// Security Check Number
if (isNaN(age)) {
    console.log(
        chalk.red(
            chalk.red('Error : please enter a number ') + chalk.blue('ex : 18')
        )
    )
    process.exit(2)
}
// Verification of voting authorization
if (age <= 18) {
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

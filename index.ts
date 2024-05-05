#!/usr/bin/env node
//Shabang


import inquirer from 'inquirer';
import chalk from 'chalk';
import readlineSync from 'readline-sync';

interface Enemy {
  name: string;
  health: number;
  attack: number;
}

// Enemies
const assassin: Enemy = {
  name: 'Assassin',
  health: 80,
  attack: 20,
};

const skeleton: Enemy = {
  name: 'Skeleton',
  health: 50,
  attack: 10,
};

const zombie: Enemy = {
  name: 'Zombie',
  health: 100,
  attack: 15,
};

// Enums
enum Choice {
  Attack,
  Heal,
  Run,
}

function welcomeNote(name: string): void {
    console.log(chalk.bold.bgCyan(`WELCOME TO TNA6-ADVENTURE-GAME, ${name}!`));
}


welcomeNote("user"); // Output: Welcome to my program, user!
// Game Logic
function displayEnemies(enemies: Enemy[]) {
  console.log(chalk.bold.green('You encounter the following enemies:'));
  enemies.forEach((enemy, index) => {
    console.log(` ${index + 1}. ${enemy.name} (Health: ${enemy.health}, Attack: ${enemy.attack})`);
  });
}

function playerTurn(playerHealth: number, enemy: Enemy) {
  console.log(chalk.yellow(`Your turn! Choose an action:`));
  console.log(`1. Attack`);
  console.log(`2. Heal`);
  console.log(`3. Run`);

  const choice = readlineSync.questionInt('Enter your choice (1/2/3): ');
  switch (choice) {
    case Choice.Attack:
      const playerDamage = Math.floor(Math.random() * 10) + 1;
      enemy.health -= playerDamage;
      console.log(chalk.blue(`You attack! You deal ${playerDamage} damage.`));
      break;
    case Choice.Heal:
      const healAmount = Math.floor(Math.random() * 10) + 1;
      playerHealth += healAmount;
      console.log(chalk.green(`You heal! You recover ${healAmount} health.`));
      break;
    case Choice.Run:
        const Run = Math.floor(Math.random() * 10) + 1;
      playerHealth += Run;
      console.log(chalk.yellow(`You run away ${Run}!`));
      break;

    default:
      console.log(chalk.red(`Invalid choice. Try again.`));
  }
}

// Main Game Flow
function main() {
  const playerHealth = 100; // Set player health
  const enemies = [assassin, skeleton, zombie];

  displayEnemies(enemies);
  playerTurn(playerHealth, skeleton); // Player's turn
}

main();
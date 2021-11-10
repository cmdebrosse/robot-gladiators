var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has been slain!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    if (playerHealth <= 0) {
        window.alert(playerName + " has been conquered!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.")
    }
};

fight();
var promptFight = window.prompt("Would like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has been slain!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }

    playerHealth + playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
    if (playerHealth <= 0) {
        window.alert(playerName + " has been slain!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }

} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit, pansy?");

    if (confirmSkip) {
        window.confirm(playerName + " has decided to skip this fight.");
        playerMoney = playerMoney - 2;
    } else {
        fight()
    }


} else {
    window.alert("You need to choose a valid option. Try again!");
}
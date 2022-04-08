import Cup from "./Classes/Cup";
import Player from "./Classes/Player";
import Game from "./Classes/Game";

let cup = new Cup();
cup.roll()
console.log(cup.displayScore());

let player1 = new Player("Louis")
let player2 = new Player("Dylan")
let player3 = new Player("Alexandre")
let player4 = new Player("Adrien")

let game = new Game([player1, player2, player3, player4])

game.initGame()
console.log(player1)
console.log(player2)
console.log(player3)
console.log(player4)
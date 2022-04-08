import Cup from "./Cup"
import Player from "./Player"

export default class Game{
    nbRound: number

    constructor(_nbRound: number) {
        this.nbRound = _nbRound
    }

    initGame(): void {

    }

    startGame(): void {

    }

    displayWinner(): string {
        return `Winner is ${this.player}`
    }
}
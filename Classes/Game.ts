import Cup from "./Cup"
import Player from "./Player"

export default class Game extends Cup {
    nbRound: number
    players: Player[]

    constructor(_players: Player[]) {
        super()
        this.nbRound = _players.length + 1;
        this.players = _players
    }

    initGame(): void {
        this.players.forEach(player => {
            for(let i = 0; i < this.nbRound; i++) {
                let cup = new Cup()
                player.score.push(cup.roll())
            }
        });
    }

    startGame(): void {

    }

    displayWinner(player: Player): string {
        return `Winner is ${player}`
    }
}
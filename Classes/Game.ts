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
        for(let i = 0; i < this.nbRound; i++) {
            let maxValueOfRound = Math.max.apply(Math, this.players.map(function(o) { return o.score[i]; }))
            this.players.forEach(player => {
                if(maxValueOfRound == player.score[i]) {
                    player.scoreGlobal += 1
                }
            });
        }
    }

    displayWinner(): string {
        let maxValue = Math.max.apply(Math, this.players.map(function(o) { return o.scoreGlobal; }))
        let winner: string = ""
        this.players.forEach(player => {
            if(maxValue == player.scoreGlobal) {
                if(winner == "") {
                    winner += player.name
                } else {
                    winner += ` and ${player.name}`
                }
            }
        });
        return `Winner is ${winner}`
    }
}
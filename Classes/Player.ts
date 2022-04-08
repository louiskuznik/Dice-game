import Cup from "./Cup"

export default class Player {
    public name: string
    public score: number[]

    constructor(_score: number[]) {
        this.score = _score
    }

    play(cup: Cup): void {
        this.score = [1,1]
    }

    displayScore(): string {
        return `Score are ${this.score}`
    }
}
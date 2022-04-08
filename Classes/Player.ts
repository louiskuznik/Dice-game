import Cup from "./Cup"

export default class Player {
    public name: string
    public score: number[]
    public scoreGlobal: number

    constructor(_name: string) {
        this.name = _name
        this.score = []
        this.scoreGlobal = 0
    }

    play(): void {
    }

    displayScore(): string {
        return `Score are ${this.score}`
    }
}
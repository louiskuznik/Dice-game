import Cup from "./Cup"

export default class Player {
    public name: string
    public score: number[]

    constructor(_name: string) {
        this.name = _name
        this.score = []
    }

    play(): void {
    }

    displayScore(): string {
        return `Score are ${this.score}`
    }
}
import Dice from "../Interfaces/Dice";

export default class Cup implements Dice {
    public value: number;

    constructor() {
        this.value = 0;
    }

    roll(): number {
        this.value = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        return this.value
    }

    displayScore(): string {
        return `Score is ${this.value}`
    }

}
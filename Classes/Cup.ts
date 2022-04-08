import Dice from "./Dice";

export default class Cup implements Dice {
    public value: number;

    constructor(_value: number) {
        this.value = _value;
    }

    roll(): void {
        this.value = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    }

    displayScore(): string {
        return `Score is ${this.value}`
    }

}
import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
    tag: 'random-number'
})

export class RandomNumber {

    @State() randomNumber: number;
    @Prop() min: number;
    @Prop() max: number;

    componentDidLoad() {
        this.randomNumber = Math.floor(Math.random()*(this.max- this.min+1)+ this.min);
    }

    @Listen('updateComponent')
    updateNumberHandler() {
        this.randomNumber = Math.floor(Math.random()*(this.max- this.min+1)+ this.min);
    }

    render() {
        return (
            this.randomNumber
        );
    }
}
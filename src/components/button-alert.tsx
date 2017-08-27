import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'button-alert'
})

export class Button {

    @Prop() buttonText: string;
    @Prop() alertMessage: string;

    handleClick(event: UIEvent) {
        console.log(event);
        if (this.alertMessage) {
            alert(this.alertMessage);
        }
    }

    render() {
        if(this.buttonText) {
            return (
                <button onClick={(event: UIEvent) => this.handleClick(event)}>{this.buttonText}</button>
            );
        }
    }
}
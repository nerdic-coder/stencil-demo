import { Component, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'button-update'
})

export class ButtonUpdate {

    @Prop() label: string;

    @Event() updateComponent: EventEmitter;

    handleClick(event: UIEvent) {
        this.updateComponent.emit();
    }

    render() {
        if(this.label) {
            return (
                <button onClick={(event: UIEvent) => this.handleClick(event)}>{this.label}</button>
            );
        }
    }
}
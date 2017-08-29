import { Component } from '@stencil/core';

@Component({
    tag: 'input-listener'
})

export class InputListener {

    static inputChanged(event: UIEvent) {
        console.log(event.target);
    }

    render() {
        return (
            <input value="" onChange={ (event: UIEvent) => InputListener.inputChanged(event)}/>
        );
    }
}
import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-first-component'
})

export class MyFirstComponent {
  // Indicate that name should be a public property on the component
  @Prop() firstName: string;

  render() {
    return (
    <p>
      My name is {this.firstName}
    </p>
    );
  }
}
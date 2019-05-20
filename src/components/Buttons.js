import React, { Component } from 'react';
import Button from './Button';
import buttons from '../data/buttons';
import Counter from './Counter';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.callbacks = [
      null,
      null,
      () => counter.toggle(),
      () => counter.stop()
    ]

    this.style = {
      headerButtons: {
        margin: '0 -.3rem'
      }
    }
  }

  buttonsMap() {
    const buttonsComponents = buttons.map(
      button => <Button key={button.id} names={button.names} callback={this.callbacks[button.id - 1]} />
    )
    return buttonsComponents
  }

  render() {
    const buttonsComponents = this.buttonsMap();

    return (
      <div className="row header-buttons" style={this.style.headerButtons}>
        {buttonsComponents}
      </div>
    )
  }
}

const counter = new Counter(function () {
  console.log(counter.clock.barSet + ' : ' + counter.clock.bar + ' : ' + counter.clock.knock)
}, 60, 4, 0);

export default Buttons;

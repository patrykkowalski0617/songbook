import React, { Component } from 'react';
import Button from './Button';
import buttons from '../data/buttons';

class Buttons extends Component {
  buttonsMap() {
    const buttonsComponents = buttons.map(
      button => <Button key={button.id} names={button.names} />
    )
    return buttonsComponents
  }

  render() {
    const buttonsComponents = this.buttonsMap();

    return (
      <div className="row header-buttons">
        {buttonsComponents}
      </div>
    )
  }
}

export default Buttons;

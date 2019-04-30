import React, {Component} from 'react';
import Button from './Button';
import buttons from '../data/buttons';

// function Buttons(){
//   const buttonsComponents = buttons.map(
//     button => <Button key={button.id} name={button.name}/>
//   )
//   return (
//     <div>
//       {buttonsComponents}
//     </div>
//   )
// };

class Buttons extends Component {
  // put style object and logic here
  buttonsMap(){
    const buttonsComponents = buttons.map(
      button => <Button key={button.id} names={button.names}/>
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

import React, { Component } from "react";
import buttons from "./button_package";
import Button from "./Button";
import Counter from "../Counter";

class ButtonContainer extends Component {
   state = {
      iconInitialIndex: []
   };

   style = {
      headerButtons: {
         margin: "0 -.3rem"
      }
   };

   buttonClassNames = [];

   callbacks = [
      null,
      () => {
         window.updateMainComponent({ display: "hidden" });
      },
      e => {
         counter.toggle();
         this.switchIcon(e.target);
      },
      () => {
         if (counter.clock.isRun) {
            this.switchIcon(document.querySelector(".button-play"));
         }
         counter.stop();
      }
   ];

   switchIcon(target) {
      const tt = this;
      const detectButtonIndex = function() {
         for (let i = 0; i < tt.buttonClassNames.length; i++) {
            if (target.classList.contains(tt.buttonClassNames[i])) {
               return i;
            }
         }
      };
      const buttonIndex = detectButtonIndex();

      this.setState(() => {
         const arr = tt.state.iconInitialIndex;
         for (let i = 0; i < arr.length; i++) {
            if (i === buttonIndex) {
               const newIndex = function() {
                  const newI = (arr[i] += 1);
                  if (newI < buttons[i].names.length) {
                     return newI;
                  } else {
                     return 0;
                  }
               };
               arr.splice(i, 1, newIndex());
            }
         }
         return { iconInitialIndex: arr };
      });
   }

   mapButtons() {
      const buttonsComponents = buttons.map((button, index) => {
         this.state.iconInitialIndex.push(0);
         this.buttonClassNames.push(
            `button-${button.names[this.state.iconInitialIndex[index]]}`
         );

         return (
            <Button
               key={button.id}
               icon={button.names[this.state.iconInitialIndex[index]]}
               buttonName={button.names[0]}
               onClick={this.callbacks[index]}
            />
         );
      });
      return buttonsComponents;
   }

   render() {
      return (
         <div className="row header-buttons" style={this.style.headerButtons}>
            {this.mapButtons()}
         </div>
      );
   }
}

const counter = new Counter(
   function() {
      console.log(`knock: ${counter.clock.knock}`);
   },
   60,
   4,
   0
);

export default ButtonContainer;

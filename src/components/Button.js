import React, { Component } from 'react';
import Counter from './Counter';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { initialNameIndex: 0 };

    this.iconStyle = {
      fontSize: '20px',
      lineHeight: '40px',
      textAlign: 'center',
      cursor: 'pointer'
    }
  }

  render() {
    return (
      <div className="col" onClick={this.onClick.bind(this)}>
        <i className={`icon icon-${this.props.names[this.state.initialNameIndex]} circle-input`}
          style={this.iconStyle}></i>
      </div>
    )
  }

  onClick() {
    this.switchIcon()
    counter.start()
  }

  switchIcon(props) {
    this.setState(
      (state, props) => {
        const notEdgeIndex = this.state.initialNameIndex < this.props.names.length - 1;
        const currentIndex = (notEdgeIndex) ? this.state.initialNameIndex + 1 : 0
        return { initialNameIndex: currentIndex };
      }
    )
  }
}

const counter = new Counter(function () {
  console.log(counter.clock.barSet + ' : ' + counter.clock.bar + ' : ' + counter.clock.knock)
}, 60, 4, 3000);

export default Button;

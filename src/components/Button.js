import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { initialNameIndex: 0 };

    this.style = {
      col: {
        padding: '0 .3rem'
      },
      icon: {
        fontSize: '20px',
        lineHeight: '40px',
        textAlign: 'center',
        cursor: 'pointer'
      }
    }
  }

  render() {
    return (
      <div className="col" onClick={() => this.onClick(this.props.callback)} style={this.style.col}>
        <i className={`icon icon-${this.props.names[this.state.initialNameIndex]} circle-input`}
          style={this.style.icon}></i>
      </div>
    )
  }

  onClick(callback) {
    this.switchIcon()
    if (callback) { callback() }
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

export default Button;

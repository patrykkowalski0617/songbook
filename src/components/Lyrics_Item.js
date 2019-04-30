import React, {Component} from 'react';

class LyricsItem extends Component{
  getFilePath(){
    const lyricsName = this.props.lyricsName;
    const fileFormat = 'json';
    const fileName = lyricsName.toLowerCase().replace(/ /g, '_');
    const filePath = `json/${fileName}.${fileFormat}`
    console.log(filePath);
  }

  render(){
    return (
      <li>
        <button onClick={this.getFilePath.bind(this)}>
          {this.props.lyricsName}
        </button>
      </li>
    )
  }
}

export default LyricsItem;

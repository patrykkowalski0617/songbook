import React, { Component } from "react";

class LyricsSection extends Component {
   ref = React.createRef();

   componentDidMount() {
      this.props.getLyricsSections(this.ref.current);
   }

   render() {
      return (
         <div className={"lyrics-section"} ref={this.ref}>
            <div className="section-content">
               <p className="lyrics-chords">{this.props.chords}</p>
               <p className="lyrics-text">{this.props.text}</p>
            </div>
         </div>
      );
   }
}

export default LyricsSection;

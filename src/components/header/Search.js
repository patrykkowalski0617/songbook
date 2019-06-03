import React, { Component } from "react";

class Search extends Component {
   state = {
      inputValue: ""
   };

   render() {
      const style = {
         display: this.props.display
      };
      return (
         <div className="search" style={style}>
            <input
               className="bar-input"
               type="search"
               placeholder="wyszukaj: artysta - tytuł"
               onChange={e => this.setState({ inputValue: e.target.value })}
            />
            <button
               className="circle-input"
               onClick={() => this.props.searchClick(this.state.inputValue)}
            >
               Search
            </button>
         </div>
      );
   }
}

export default Search;

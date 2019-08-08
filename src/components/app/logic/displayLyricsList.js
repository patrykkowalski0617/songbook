const displayLyricsList = function(_this) {
    return function() {
        let displayPlayButton;
        if (_this.state.displayPlayButton) {
            displayPlayButton = !_this.state.displayHeaderButtons[1];
        }

        _this.setState({
            displayLyricsList: !_this.state.displayLyricsList,
            displayHeaderButtons: [true, displayPlayButton],
            displayLyrics: !_this.state.displayLyrics
        });
    };
};
export default displayLyricsList;

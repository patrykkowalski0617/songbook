const displayLyricsList = function(_this) {
    return function() {
        let displayPlayButton;
        if (_this.state.displayPlayButton) {
            displayPlayButton = !_this.state.displayHeaderButtons[1];
        }

        const displayLyrics = !_this.state.displayLyrics;

        _this.setState({
            displayLyricsList: !_this.state.displayLyricsList,
            displayHeaderButtons: [true, displayPlayButton],
            displayLyrics: displayLyrics,
            displayWelcomeInfo: !_this.state.displayWelcomeInfo
        });
    };
};
export default displayLyricsList;

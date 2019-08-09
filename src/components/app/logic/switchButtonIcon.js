const switchButtonIcon = function(_this) {
    return function(index) {
        const buttonsOnStates = _this.state.buttonsOnStates.slice();

        buttonsOnStates[index] = !buttonsOnStates[index];

        _this.setState({ buttonsOnStates });
    };
};
export default switchButtonIcon;

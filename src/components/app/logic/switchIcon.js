const switchIcon = function(_this) {
    return function(buttonIndex) {
        let currentSate = _this.state.headerButtonsIconIndex.slice();
        let iconIndex = currentSate[buttonIndex];

        if (iconIndex < _this.buttonData.icons[buttonIndex].length - 1) {
            iconIndex++;
        } else {
            iconIndex = 0;
        }
        currentSate[buttonIndex] = iconIndex;

        _this.setState({ headerButtonsIconIndex: currentSate });
    };
};

export default switchIcon;

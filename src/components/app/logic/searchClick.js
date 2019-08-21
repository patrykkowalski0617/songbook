const filterLyricsList = function(value, lyricsList) {
    const filteredList = lyricsList.filter(item =>
        item.lyricsName.toLowerCase().includes(value.toLowerCase())
    );
    return filteredList;
};

const searchClick = function(_this) {
    return function(value) {
        const lyricsList = _this.lyricsList.slice();
        const searchResult = filterLyricsList(value, lyricsList);
        _this.setState({
            searchResult: searchResult
        });
    };
};

export default searchClick;

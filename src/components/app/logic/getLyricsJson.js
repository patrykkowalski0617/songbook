import axios from "axios";
import Counter from "./counter";

const getLyricsJson = function(_this) {
    return function(lyricsName) {
        const fileFormat = "json";
        const fileName = lyricsName.toLowerCase().replace(/ /g, "_");
        const filePath = `lyrics/${fileName}.${fileFormat}`;

        axios
            .get(filePath)
            .then(res => {
                const lyricsData = res.data;
                _this.counter = new Counter(res.data);
                _this.counter.data.callbackOn.lyricsEnd = () =>
                    _this.switchIcon(1);
                _this.setState({
                    lyricsData: lyricsData,
                    displayPlayButton: true,
                    displayLyrics: true,
                    displayLyricsList: false,
                    displayHeaderButtons: [true, true],
                    displayWelcomeInfo: false,
                    headerFocusedButtounIndex: 1
                });
                _this.switchIcon(0);
            })
            .catch(() =>
                alert('W tej chwili działa tylko "Kings of Leon - Sex On Fire"')
            );
    };
};
export default getLyricsJson;

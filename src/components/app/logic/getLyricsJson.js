import axios from "axios";
import Counter from "./counter";

const getLyricsJson = function(_this) {
    return function(lyricsName) {
        const fileFormat = "json";
        const fileName = lyricsName.toLowerCase().replace(/ /g, "_");
        const filePath = `lyrics/${fileName}.${fileFormat}`;

        axios.get(filePath).then(res => {
            const lyricsData = res.data;
            _this.counter = new Counter(res.data);
            _this.counter.data.callbackOn.lyricsEnd = () => _this.switchIcon(1);
            _this.setState({ lyricsData: lyricsData });
            _this.setState({ displayPlayButton: true });
            _this.setState({ displayLyrics: true });
            _this.setState({
                displayLyricsList: false,
                displayHeaderButtons: [true, true]
            });
            _this.setState({ headerFocusedButtounIndex: 1 });
            _this.switchIcon(0);
        });
    };
};
export default getLyricsJson;

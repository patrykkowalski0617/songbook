class Counter {
    constructor(lyricsData) {
        const _this = this;

        this.action = {
            start: function() {
                const delay = (60 / _this.data.tempo) * 1000;
                const songTiming = _this.data.songTiming();
                const iterationDelay =
                    _this.data.songTiming() * _this.data.barDelay;
                const callback = callback => {
                    callback
                        ? callback()
                        : console.warn(
                              "Assign function to all properties of _this.data.callbackOn"
                          );
                };
                let countdownNumber = songTiming * _this.data.barDelay;
                let iteration = 0;

                _this.isRun = setInterval(function() {
                    if (!_this.data.lyricsEnd()) {
                        callback(_this.data.callbackOn.eachIteration);

                        _this.data.callbackOn.countdown(countdownNumber);
                        if (countdownNumber > 0) {
                            countdownNumber--;
                        }

                        iteration++;

                        if (
                            iteration > iterationDelay &&
                            iteration % songTiming === 2
                        ) {
                            callback(_this.data.callbackOn.barChange);
                        }
                    } else {
                        _this.action.pause();
                        _this.data.callbackOn.lyricsEnd();
                    }
                }, delay);
            },
            pause: function() {
                clearInterval(_this.isRun);
                clearTimeout(_this.timeoutForScrollTop);
                _this.isRun = 0;
                _this.timeoutForScrollTop = 0;
                _this.data.callbackOn.metronomStop();
                _this.data.callbackOn.countdown(0);
            },
            toggle: function() {
                if (_this.isRun || _this.timeoutForScrollTop) {
                    this.pause();
                } else if (!_this.data.lyricsEnd()) {
                    this.start();
                } else {
                    const time = _this.data.callbackOn.scrollToTop();
                    _this.timeoutForScrollTop = setTimeout(this.start, time);
                }
            }
        };

        this.data = {
            callbackOn: {
                eachIteration: null,
                barChange: null,
                lyricsEnd: null,
                metronomStop: null,
                countdown: null,
                scrollToTop: null
            },
            _tempo: lyricsData.tempo,
            set tempo(value) {
                this._tempo = value;
                if (_this.data.isRun) {
                    _this.pause();
                    _this.start();
                }
            },
            get tempo() {
                return this._tempo;
            },
            songTiming: function() {
                const slashIndex = lyricsData.time.search("/");
                const meterString = lyricsData.time.substring(0, slashIndex);
                return Number(meterString);
            },
            locationOfAllBars: function() {
                const sections = _this.lyricsData.sections;
                const map = sections.map(function(section, secIndex) {
                    return section.bars.map(function(bar, barIndex) {
                        return [secIndex, barIndex];
                    });
                });
                const reduced = map.reduce(function(total, item) {
                    return total.concat(item);
                });
                return reduced;
            },
            currentlyMarkedSectionIndex: 0,
            lyricsEnd: function() {
                return (
                    _this.data.currentlyMarkedSectionIndex ===
                    _this.data.locationOfAllBars().length - 1
                );
            },
            barDelay: 1
        };

        this.lyricsData = lyricsData;
        this.isRun = 0;
        this.timeoutForScrollTop = null;
    }
}

export default Counter;

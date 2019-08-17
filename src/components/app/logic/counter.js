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
                    callback(_this.data.callbackOn.eachIteration);
                    _this.data.callbackOn.countdown(countdownNumber);

                    if (countdownNumber > 0) {
                        countdownNumber--;
                    }

                    iteration++;
                    if (
                        (iteration - 1) % songTiming === 0 &&
                        iteration !== 1 &&
                        iteration - 1 > iterationDelay
                    ) {
                        if (_this.data.lyricsEnd()) {
                            _this.action.pause();
                            _this.data.callbackOn.lyricsEnd();
                            _this.data.currentlyMarkedSectionIndex = 0;
                        } else {
                            callback(_this.data.callbackOn.barChange);
                        }
                    }
                }, delay);
            },
            pause: function() {
                clearInterval(_this.isRun);
                _this.isRun = 0;
                _this.data.callbackOn.metronomStop();
                _this.data.callbackOn.countdown(0);
            },
            toggle: function() {
                if (_this.isRun) {
                    this.pause();
                } else {
                    this.start();
                }
            },
            restart: function() {
                if (_this.isRun && _this.data.allowRestart) {
                    console.log("restart");
                    this.pause();
                    this.start();
                }
            }
        };

        this.data = {
            callbackOn: {
                eachIteration: null,
                barChange: null,
                lyricsEnd: null,
                metronomStop: null,
                countdown: null
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
            barDelay: 1,
            allowRestart: true
        };

        this.lyricsData = lyricsData;
        this.isRun = 0;
    }
}

export default Counter;

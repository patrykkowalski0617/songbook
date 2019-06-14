import kings_of_leon_sex_on_fire from "../data/lyrics/kings_of_leon_-_sex_on_fire";

class Counter {
   constructor(lyricsData, startDelay) {
      const tt = this;

      this.knock = 0;
      this.locationOfCurrentBarIndex = 0;
      this.action = {
         start: function() {
            const delay = (60 / tt.data.tempo) * 1000;
            const allBars = tt.data.locationOf.allBars();
            const songTiming = tt.data.songTiming();
            const callback = callback => {
               callback
                  ? callback()
                  : console.warn(
                       "Assign function to both properties of counter.data.callbackOn"
                    );
            };

            tt.isRun = setInterval(function() {
               if (!tt.data.locationOf.currentBar) {
                  tt.action.pause();
               }
               callback(tt.data.callbackOn.knockChange);
               tt.data.locationOf.currentBar =
                  allBars[tt.locationOfCurrentBarIndex];
               tt.knock++;
               if (tt.knock % songTiming === 0) {
                  callback(tt.data.callbackOn.barChange);
                  tt.locationOfCurrentBarIndex++;
               }
            }, delay);
         },
         pause: function() {
            clearInterval(tt.isRun);
            tt.isRun = 0;
         },
         stop: function() {
            if (tt.isRun) {
               this.pause();
               this.reset();
            } else {
               this.reset();
            }
         },
         toggle: function(currentBarSetLength) {
            if (tt.isRun) {
               this.pause();
            } else {
               this.start(currentBarSetLength);
            }
         },
         reset: function() {
            tt.knock = 0;
            tt.locationOfCurrentBarIndex = 0;
         }
      };

      this.data = {
         callbackOn: {
            _knockChange: null,
            set knockChange(knockChange) {
               this._knockChange = knockChange;
            },
            get knockChange() {
               return this._knockChange;
            },
            _barChange: null,
            set barChange(barChange) {
               this._barChange = barChange;
            },
            get barChange() {
               return this._barChange;
            }
         },
         _tempo: lyricsData.tempo,
         set tempo(tempo) {
            this._tempo = tempo;
            if (tt.data.isRun) {
               tt.pause();
               tt.start();
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
         locationOf: {
            allBars: function() {
               const sections = counter.lyricsData.sections;
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
            _currentBar: [],
            set currentBar(currentBar) {
               this._currentBar = currentBar;
            },
            get currentBar() {
               return this._currentBar;
            }
         },
         _startDelay: null,
         set startDelay(startDelay) {
            this._startDelay = startDelay;
         },
         get startDelay() {
            return this._startDelay;
         }
      };

      this.lyricsData = lyricsData;
      this.isRun = 0;
   }
}

const counter = new Counter(kings_of_leon_sex_on_fire);

export default counter;

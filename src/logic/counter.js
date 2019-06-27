import kings_of_leon_sex_on_fire from "../data/lyrics/kings_of_leon_-_sex_on_fire";

class Counter {
   constructor(lyricsData) {
      const counter = this;

      this.iteration = 0;
      this.action = {
         start: function() {
            const delay = (60 / counter.data.tempo) * 1000;
            const songTiming = counter.data.songTiming();
            const callback = callback => {
               callback
                  ? callback()
                  : console.warn(
                       "Assign function to both properties of counter.data.callbackOn"
                    );
            };
            const checkIfLyricsEnd = function() {
               // if (!counter.data.markedSectionIndex) {
               //    counter.action.pause();
               // }
            };

            counter.isRun = setInterval(function() {
               checkIfLyricsEnd();
               callback(counter.data.callbackOn.eachIteration);
               counter.iteration++;
               if (counter.iteration % songTiming === 0) {
                  callback(counter.data.callbackOn.barChange);
               }
            }, delay);
         },
         pause: function() {
            clearInterval(counter.isRun);
            counter.isRun = 0;
            counter.iteration = 0;
         },
         toggle: function(currentBarSetLength) {
            if (counter.isRun) {
               this.pause();
            } else {
               this.start(currentBarSetLength);
            }
         }
      };

      this.data = {
         callbackOn: {
            _eachIteration: null,
            set eachIteration(eachIteration) {
               this._eachIteration = eachIteration;
            },
            get eachIteration() {
               return this._eachIteration;
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
            if (counter.data.isRun) {
               counter.pause();
               counter.start();
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
         }
      };

      this.lyricsData = lyricsData;
      this.isRun = 0;
   }
}

const counter = new Counter(kings_of_leon_sex_on_fire);

export default counter;

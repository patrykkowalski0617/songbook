import kings_of_leon_sex_on_fire from "../data/lyrics/kings_of_leon_-_sex_on_fire";

class Counter {
   constructor(lyricsData, startDelay) {
      const tt = this;

      this.lyricsData = lyricsData;
      this.callback = null;
      this.tempo = lyricsData.tempo;
      this.timeout = function(tempo) {
         return (60 / tempo) * 1000;
      };
      this.time = function() {
         const slashIndex = lyricsData.time.search("/");
         const meterString = lyricsData.time.substring(0, slashIndex);
         return Number(meterString);
      };
      this.startDelay = startDelay;
      this.setNewTempo = function(newTempo) {
         tt.tempo = newTempo;
         if (tt.clock.isRun) {
            tt.pause();
            tt.start();
         }

         return newTempo;
      };

      this.clock = {
         previous: {},
         current: {
            knock: 0, // knocks are like seconds in regural clock
            bar: 0, // bars are like minutes in regural clock
            _barPerBarSet: 0, // how many bars is needed to increment barSet
            get barPerBarSet() {
               return this._barPerBarSet;
            },
            set barPerBarSet(value) {
               this._barPerBarSet = value;
            },
            barSet: 0 // barSets are like hours in regural clock
         },
         next: {},
         knocksPerBar: tt.time(tt.meter), // how many knocks is needed to increment bar
         // updateBarSetLength(newLength) {
         //    this.current.barPerBarSet = newLength;
         // },
         reset: function() {
            this.current.knock = 0;
            this.current.bar = 0;
            this.current.barSet = 0;
         },
         isRun: 0
      };
      this.start = function() {
         const timeout = tt.timeout(tt.tempo);
         const delay = setTimeout(function() {
            if (tt.callback) {
               tt.callback();
            } else {
               console.warn("Assign function to counter.callback");
            }
            tt.clock.isRun = setInterval(function() {
               console.log("knock: " + tt.clock.current.knock);
               tt.clock.current.knock++;
               if (tt.clock.current.knock % tt.clock.knocksPerBar === 0) {
                  tt.clock.barPerBarSet =
                     tt.lyricsData.body[tt.clock.current.barSet].chords.length;
                  tt.clock.current.bar++;
                  if (
                     tt.clock.current.bar % tt.clock.current.barPerBarSet ===
                     0
                  ) {
                     tt.clock.current.barSet++;
                     tt.clock.current.bar = 0;
                  }
               }
               if (tt.callback) {
                  tt.callback();
               } else {
                  console.warn("Assign function to counter.callback");
               }
            }, timeout);
            clearTimeout(delay);
         }, tt.startDelay);

         return tt.clock.isRun;
      };
      this.pause = function() {
         clearInterval(tt.clock.isRun);
         tt.clock.isRun = 0;

         return tt.clock.isRun;
      };
      this.stop = function() {
         if (tt.clock.isRun) {
            tt.pause();
            tt.clock.reset();
         } else {
            tt.clock.reset();
         }
      };
      this.toggle = function(currentBarSetLength) {
         if (tt.clock.isRun) {
            tt.pause();
         } else {
            tt.start(currentBarSetLength);
         }
      };
   }
}

const counter = new Counter(kings_of_leon_sex_on_fire, 4);
console.log(counter);
export default counter;

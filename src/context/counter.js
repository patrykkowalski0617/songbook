import React from "react";
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
         knock: 0, // knocks are like seconds in regural clock
         knocksPerBar: tt.time(tt.meter), // how many knocks is needed to increment bar
         bar: 0, // bars are like minutes in regural clock
         barPerBarSet: 0, // how many bars is needed to increment barSet
         barSet: 0, // barSets are like hours in regural clock
         updateBarSetLength(newLength) {
            this.barPerBarSet = newLength;
         },
         reset: function() {
            this.knock = 0;
            this.bar = 0;
            this.barSet = 0;
         },
         isRun: 0
      };
      this.start = function() {
         const timeout = tt.timeout(tt.tempo);
         const delay = setTimeout(function() {
            // callback();
            if (tt.callback) {
               tt.callback();
            } else {
               console.warn("Assign function to counter.callback");
            }
            tt.clock.isRun = setInterval(function() {
               tt.clock.knock++;
               if (tt.clock.knock % tt.clock.knocksPerBar === 0) {
                  tt.clock.updateBarSetLength(
                     tt.lyricsData.body[tt.clock.barSet].chords.length
                  );
                  tt.clock.bar++;
                  if (tt.clock.bar % tt.clock.barPerBarSet === 0) {
                     tt.clock.barSet++;
                     tt.clock.bar = 0;
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

export const counter = new Counter(kings_of_leon_sex_on_fire, 4);

export const CounterContext = React.createContext(counter);

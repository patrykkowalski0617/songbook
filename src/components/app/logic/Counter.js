class Counter {
  constructor(callback, tempo, meter, startDelay) {
    const tt = this;

    this.tempo = tempo;
    this.timeout = function(tempo) {
      return (60 / tempo) * 1000;
    };
    this.meter = meter;
    this.time = function(meter) {
      const slashIndex = meter.search("/");
      const meterString = meter.substring(0, slashIndex);
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
      knocksPerBar: tt.time(meter), // git how many knocks is needed to increment bar
      bar: 0, // bars are like minutes in regural clock
      barPerBarSet: 1, // how many bars is needed to increment barSet
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
    this.start = function(currentBarSetLength) {
      this.clock.updateBarSetLength(currentBarSetLength);
      const timeout = tt.timeout(tt.tempo);
      const delay = setTimeout(function() {
        // callback();
        tt.clock.isRun = setInterval(function() {
          tt.clock.knock++;
          if (tt.clock.knock % tt.clock.knocksPerBar === 0) {
            tt.clock.bar++;
            if (tt.clock.bar % tt.clock.barPerBarSet === 0) {
              tt.clock.barSet++;
              tt.clock.bar = 0;
            }
          }
          callback();
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

export default Counter;

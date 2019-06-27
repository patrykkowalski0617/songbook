class ScrollAnimation {
   constructor(parent, lyricsSections, markedSectionIndex) {
      let startTime = null;

      const easing = function(t, b, c, d) {
         t /= d / 2;
         if (t < 1) {
            return (c / 2) * t * t + b;
         }
         t--;
         return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      this.currentlyMarkedSection = lyricsSections[markedSectionIndex];

      this.updateData = function(markedSectionIndex) {
         this.currentlyMarkedSection = lyricsSections[markedSectionIndex];
      };

      this.anim = function() {
         const animation = function(currentTime) {
            if (startTime === null) {
               startTime = currentTime;
            }

            const timeElapsed = currentTime - startTime;
            console.log(timeElapsed);
            // const run = easing(timeElapsed, startPosition, distance, duration);

            // window.scrollTo(0, run);

            // if (timeElapsed < duration) {
            //    requestAnimationFrame(animation);
            // }
         };

         requestAnimationFrame(animation);
      };
   }
}

export default ScrollAnimation;

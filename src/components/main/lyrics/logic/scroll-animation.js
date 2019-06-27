class ScrollAnimation {
   constructor(container, lyricsSections, markedSectionIndex) {
      const tt = this;

      const easing = function(t, b, c, d) {
         return (c * t) / d + b;
      };
      // http://www.gizma.com/easing

      this.markedSectionIndex = markedSectionIndex;

      this.updateData = function(markedSectionIndex) {
         this.markedSectionIndex = markedSectionIndex;
      };

      this.anim = function(duration) {
         let startTime = null;
         const markedSectionIndex = tt.markedSectionIndex;
         const animation = function(currentTime) {
            if (startTime === null) {
               startTime = currentTime;
            }

            const target = lyricsSections[markedSectionIndex + 1];
            const containerPosition = container.getBoundingClientRect().top;
            const getTopDistance = function() {
               const marginTop = window.getComputedStyle(lyricsSections[0])
                  .marginTop;
               return Number(marginTop.replace(/px/, ""));
            };
            const targetPosition =
               target.getBoundingClientRect().top +
               container.scrollTop -
               containerPosition -
               getTopDistance();
            const timeElapsed = currentTime - startTime;
            const startPosition = container.scrollTop;
            const distance = targetPosition - startPosition;
            const run = easing(timeElapsed, startPosition, distance, duration);

            container.scrollTo(0, run);

            if (timeElapsed < duration) {
               requestAnimationFrame(animation);
            }
         };

         requestAnimationFrame(animation);
      };
   }
}

export default ScrollAnimation;

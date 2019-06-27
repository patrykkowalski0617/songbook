class ScrollAnimation {
   constructor(parent, lyricsSections, markedSectionIndex) {
      this.currentlyMarkedSection = lyricsSections[markedSectionIndex];

      this.updateData = function(markedSectionIndex) {
         this.currentlyMarkedSection = lyricsSections[markedSectionIndex];
      };

      this.anim = function() {
         parent.scrollTo(0, 80);
      };
   }
}

export default ScrollAnimation;

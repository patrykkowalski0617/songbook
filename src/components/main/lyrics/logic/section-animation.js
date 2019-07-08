class SectionAnimation {
   constructor(parent, sections) {
      // return range whera animation supposed to be performed
      const getRange = function(rangeSize) {
         const sectionH = sections[0].clientHeight;
         const rangeTop = (sectionH - sectionH * rangeSize) * -1;
         const rangeBottom = (sectionH + sectionH * rangeSize) * -1;

         return { top: rangeTop, bottom: rangeBottom };
      };

      // return scale value for css style
      const getScale = function(sectionOffset) {
         const getTopDistance = function() {
            const marginTop = window.getComputedStyle(sections[0]).marginTop;
            return Number(marginTop.replace(/px/, ""));
         };
         const d = getTopDistance();
         const o = sectionOffset;
         const scale = Math.pow((o / -d) * (2 - o / -d), 1.5);
         return scale;
      };

      // aply transform style for element's content
      const aplyTransformStyle = function(scale, elements) {
         elements.querySelector(
            ".section-content"
         ).style.transform = `translate(-50%, -50%) scale(${scale})`;
      };

      const minScale = 0.5;

      let currentAnimated = [];
      let markedSection;
      this.anim = function() {
         const range = getRange(1);

         const getMarkedSection = function() {
            if (currentAnimated.length === 1) {
               return currentAnimated[0].index;
            } else {
               for (var key in currentAnimated) {
                  if (currentAnimated.hasOwnProperty(key)) {
                     const biggestScale = Math.max.apply(
                        Math,
                        currentAnimated.map(function(o) {
                           return o.scale;
                        })
                     );

                     if (currentAnimated[key].scale === biggestScale) {
                        return currentAnimated[key].index;
                     }
                  }
               }
            }
         };

         currentAnimated = [];

         let timeout;
         clearTimeout(timeout);
         timeout = setTimeout(function() {
            for (let i = 0; i < sections.length; i++) {
               const sectionOffset =
                  parent.getBoundingClientRect().y -
                  sections[i].getBoundingClientRect().y;

               aplyTransformStyle(minScale, sections[i]);

               if (sectionOffset < range.top && sectionOffset > range.bottom) {
                  const scale = getScale(sectionOffset);

                  if (scale > minScale) {
                     aplyTransformStyle(scale, sections[i]);
                     currentAnimated.push({ index: i, scale: scale });
                  }
               }

               markedSection = getMarkedSection();
            }
         }, 50);

         return markedSection;
      };
   }
}

export default SectionAnimation;

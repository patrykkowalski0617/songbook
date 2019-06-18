class SectionAnimation {
   constructor(parentClassName, childClassName, animatedElementClassName) {
      const tt = this;

      // elements
      const sections = document.querySelectorAll("." + childClassName);
      const parent = document.querySelector("." + parentClassName);

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

      // aply transform style for elements content
      const aplyTransformStyle = function(scale, elements) {
         elements.querySelector(
            "." + animatedElementClassName
         ).style.transform = `translate(0, -50%) scale(${scale})`;
      };

      const minScale = 0.5;

      this.currentAnimated = [];

      this.anim = function() {
         const range = getRange(1);

         tt.currentAnimated = [];
         for (let i = 0; i < sections.length; i++) {
            const sectionOffset =
               parent.getBoundingClientRect().y -
               sections[i].getBoundingClientRect().y;

            aplyTransformStyle(minScale, sections[i]);

            if (sectionOffset < range.top && sectionOffset > range.bottom) {
               const scale = getScale(sectionOffset);

               if (scale > minScale) {
                  aplyTransformStyle(scale, sections[i]);
                  tt.currentAnimated.push({ index: i, scale: scale });
               }
            }
         }

         if (tt.currentAnimated.length === 1) {
            return tt.currentAnimated[0].index;
         } else {
            for (var key in tt.currentAnimated) {
               if (tt.currentAnimated.hasOwnProperty(key)) {
                  const biggestScale = Math.max.apply(
                     Math,
                     tt.currentAnimated.map(function(o) {
                        return o.scale;
                     })
                  );

                  if (tt.currentAnimated[key].scale === biggestScale) {
                     return tt.currentAnimated[key].index;
                  }
               }
            }
         }
      };
   }
}

export default SectionAnimation;

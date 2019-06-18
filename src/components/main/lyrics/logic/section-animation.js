function sectionAnimation(
   parentClassName,
   childClassName,
   animatedElementClassName
) {
   const sections = document.querySelectorAll("." + childClassName);
   const parent = document.querySelector("." + parentClassName);
   const getRange = function(rangeSize) {
      const sectionH = sections[0].clientHeight;
      const rangeTop = (sectionH - sectionH * rangeSize) * -1;
      const rangeBottom = (sectionH + sectionH * rangeSize) * -1;

      return { top: rangeTop, bottom: rangeBottom };
   };
   const range = getRange(1);

   for (let i = 0; i < sections.length; i++) {
      const sectionOffset =
         parent.getBoundingClientRect().y -
         sections[i].getBoundingClientRect().y;
      const minScale = 0.5;
      const aplyScale = function(scale) {
         sections[i].querySelector(
            "." + animatedElementClassName
         ).style.transform = `translate(0, -50%) scale(${scale})`;
      };
      aplyScale(minScale);

      if (sectionOffset < range.top && sectionOffset > range.bottom) {
         const getScale = function() {
            const getTopDistance = function() {
               const marginTop = window.getComputedStyle(sections[0]).marginTop;
               return Number(marginTop.replace(/px/, ""));
            };
            const d = getTopDistance();
            const o = sectionOffset;
            const scale = Math.pow((o / -d) * (2 - o / -d), 1.5);
            return scale;
         };
         const scale = getScale();
         if (scale > minScale) {
            aplyScale(scale);
         }
      }
   }
}

export default sectionAnimation;

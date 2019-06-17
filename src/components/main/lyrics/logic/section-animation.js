function sectionAnimation(parentClassName, childClassName) {
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
            ".section-content"
         ).style.transform = `translate(0, -50%) scale(${scale})`;
      };
      aplyScale(minScale);

      if (sectionOffset < range.top && sectionOffset > range.bottom) {
         const getScale = function() {
            const h = -sections[i].clientHeight;
            const o = sectionOffset;
            const scale = (h * ((o / h) * (2 - o / h))) / h;
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

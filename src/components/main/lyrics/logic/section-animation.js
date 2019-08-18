class SectionAnimation {
    constructor(parent, sections) {
        const getSectionOffset = function(parent, section) {
            const offset =
                parent.getBoundingClientRect().y -
                section.getBoundingClientRect().y;

            return offset;
        };

        const basePosition = Number(
            window.getComputedStyle(sections[0]).marginTop.replace(/px/, "")
        );

        const sectionHeight = sections[0].clientHeight;

        const getScaleValue = function(sectionOffset, minimumScale) {
            const currentPosition = sectionOffset * -1;

            const deflection =
                (basePosition - currentPosition) /
                (basePosition / (1 - minimumScale));
            let scale;

            if (currentPosition > 80) {
                scale = 1 + deflection;
            } else {
                scale = 1 - deflection;
            }

            scale = Math.round(scale * 100) / 100;

            return scale;
        };

        const aplyTransformStyle = function(scale, section) {
            section.querySelector(
                ".section-content"
            ).style.transform = `translate(-50%, -50%) scale(${scale})`;
        };

        const rangeTop = basePosition - sectionHeight / 2;
        const rangeBottom = rangeTop + sectionHeight;

        let mainMarkedSectionIndex;

        this.animate = function() {
            for (let i = 0; i < sections.length; i++) {
                const sectionOffset = getSectionOffset(parent, sections[i]);
                const scale = getScaleValue(sectionOffset, 0.7);

                aplyTransformStyle(scale, sections[i]);

                if (-sectionOffset > rangeTop && -sectionOffset < rangeBottom) {
                    mainMarkedSectionIndex = i;
                }
            }

            return mainMarkedSectionIndex;
        };
    }
}

export default SectionAnimation;

class SectionAnimation {
    constructor(parent, sections) {
        const getSectionOffset = function(parent, section) {
            const offset =
                parent.getBoundingClientRect().y -
                section.getBoundingClientRect().y;

            return offset;
        };

        const getScaleValue = function(sectionOffset, minimumScale) {
            const basePosition = Number(
                window.getComputedStyle(sections[0]).marginTop.replace(/px/, "")
            );
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

        let mainMarkedSection;

        this.animate = function() {
            for (let i = 0; i < sections.length; i++) {
                const sectionOffset = getSectionOffset(parent, sections[i]);
                const scale = getScaleValue(sectionOffset, 0.7);
                aplyTransformStyle(scale, sections[i]);
            }

            return mainMarkedSection;
        };
    }
}

export default SectionAnimation;

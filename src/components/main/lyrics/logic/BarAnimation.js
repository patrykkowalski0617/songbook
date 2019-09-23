class BarAnimation {
    constructor(componentElement) {
        const targetElements = componentElement.querySelectorAll(".lyrics-bar");

        const getTargetElementOffset = function(
            componentElement,
            targetElement
        ) {
            const offset =
                componentElement.getBoundingClientRect().y -
                targetElement.getBoundingClientRect().y;

            return offset;
        };

        const basePosition = Number(
            window
                .getComputedStyle(targetElements[0])
                .marginTop.replace(/px/, "")
        );

        const targetElementHeight = targetElements[0].clientHeight;

        const getScaleValue = function(targetElementOffset, minimumScale) {
            const currentPosition = targetElementOffset * -1;

            const deflection =
                (basePosition - currentPosition) /
                (basePosition / (1 - minimumScale));

            let scale;

            if (currentPosition > basePosition) {
                scale = 1 + deflection;
            } else {
                scale = 1 - deflection;
            }

            scale = Math.round(scale * 100) / 100;

            return scale;
        };

        const aplyTransformStyle = function(scale, targetElement) {
            targetElement.querySelector(
                ".bar-content"
            ).style.transform = `translate(-50%, -50%) scale(${scale})`;
        };

        const rangeTop = basePosition - targetElementHeight / 2;

        const rangeBottom = rangeTop + targetElementHeight;

        let mainMarkedtargetElementIndex;

        this.animate = function() {
            for (let i = 0; i < targetElements.length; i++) {
                const targetElementOffset = getTargetElementOffset(
                    componentElement,
                    targetElements[i]
                );

                const scale = getScaleValue(targetElementOffset, 0.7);

                aplyTransformStyle(scale, targetElements[i]);

                if (
                    -targetElementOffset > rangeTop &&
                    -targetElementOffset < rangeBottom
                ) {
                    mainMarkedtargetElementIndex = i;
                }
            }

            return mainMarkedtargetElementIndex;
        };

        this.animate();
    }
}

export default BarAnimation;

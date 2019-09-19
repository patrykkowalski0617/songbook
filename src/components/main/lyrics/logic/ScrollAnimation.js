class ScrollAnimation {
    constructor(componentElement, stopAnimationState) {
        const targetElements = componentElement.querySelectorAll(".lyrics-bar");

        const easing = function(t, b, c, d) {
            return (c * t) / d + b;
        };
        // http://www.gizma.com/easing

        this.animate = function(duration, targetElementIndex) {
            let startTime = null;

            const startPosition = componentElement.scrollTop;

            const animation = function(currentTime) {
                const target = targetElements[targetElementIndex];

                if (startTime === null) {
                    startTime = currentTime;
                }

                if (target) {
                    const componentElementPosition = componentElement.getBoundingClientRect()
                        .top;

                    const getTopDistance = function() {
                        const marginTop = window.getComputedStyle(
                            targetElements[0]
                        ).marginTop;
                        return Number(marginTop.replace(/px/, ""));
                    };

                    const targetPosition =
                        target.getBoundingClientRect().top +
                        componentElement.scrollTop -
                        componentElementPosition -
                        getTopDistance();

                    const timeElapsed = currentTime - startTime;

                    const distance = targetPosition - startPosition;

                    const run = easing(
                        timeElapsed,
                        startPosition,
                        distance,
                        duration
                    );

                    componentElement.scrollTo(0, run);

                    if (timeElapsed < duration && stopAnimationState()) {
                        requestAnimationFrame(animation);
                    }
                }
            };
            requestAnimationFrame(animation);
        };
    }
}

export default ScrollAnimation;

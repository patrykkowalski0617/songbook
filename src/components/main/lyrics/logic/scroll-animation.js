class ScrollAnimation {
    constructor(container, stopAnimationState) {
        const lyricsSections = container.querySelectorAll(".lyrics-bar");
        const easing = function(t, b, c, d) {
            return (c * t) / d + b;
        };
        // http://www.gizma.com/easing

        this.animate = function(duration, targetSectionIndex) {
            let startTime = null;
            const startPosition = container.scrollTop;
            const animation = function(currentTime) {
                if (startTime === null) {
                    startTime = currentTime;
                }

                const target = lyricsSections[targetSectionIndex];
                if (target) {
                    const containerPosition = container.getBoundingClientRect()
                        .top;
                    const getTopDistance = function() {
                        const marginTop = window.getComputedStyle(
                            lyricsSections[0]
                        ).marginTop;
                        return Number(marginTop.replace(/px/, ""));
                    };
                    const targetPosition =
                        target.getBoundingClientRect().top +
                        container.scrollTop -
                        containerPosition -
                        getTopDistance();
                    const timeElapsed = currentTime - startTime;

                    const distance = targetPosition - startPosition;
                    const run = easing(
                        timeElapsed,
                        startPosition,
                        distance,
                        duration
                    );

                    container.scrollTo(0, run);

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

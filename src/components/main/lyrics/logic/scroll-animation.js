class ScrollAnimation {
    constructor(
        container,
        lyricsSections,
        markedSectionIndex,
        callbackOnStart,
        callbackOnEnd,
        stopAnimationState
    ) {
        const _this = this;

        const easing = function(t, b, c, d) {
            return (c * t) / d + b;
        };
        // http://www.gizma.com/easing

        this.markedSectionIndex = markedSectionIndex;

        this.updateData = function(markedSectionIndex) {
            this.markedSectionIndex = markedSectionIndex;
        };

        this.anim = function(duration) {
            let startTime = null;
            const startPosition = container.scrollTop;
            const markedSectionIndex = _this.markedSectionIndex;
            if (callbackOnStart) {
                callbackOnStart();
            }
            const animation = function(currentTime) {
                if (startTime === null) {
                    startTime = currentTime;
                }

                const target = lyricsSections[markedSectionIndex + 1];
                const containerPosition = container.getBoundingClientRect().top;
                const getTopDistance = function() {
                    const marginTop = window.getComputedStyle(lyricsSections[0])
                        .marginTop;
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
                } else if (callbackOnEnd) {
                    callbackOnEnd();
                }
            };
            requestAnimationFrame(animation);
        };
    }
}

export default ScrollAnimation;

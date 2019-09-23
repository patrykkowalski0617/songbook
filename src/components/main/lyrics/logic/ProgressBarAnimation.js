class ProgressBarAnimation {
    constructor(scrolledElement, progressBar) {
        this.scrolledElement = scrolledElement;
        this.progressBar = progressBar;
        this.lyricsBodyScroll = this.scrolledElement.scrollTop;
        this.basePosition = Number(
            window
                .getComputedStyle(
                    this.scrolledElement.querySelectorAll(".lyrics-bar")[0]
                )
                .marginTop.replace(/px/, "")
        );
    }

    updateProgressBar = () => {
        const height =
            this.scrolledElement.scrollHeight -
            this.scrolledElement.clientHeight -
            this.basePosition / 2;
        const lyricsBodyScroll = this.scrolledElement.scrollTop;
        const scrolled = (lyricsBodyScroll / height) * 100;

        this.progressBar.style.width = scrolled + "%";
    };
}

export default ProgressBarAnimation;

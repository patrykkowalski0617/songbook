export default function ScrollProgress(lyricsBody) {
    const lyricsBodyScroll = lyricsBody.scrollTop;
    const height = lyricsBody.scrollHeight - lyricsBody.clientHeight - 40;
    const scrolled = (lyricsBodyScroll / height) * 100;

    return scrolled + "%";
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { counterIteration, counterToggle } from "../../../redux/actions";
import Sound from "react-sound-dkadrios";

class Counter extends Component {
    componentWillMount() {
        this.intervalId = 0;
    }

    componentDidMount() {
        const {
            indexOfLastBar,
            counterIteration,
            onBarChange,
            counterToggle,
            redux: { lyricsData, counterScrollDelay, songTiming }
        } = this.props;

        const intervalTime = (60 / lyricsData.tempo) * 1000;
        const startDelay = counterScrollDelay * songTiming;
        const endDelay = 1;

        let counterIterationNumber = 0;
        let markedSectionIndex = 0;
        let isLyricsEnd;
        let endDelayIteration = 0;

        this.intervalId = setInterval(() => {
            counterIterationNumber = this.props.redux.counterIterationNumber;
            markedSectionIndex = this.props.markedSectionIndex;

            isLyricsEnd = () =>
                markedSectionIndex === indexOfLastBar &&
                (counterIterationNumber % songTiming) - songTiming === -1;

            if (!isLyricsEnd()) {
                counterIteration(true);
                //  if second bar is active
                if (
                    counterIterationNumber >= startDelay &&
                    counterIterationNumber % songTiming === 0
                ) {
                    onBarChange();
                }
            } else {
                if (endDelayIteration === endDelay) {
                    counterToggle();
                } else {
                    counterIteration(true);
                }

                endDelayIteration++;
            }
        }, intervalTime);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        counterIteration(false);
    }

    shouldComponentUpdate(nextProps) {
        return (
            nextProps.redux.counterIterationNumber -
            this.props.redux.counterIterationNumber
        );
    }

    render() {
        const {
            redux: {
                form: {
                    settings: {
                        values: { metronom_sound }
                    }
                }
            }
        } = this.props;
        return metronom_sound ? (
            <Sound
                url={"metronom_audio/metronom.mp3"}
                playStatus={"PLAYING"}
                autoLoad={true}
            />
        ) : null;
    }
}

const mapStateToProps = state => {
    return { redux: state };
};
const mapDispatchToProps = {
    counterIteration,
    counterToggle
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

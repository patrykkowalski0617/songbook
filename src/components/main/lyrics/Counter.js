import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { counterIteration, counterToggle } from "../../../redux/actions";
import Sound from "react-sound-dkadrios";
import metronomAudio from "./metronom/metronom_audio/metronom.mp3";

class Counter extends PureComponent {
    componentWillMount() {
        this.intervalId = 0;
    }
    componentDidMount() {
        const intervalTime = (60 / this.props.redux.lyricsData.tempo) * 1000;
        const delay =
            this.props.redux.counterScrollDelay * this.props.redux.songTiming;
        this.intervalId = setInterval(() => {
            if (
                this.props.markedSectionIndex !== this.props.lastSectionIndex ||
                (this.props.markedSectionIndex ===
                    this.props.lastSectionIndex &&
                    this.props.redux.counterIterationNumber %
                        this.props.redux.songTiming <
                        3)
            ) {
                this.props.counterIteration(true);
                if (
                    this.props.redux.counterIterationNumber > delay &&
                    this.props.redux.counterIterationNumber %
                        this.props.redux.songTiming ===
                        2
                ) {
                    this.props.onBarChange();
                }
            } else {
                this.props.counterToggle(false);
            }
        }, intervalTime);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);

        counterIteration(false);
    }

    render() {
        return (
            <Sound url={metronomAudio} playStatus={"PLAYING"} autoLoad={true} />
        );
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

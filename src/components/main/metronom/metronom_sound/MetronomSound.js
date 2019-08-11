import React, { Component } from "react";
import Sound from "react-sound-dkadrios";
import metronom from "./metronom.mp3";

class MetronomSound extends Component {
    state = { playStatus: "STOPPED", debugMode: false };

    render() {
        return (
            <Sound
                url={metronom}
                playStatus={this.props.playStatus}
                autoLoad={true}
            />
        );
    }
}

export default MetronomSound;

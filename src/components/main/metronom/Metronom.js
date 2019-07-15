import React, { Component } from "react";
import "./metronom.css";
import MetronomElement from "./MetronomElement";

class Metronom extends Component {
    state = { knock: -1 };

    songTiming = this.props.counter.data.songTiming();
    colSize = 12 / this.songTiming;
    metronomParts = Array(this.songTiming).fill(null);
    createMetronom = function() {
        return this.metronomParts.map((item, index) => {
            let marker = "";
            if (index === this.state.knock) {
                marker = "active";
            }

            return (
                <MetronomElement
                    key={index}
                    colSize={this.colSize}
                    marker={marker}
                />
            );
        });
    };

    updateKnock = function() {
        let no = this.state.knock;
        if (no < this.songTiming - 1) {
            no++;
        } else {
            no = 0;
        }
        return no;
    };

    componentDidMount() {
        const tt = this;
        this.props.counter.data.callbackOn.eachIteration = function() {
            tt.setState({
                knock: tt.updateKnock()
            });
        };
        this.props.counter.data.callbackOn.metronomStop = function() {
            tt.setState({
                knock: -1
            });
        };
    }

    render() {
        return (
            <div className="metronom">
                <p className="description">metronom</p>
                <div className="metronom-body row vertical-padding">
                    {this.createMetronom()}
                </div>
            </div>
        );
    }
}

export default Metronom;

import React, { Component } from "react";
import "./metronom.css";
import MetronomElement from "./MetronomElement";

import counter from "../../../logic/counter";

class Metronom extends Component {
    state = { knock: -1 };

    songTiming = counter.data.songTiming();
    colSize = 12 / this.songTiming;
    metronomParts = Array(this.songTiming).fill(null);
    metronom = function() {
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

    updateMetronom = function() {
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
        counter.data.callbackOn.eachIteration = function() {
            tt.setState({
                knock: tt.updateMetronom()
            });
        };
    }

    render() {
        return (
            <div className="metronom">
                <p className="description">metronom</p>
                <div className="metronom-body row vertical-padding">
                    {this.metronom()}
                </div>
            </div>
        );
    }
}

export default Metronom;

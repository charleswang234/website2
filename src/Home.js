import React, { Component } from "react";
import TitlePage from "./TitlePage.js";
import Skills from "./Skills.js";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <TitlePage />
                <Skills />
            </div>
        )
    }
}

export default Home;

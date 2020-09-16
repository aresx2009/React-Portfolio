import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profile from "./img/profile.JPG"

class Landing extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={profile}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">

                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML5/CSS3 | JavaScript | Express | jQuery | Node.js | React.js | MongoDB | MySQL | Git</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/walter-kieke-b3b68277/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/* Github */}
                                <a href="https://github.com/aresx2009" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
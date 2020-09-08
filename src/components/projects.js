import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "black", marginBottom: "0", height: "196px", background: "url(https://aresx2009.github.io/Portfolio/assets/image/P1.png) center / cover" }}>Weather Dashboard</CardTitle>
                        <CardText>
                            Search current and 5-days forecast by city name
                </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2*/}
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "black", marginBottom: "0", height: "196px", background: "url(https://aresx2009.github.io/Portfolio/assets/image/P2.png) center / cover" }}>Work Day Scheduler</CardTitle>
                        <CardText>
                            A simple calendar app for scheduling your work day
                </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "black", marginBottom: "0", height: "196px", background: "url(https://aresx2009.github.io/Portfolio/assets/image/P1.png) center / cover" }}>Weather Dashboard</CardTitle>
                        <CardText>
                            Search current and 5-days forecast by city name
                </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "black", marginBottom: "0", height: "196px", background: "url(https://aresx2009.github.io/Portfolio/assets/image/P1.png) center / cover" }}>Weather Dashboard</CardTitle>
                        <CardText>
                            Search current and 5-days forecast by city name
                </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>this is 123</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Self Ａssighment</Tab>
                    <Tab>Group Project</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Project;
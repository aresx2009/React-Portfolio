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
                            <a href="https://github.com/aresx2009/Weather-app" rel="noopener noreferrer" target="_blank"> <Button colored>Github</Button></a>
                            <a href="https://aresx2009.github.io/Weather-app/" rel="noopener noreferrer" target="_blank"> <Button colored>Live Demo</Button></a>
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
                            <a href="https://github.com/aresx2009/Work-Day-Scheduler" rel="noopener noreferrer" target="_blank"> <Button colored>Github</Button></a>
                            <a href="https://aresx2009.github.io/Work-Day-Scheduler/" rel="noopener noreferrer" target="_blank"> <Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3*/}
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "black", marginBottom: "0", height: "196px", background: "url(https://aresx2009.github.io/Homework02/image/Employee.png) center / cover" }}>Employee-Summary</CardTitle>
                        <CardText>
                            Enter employee information and create team profile
                </CardText>
                        <CardActions border>
                            <a href="https://github.com/aresx2009/Template-Engine---Employee-Summary" rel="noopener noreferrer" target="_blank"> <Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=7KIC27WW_bI&feature=youtu.be" rel="noopener noreferrer" target="_blank"> <Button colored>Youtube Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 4*/}
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "black", marginBottom: "0", height: "196px", background: "url(https://aresx2009.github.io/Homework02/image/Budget.png) center / cover" }}>Progressive Budget</CardTitle>
                        <CardText>
                            Giving users a fast and easy way to track their money
                </CardText>
                        <CardActions border>
                            <a href="https://github.com/aresx2009/Progressive-Budget" rel="noopener noreferrer" target="_blank"> <Button colored>Github</Button></a>
                            <a href="https://mighty-wildwood-64964.herokuapp.com/" rel="noopener noreferrer" target="_blank"> <Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "black", marginBottom: "0", height: "196px", background: "url(https://aresx2009.github.io/Portfolio/assets/image/P3.png) center / cover" }}>Healthy Quarantine Recipes</CardTitle>
                        <CardText>
                            Hungry at home provides users the ability to search recipes based on what type of food they have in mind. The website enables users to search their favorite type of alcohol & drink recipes that are generated with the users'
                            favorite alcohol. We decided to include a news section due to the outbreak of Covid-19. There has been a large amount of false information circulating social media & believe that providing reliably sourced news articles would benefit the user.
            </CardText>
                        <CardActions border>
                            <a href="https://github.com/aresx2009/Project1" rel="noopener noreferrer" target="_blank"> <Button colored>Github</Button></a>
                            <a href="https://aresx2009.github.io/Project1//" rel="noopener noreferrer" target="_blank"> <Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2*/}
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "black", marginBottom: "0", height: "196px", background: "url(https://aresx2009.github.io/Portfolio/assets/image/P4.png) center / cover" }}>Guess The Quote</CardTitle>
                        <CardText>
                            This is a quotes guessing game that will randomly give you a quote and you will have to guess by selecting from the options who was the author of the quote.
            </CardText>
                        <CardActions border>
                            <a href="https://github.com/aresx2009/project2" rel="noopener noreferrer" target="_blank"> <Button colored>Github</Button></a>
                            <a href="https://project2-team-cleric.herokuapp.com/" rel="noopener noreferrer" target="_blank"> <Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
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
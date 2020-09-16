import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl"
import profile from "./img/profile.JPG"

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Walter Foreman Kieke</h2>
                        <img src={profile}
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                            My name is Walter Foreman Kieke. I was born and raised in Taipei, Taiwan.

    I have three years financial representative experience and currently enroll SMU’s full Stack web developer program.
                        </p><hr />
                        <p>HTML5/CSS3 | JavaScript | Express | jQuery | Node.js | React.js | MongoDB | MySQL | Git</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (909)-358-1555
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        aresx2009@gmail.com
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                        <a href="https://www.linkedin.com/in/walter-kieke-b3b68277/" rel="noopener noreferrer" target="_blank">linkedin</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-github" aria-hidden="true" />
                                        <a href="https://github.com/aresx2009/" rel="noopener noreferrer" target="_blank">Github</a>
                                    </ListItemContent>
                                </ListItem>



                            </List>

                        </div>


                    </Cell>

                </Grid>


            </div>
        )
    }
}

export default Contact;
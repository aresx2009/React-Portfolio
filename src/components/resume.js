import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education"
import Experience from "./experience"
import Skills from "./skills"
import resume from "./img/Walter.pdf"

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <h2 style={{ paddingTop: "2em" }}>Walter Foreman Kieke</h2>
                        <h4 style={{ color: "grey" }}>Programmer</h4>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                        <h5>Address</h5>
                        <p>Grapevine, 76051</p>
                        <h5>Phone</h5>
                        <p>(909)358-1555</p>
                        <h5>Email</h5>
                        <p>aresx2009@gmail.com</p>
                        <h4>Download Resume</h4>
                        <a href={resume} download>Resume</a>
                        <h5>Web</h5>
                        <a href="https://github.com/aresx2009/" rel="noopener noreferrer" target="_blank">Github</a><br />
                        <a href="https://www.linkedin.com/in/walter-kieke-b3b68277/" rel="noopener noreferrer" target="_blank">linkedin</a>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2020.03}
                            endYear={2020.09}
                            schoolName="Southern Methodist University"
                            major="Certificate: Full-stack Web Developer Program"
                        />
                        <Education
                            startYear={2020.03}
                            endYear={2020.09}
                            schoolName="University of Texas At Arlington"
                            major="MBA: Master of Business Administration"
                        />
                        <Education
                            startYear={2008.08}
                            endYear={2012.08}
                            schoolName="National Taiwan Ocean University"
                            major="Bachelor of Science in Transportation & Navigation"
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2019.01}
                            endYear="Current"
                            jobName="Allied stone"
                            jobTitle="FQ Estimator"
                            jobDescription="Analyze company data, monitor budgets and prices using software packages.
                            Identify labor, material, costs and time requirements by researching proposals and any related documents."
                        />
                        <Experience
                            startYear={2017.09}
                            endYear={2018.11}
                            jobName="Charles Schwab"
                            jobTitle="Global Service Specialist"
                            jobDescription="Handle and resolve client inquiries (Trade, information, system issue).
                            Provide accurate stock quotes and finish the task correctly in a short time.
                            Share the best practice with the team members improve skills and experiences.
                            Provide high level service for international clients."                            
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        <h2>Skills</h2>
                        <Skills 
                        skill = "Javascripts"
                        progress={70}
                        />
                        <Skills 
                        skill = "HTML/CSS"
                        progress={85}
                        />
                        <Skills 
                        skill = "NodeJS"
                        progress={60}
                        />
                        <Skills 
                        skill = "React"
                        progress={60}
                        />
                        <Skills 
                        skill = "MySQL"
                        progress={85}
                        />


                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Resume;
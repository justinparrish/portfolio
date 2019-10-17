import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experince from './Experience'
import Skills from './Skills'


export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{height: '200px', color: '#0083B0'}}>
                                <h1 style={{fontSize: '13em', border: '3px dotted'}}>JP</h1>
                            </div>
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Justin Parrish</h2>
                        <h4 style={{ color: 'grey' }}>Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid #0083B0', width: '50%' }} />
                        <p>As a software engineer, I have developed many stunning applications using technologies like Django,
                             Express, React, and various other frameworks and libraries. With most of my work being Full Stack 
                             applications, I have dealt with databases such as MongoDb and SQL. The few projects that aren’t 
                             Full Stack, are written in Vanilla Js, jQuery, and limited Python.</p>
                        <hr style={{ borderTop: '3px solid #0083B0', width: '50%' }} />
                        <h5>Location</h5>
                        <p>Atlanta Metropolitan Area</p>
                        <h5>Phone</h5>
                        <p>(678) 634-4384</p>
                        <h5>Email</h5>
                        <p>justinparrish7@gmail.com</p>
                        <h5>Web</h5>
                        <p>justinparrish.github.io/portfolio/</p>
                        <hr style={{ borderTop: '3px solid #0083B0', width: '50%' }} />
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear='July 2019'
                            endYear='October 2019'
                            schoolName='General Assembly'
                            schoolDescription="As an alumni of this school, I was taught all the concepts of
                            the software engineering world. From computer science to coding four stunning projects
                            with four different objectives, this school has made me into a flexible software engineer.
                            Our focuses here was Javascript, React, and Full Stack Development with framework use.
                            We also learned and coded in Python making the students bilingual coders."
                        />
                        <Education 
                            startYear='August 2014'
                            endYear='May 2018'
                            schoolName='Martin Luther King Jr. High School'
                            schoolDescription="As a high school alumni, I was taught the basics of life from schooling
                            and decision making. There were multiple career paths to choose from, so I was placed into
                            a software engineer's path, in which I chose. Along side of my career path I was placed in
                            AP courses graduating with a 3.1 GPA."
                        />
                        <hr style={{borderTop: '3px solid #0083B0'}} />
                        
                        <h2>Experience</h2>
                        <Experince 
                            startYear='July 2019'
                            endYear='October 2019'
                            jobName='General Assembly'
                            jobDescription="While being at GA, I worked on many React projects and activies that also included
                            databases. I dealt with MongoDB, and SQLite databases. A few projects required CRUD implementation,
                            with the use of an Agile Development process. We used various framework and Javascript libraries, 
                            but many we used VanilllaJs and some jQuery. Some Python code was used for Full Stack applications,
                            mainly when Django was involved, but ExpressJs and NodeJs was normally of choice for most applications."
                        />
                        <hr style={{ borderTop: '3px solid #0083B0'}} />

                        <h2>Skills</h2>

                        <Skills 
                            skill='Javascript'
                            progress={88}
                        />
                        <Skills 
                            skill='HTML5'
                            progress={75}
                        />
                        <Skills 
                            skill='CSS3'
                            progress={75}
                        />
                        <Skills 
                            skill='ReactJs'
                            progress={80}
                        />
                        <Skills 
                            skill='ExpressJs'
                            progress={60}
                        />
                        <Skills 
                            skill='NodeJs'
                            progress={60}
                        />
                        <Skills 
                            skill='Django'
                            progress={60}
                        />
                        <Skills 
                            skill='Python'
                            progress={40}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
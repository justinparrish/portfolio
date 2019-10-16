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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries</p>
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
                            startYear={2019}
                            endYear={2019}
                            schoolName='General Assembly'
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries"
                        />
                        <Education 
                            startYear={2014}
                            endYear={2018}
                            schoolName='Martin Luther King Jr. High School'
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries"
                        />
                        <hr style={{borderTop: '3px solid #0083B0'}} />
                        
                        <h2>Experience</h2>
                        <Experince 
                            startYear='July 2019'
                            endYear='October 2019'
                            jobName='General Assembly'
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries"
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
                            progress={60}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
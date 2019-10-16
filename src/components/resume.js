import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'


export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                                alt='avatar'
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Justin Parrish</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
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
                        
                        <Education />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
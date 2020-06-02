import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import { Link } from 'react-router-dom'
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

export default class LandingPage extends Component {
    state = {
        contact: false
    }

    viewContactPage = () => {
        const contact = !this.state.contact
        this.setState({ contact })
    }

    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={7}>
                        <img src='https://i.imgur.com/foV3DFT.jpg' className='image-me' />

                        <div className='banner-text'>
                            <h1>Software Engineer</h1>
                            <hr />

                            <p>HTML5/CSS3 | Javscript | NodeJS | Express | MongoDb |
                                React | Python | Django
                            </p>
                            <div className='social-links'>
                                <a href='https://github.com/justinparrish' target='_blank'>
                                    <i class="fa fa-github-square" aria-hidden="true" />
                                </a>
                                <a href='/images/Justin_Parrish_Resume_2020.pdf' download target='_blank'>
                                    <i className="fa fa-file-text" aria-hidden="true" />
                                </a>
                                <a href='https://www.linkedin.com/in/justin-parrish-b42057188/' target='_blank'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </Cell>
                    <Cell col={4}>
                        <div className='about-banner' style={{marginTop: '200px'}}>
                        <h1 className='about-me'>About Me</h1>
                        <div className='banner-text banner'>
                            <h1 style={{fontSize: '50px'}}>Justin Parrish</h1>
                            <hr />
                            <p>Hello welcome to my porfolio! My name is Justin Parrish.
                                I am a young software engineer that is beginning an fun and
                                ambitious journey to success. 
                            </p>
                        </div>
                        </div>
                    </Cell>
                </Grid>
                <div className='contact-view-button'>
                    <button onClick={this.viewContactPage} style={{ background: '#27221F', color: 'white', border: 'none', width: '100%' }}><h1>Contact Me</h1></button>
                </div>
                {this.state.contact ? <Contact /> : null}
            </div>
        )
    }
}
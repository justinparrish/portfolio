import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src='https://i.imgur.com/foV3DFT.jpg' className='image-me'/>

                        <div className='banner-text'>
                            <h1>Junior Software Developer</h1>

                            <hr />

                            <p>HTML5/CSS3 | Javscript | NodeJS | Express | MongoDb |
                                React | Python | Django
                            </p>
                            <div className='social-links'>
                                <a href='https://github.com/justinparrish' target='_blank'></a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
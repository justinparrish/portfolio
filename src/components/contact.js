import React, { Component } from 'react'
import { Grid, Cell, ListItem, ListItemContent } from 'react-mdl'

export default class Contact extends Component {
    render = () => (
        <div className='contact-body'>
            <Grid className='contact-grid' style={{color: '#0083B0'}}>
                <Cell col={6}>
                    <h2>Justin Parrish</h2>
                    <h1 style={{fontSize: '13em', border: '3px dotted #0083B0'}}>JP</h1>
                </Cell>
                <Cell col={6} >
                    <h2>Contact Me</h2>
                    <hr />
                    <div className='contact-list'>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: '#0083B0'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                <a href='tel:678-634-4384'>(678) 634-4384</a>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: '#0083B0'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                <a href='mailto:justinparrish7@gmail.com' target='_top'>justinparrish7@gmail.com</a>
                            </ListItemContent>
                        </ListItem>

                    </div>

                </Cell>
            </Grid>
        </div>
    )
}
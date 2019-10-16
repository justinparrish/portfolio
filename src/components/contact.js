import React, { Component } from 'react'
import { Grid, Cell, ListItem, ListItemContent } from 'react-mdl'

export default class ContactMe extends Component {
    render = () => (
        <div className='contact-body'>
            <Grid className='contact-grid'>
                <Cell col={6}>
                    <h2>Justin Parrish</h2>
                    <img src="https://cdn0.iconfinder.com/data/icons/faces-3/24/148-128.png"
                        alt='temporary avatar'
                        style={{ height: '250px' }}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />

                    <div className='contact-list'>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                <a href='tel:678-634-4384'>(678) 634-4384</a>
                                
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
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
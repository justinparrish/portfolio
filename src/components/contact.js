import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

export default class ContactMe extends Component {
    render = () => (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>half page</Cell>
                    <Cell col={6}>half page</Cell>
                </Grid>
            </div>
        )
}
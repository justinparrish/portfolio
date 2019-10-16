import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'

export default class Experience extends Component {
    render = () => (
        <Grid>
            <Cell col={4}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
            </Cell>
            <Cell col={8}>
                <h4 style={{marginTop: '0px'}}>{this.props.JobName}</h4>
                <p>{this.props.JoblDescription}</p>
            </Cell>
        </Grid>
    )
}
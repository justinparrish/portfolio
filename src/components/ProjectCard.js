import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

export default class ProjectCard extends Component {

    render = () => (
        <Card shadow={5} style={{ width: '500px', margin: 'auto', marginBottom: '50px' }} className='card'>
        <CardTitle style={{ color: '#fff', height: '270px', background: `${this.props.image}` }}>
            {this.props.title}
    </CardTitle>
        <CardText>
            {this.props.text}
    </CardText>
        <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button colored href={this.props.github}>GitHub</Button>
            <Button colored href={this.props.deployedApp}>Deployed App</Button>
        </CardActions>
        <CardMenu style={{ color: '#fff' }}>
            <IconButton name='share' />
        </CardMenu>
    </Card>
    )
}
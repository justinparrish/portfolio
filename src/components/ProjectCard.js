import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

export default class ProjectCard extends Component {

    render = () => (
        <Card shadow={5} style={{ width: '500px', margin: 'auto' }}>
        <CardTitle style={{ color: '#fff', height: '270px', background: 'url(images/motorboard.png) center / cover' }}>
            MotorBoard
    </CardTitle>
        <CardText>
            Created with React and Django.(Frameworks used were AntDesign ,React-MDL)
    </CardText>
        <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button colored href='https://github.com/justinparrish/project-four'>GitHub</Button>
            <Button colored href='https://justinparrish.github.io/project-one/'>Deployed App</Button>
        </CardActions>
        <CardMenu style={{ color: '#fff' }}>
            <IconButton name='share' />
        </CardMenu>
    </Card>
    )
}
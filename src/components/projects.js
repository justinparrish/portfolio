import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import ProjectCard from './ProjectCard'

export default class Projects extends Component {
    state = {
        activeTab: 0
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <div className='front-end-projects cards'>
                    <h1>Front End Projects</h1>
                    <Card shadow={5} style={{ width: '500px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '250px', background: 'url(images/save_chester.png) center / cover' }}>
                            Save Chester!
                    </CardTitle>
                        <CardText>
                            Created with HTML5/CSS3 and VanillaJs.
                    </CardText>
                        <CardActions border style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button colored href='https://github.com/justinparrish/project-one'>GitHub</Button>
                            <Button colored href='https://justinparrish.github.io/project-one/'>Deployed App</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='full-stack-projects cards'>
                    <h1>Full Stack Projects</h1>
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
                    <ProjectCard />

                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>Back End Projects</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Front End</Tab>
                    <Tab>Full Stack</Tab>
                </Tabs>
                <section className='project-grid'>
                    <Grid className='projects-grid'>
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div >
        )
    }
}
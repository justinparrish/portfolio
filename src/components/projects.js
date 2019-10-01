import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

export default class Projects extends Component {
    state = {
        activeTab: 0
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '170px', background: 'url(images/save_chester.png) center / cover'}}>
                        Save Chester!
                    </CardTitle>
                    <CardText>
                        Created with HTML5/CSS3 and VanillaJs.
                    </CardText>
                    <CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Button colored href='https://github.com/justinparrish/project-one'>GitHub</Button>
                        <Button colored href='https://justinparrish.github.io/project-one/'>Deployed App</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>Back End Projects</h1>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>Full Stack Projects</h1>
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
                    <Tab>Back End</Tab>
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
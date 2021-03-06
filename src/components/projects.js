import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import ProjectCard from './ProjectCard'

export default class Projects extends Component {
    state = {
        activeTab: 0
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h1>Front End Projects</h1>
                    <div className='front-end-projects cards'>
                        <ProjectCard 
                            image='images/save_chester.png'
                            title='Save Chester!'
                            text='Created with HTML5/CSS3 and VanillaJs.'
                            github='https://github.com/justinparrish/project-one'
                            deployedApp='https://justinparrish.github.io/project-one/'
                            />
                        <ProjectCard 
                            image='images/bmi-calculator.png'
                            title='BMI-Calculator'
                            text='Created with ReactJs'
                            github='https://github.com/justinparrish/BMI-Calculator'
                            deployedApp='https://calm-journey-09555.herokuapp.com/'
                            />
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>Full Stack Projects</h1>
                    <div className='full-stack-projects cards'>
                        <ProjectCard 
                            image='images/motorboard.png'
                            title='MotorBoard'
                            text='Created with React and Django.(Frameworks used: AntDesign ,React-MDL)'
                            github='https://github.com/justinparrish/project-four'
                            deployedApp='https://evening-anchorage-06845.herokuapp.com'
                            />
                        <ProjectCard 
                            image='images/carrnd.png'
                            title='Fun Of Cars'
                            text='Created with the MEHN Stack and plain CSS3.'
                            github='https://github.com/justinparrish/project-two-carrnd'
                            deployedApp='https://carrnd-rentacar.herokuapp.com/user'
                            />
                        <ProjectCard 
                            image='images/toj.png'
                            title='The Online Journal'
                            text='Created with the MERN Stack. Intended for a single user.(Framework used: AntDesign)'
                            github='https://github.com/justinparrish/project-three-journals'
                            deployedApp='https://morning-falls-93398.herokuapp.com/'
                            />
                        <ProjectCard 
                            image='images/cdis.png'
                            title='CDIS Documentation Helper'
                            text='Created with React and Django. Intended for use of CDIS employees of various hospitals.(Frameworks used: Semantic UI React )'
                            github='https://github.com/justinparrish/CDIS-App'
                            deployedApp='https://cdis-dh.herokuapp.com/'
                            />
                    </div>
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
import React, {Component} from 'react'
import { Tabs, Tab } from 'react-mdl'

export default class Projects extends Component {
    state = {
        activeTab: 0
    }

    toggleCategories = () => {
        if(this.state.activeTab === 0) {
            return (
                <div>
                    <h1>Front End Projects</h1>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div>
                    <h1>Back End Projects</h1>
                </div>
            )
        } else if(this.state.activeTab === 2) {
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
                    onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                        <Tab>Front End</Tab>
                        <Tab>Back End</Tab>
                        <Tab>Full Stack</Tab>
                </Tabs>
                <section className='project-grid'>
                {this.toggleCategories()} 
                </section>
            </div>
        )
    }
}
import React from 'react';
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import Routes from './components/routes'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header className='header-color' title="Justin's Portfolio" scroll>
              <Navigation>
                <a href="/about">About</a>
                <a href="/resume">Resume</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact Me</a>
              </Navigation>
            </Header>
            <Drawer title="SideBar">
              <Navigation>
                <a href="/about">About</a>
                <a href="/resume">Resume</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact Me</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Routes />
            </Content>
          </Layout>
        </div>
      </div>
    )
  }
}

export default App;

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
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/">Home</Link>
              </Navigation>
            </Header>
            <Drawer title="SideBar">
              <Navigation>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
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

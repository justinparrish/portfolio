import React from 'react';
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import Routes from './components/Routes'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout className='layout'>
            <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>Justin's Portfolio</Link>} scroll>
              <Navigation className='nav-text'>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>Justin's Portfolio</Link>}>
              <Navigation>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
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

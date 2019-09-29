import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: '400px', position: 'relative' }}>
          <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
            <Header transparent title="Title" style={{ color: 'white' }}>
              <Navigation>
                <a href="/">About Me</a>
                <a href="/">Resume</a>
                <a href="/">Projects</a>
                <a href="/">Contact Me</a>
              </Navigation>
            </Header>
            <Drawer title="Extra">
              <Navigation>
                <a href="/">About</a>
                <a href="/">Resume</a>
                <a href="/">Project</a>
                <a href="/">Contact Me</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </div>
      </div>
    )
  }
}

export default App;

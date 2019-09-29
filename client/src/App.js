import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'

const App = () => (
  <div>
    <div style={{ height: '700px', position: 'relative' }}>
      <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
        <Header transparent title="Title" style={{ color: 'white' }}>
          <Navigation>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="#">About</a>
            <a href="#">Resume</a>
            <a href="#">Project</a>
            <a href="#">Contact Me</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  </div>
)

export default App;

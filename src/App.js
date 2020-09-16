import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from './components/main';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: "none", color: "white" }} to="/"> Walter Kieke </Link>} scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/contact">About Me & Contact</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Project</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{ textDecoration: "none", color: "black" }} to="/"> Walter Kieke </Link>} >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/contact">About Me & Contact</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Project</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div >
  );
}

export default App;

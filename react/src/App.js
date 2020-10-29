import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Challenge } from './Challenge';
import { Morpion } from './Morpion';
import { Pendu } from './Pendu';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';

function App() {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Jumbotron/>
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Challenge} />
                        <Route path="/morpion" component={Morpion} />
                        <Route path="/pendu" component={Pendu} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </Layout>
        </React.Fragment>
  );
}

export default App;

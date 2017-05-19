import React, { Component } from 'react';
import './App.css';
import Footer from './shared/Footer';
import Header from './shared/Header';
import Home from './shared/Home';
import Page1 from './widget1/Page1';
import Page2 from './widget2/Page2';
import Page3 from './widget3/Page3';
import Page4 from './widget4/Page4';
import Page5 from './widget5/Page5';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Header />
                <div className="Body">
                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/widget1" component={Page1} />
                            <Route path="/widget2" component={Page2} />
                            <Route path="/widget3" component={Page3} />
                            <Route path="/widget4" component={Page4} />
                            <Route path="/widget5" component={Page5} />
                        </div>
                    </Router>
                </div>
              <Footer/>
          </div>
      );
  }
}

export default App;

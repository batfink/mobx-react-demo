import React, { Component } from 'react';
import Widget4 from './Widget4';
import { observer, observable } from 'mobx';

class Page4 extends Component {
    @observable state = {
        count: 0
    };

    render () {
        return (
          <div>
              <h1>Widget 4 - Mobx shared state</h1>

              <Widget4 state={this.state} />
              <Widget4 state={this.state} />
              <Widget4 state={this.state} />
              <Widget4 state={this.state} />
          </div>
        );
    }
}

export default Page4;

// EOF
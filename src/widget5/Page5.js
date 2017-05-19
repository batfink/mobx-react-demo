import React, { Component } from 'react';
import Widget5 from './Widget5';
import { observer, observable } from 'mobx';

class Page5 extends Component {
    render () {
        return (
          <div>
              <h1>Widget 5 - Mobx injected state</h1>

              <Widget5 />
              <Widget5 />
              <Widget5 />
              <Widget5 />
          </div>
        );
    }
}

export default Page5;

// EOF


import React, { Component } from 'react';
import Widget1 from './Widget1';

class Page extends Component {
    render () {
        return (
          <div>
              <h1>Widget 1 - Local state</h1>

              <Widget1 />
              <Widget1 />
              <Widget1 />
              <Widget1 />
          </div>
        );
    }
}

export default Page;

// EOF
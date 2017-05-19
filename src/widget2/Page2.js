import React, { Component } from 'react';
import Widget2 from './Widget2';

class Page4 extends Component {
    constructor (props) {
        super (props);
        this.state = {
            count: 0
        };
        return;
    }

    getController () {
        return {
            increment: () => {
                this.setState ({
                    count: this.state.count + 1
                })
            },
            decrement: () => {
                this.setState ({
                    count: this.state.count - 1
                });
            },
            getCount: () => {
                return this.state.count;
            }
        };
    }

    render () {
        const controller = this.getController ();

        return (
          <div>
              <h1>Widget 2 - App shared state</h1>

              <Widget2 controller={controller} />
              <Widget2 controller={controller} />
              <Widget2 controller={controller} />
              <Widget2 controller={controller} />
          </div>
        );
    }
}

export default Page4;

// EOF
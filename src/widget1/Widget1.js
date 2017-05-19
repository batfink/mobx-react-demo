import React, { Component } from 'react';
import { Well, Button } from 'react-bootstrap';

class Widget1 extends Component {
    constructor (props) {
        super (props);
        this.state = {
            count: 0
        };
        return;
    }

    increment () {
        // this.setState ({
        //     count: this.state.count + 1
        // });
        this.setState (function (old) {
            return {
                count: old.count + 1
            }
        });
    }

    decrement () {
        this.setState ({
            count: this.state.count - 1
        });
    }

    render () {
        return (
            <Well className="Widget">
                <div className="Widget-Count">
                    {this.state.count}
                </div>
                <div className="Widget-Buttons">
                    <Button onClick={() => this.decrement ()}>
                        -
                    </Button>
                    <Button onClick={() => this.increment ()}>
                        +
                    </Button>
                </div>
            </Well>
        );
    }
}

export default Widget1;

// EOF
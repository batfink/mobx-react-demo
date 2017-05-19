import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Well, Button } from 'react-bootstrap';

class Widget3 extends Component {
    render() {
        const { store } = this.props;

        return (
            <Well className="Widget">
                <div className="Widget-Count">
                    {store.getState ()}
                </div>
                <div className="Widget-Buttons">
                    <Button onClick={() => store.dispatch ({ type: 'INCREMENT' })}>
                        -
                    </Button>
                    <Button onClick={() => store.dispatch ({ type: 'DECREMENT' })}>
                        +
                    </Button>
                </div>
            </Well>
        );
    }
}

export default Widget3;

// EOF
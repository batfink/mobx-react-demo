import React, { Component } from 'react';
import '../Widget.css';
import { Well, Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react';

@inject("counter")
@observer
class Widget5 extends Component {
    render () {
        const { counter } = this.props;

        return (
            <Well className="Widget">
                <div className="Widget-Count">
                    {counter.getCount ()}
                </div>
                <div className="Widget-Buttons">
                    <Button onClick={() => counter.decrement ()}>
                        -
                    </Button>
                    <Button onClick={() => counter.increment ()}>
                        +
                    </Button>
                </div>
            </Well>
        );
    }
}

export default Widget5;

// EOF
import React, { Component } from 'react';
import { Well, Button } from 'react-bootstrap';

class Widget2 extends Component {
    render () {
        const { controller } = this.props;

        return (
            <Well className="Widget">
                <div className="Widget-Count">
                    {controller.getCount ()}
                </div>
                <div className="Widget-Buttons">
                    <Button onClick={() => controller.decrement ()}>
                        -
                    </Button>
                    <Button onClick={() => controller.increment ()}>
                        +
                    </Button>
                </div>
            </Well>
        );
    }
}

export default Widget2;

// EOF
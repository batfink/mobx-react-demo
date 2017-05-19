import React, { Component } from 'react';
import '../Widget.css';
import { Well, Button } from 'react-bootstrap'
import { observer } from 'mobx-react';

@observer
class Widget4 extends Component {
    render () {
        const { state } = this.props;

        return (
            <Well className="Widget">
                <div className="Widget-Count">
                    {state.count}
                </div>
                <div className="Widget-Buttons">
                    <Button onClick={() => state.count --}>
                        -
                    </Button>
                    <Button onClick={() => state.count ++}>
                        +
                    </Button>
                </div>
            </Well>
        );
    }
}

export default Widget4;

// EOF
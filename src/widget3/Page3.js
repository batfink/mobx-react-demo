import React, { Component } from 'react';
import { createStore } from 'redux'
import Widget3 from './Widget3';
import { Provider } from 'react-redux'
import { observer, observable } from 'mobx';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

const store = createStore(counter);

class Page3 extends Component {
    render () {
        return (
            <Provider store={store}>
                <div>
                    <h1>Widget 3 - Redux</h1>

                    <Widget3 store={store} />
                    <Widget3 store={store} />
                    <Widget3 store={store} />
                    <Widget3 store={store} />
                </div>
            </Provider>
        );
    }
}

export default Page3;

// EOF
import { observable } from 'mobx';

class Counter {
    @observable state = {
        count: 0
    };

    getCount () {
        return this.state.count;
    }

    increment () {
        this.state.count ++;
    }

    decrement () {
        this.state.count --;
    }
}

export default new Counter ();

// EOF
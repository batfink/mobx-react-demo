import { observable, action } from 'mobx';

class Counter {
    @observable state = {
        count: 0
    };

    getCount () {
        return this.state.count;
    }

    @action increment () {
        this.state.count ++;
    }

    @action decrement () {
        this.state.count --;
    }
}

export default new Counter ();

// EOF
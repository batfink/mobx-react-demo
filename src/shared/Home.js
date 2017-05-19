import React, { Component } from 'react';
import './List.css';

class List extends Component {
    render () {
        return (
            <div className="List">
                {this.props.entries.map ((e, i) => {
                    return <ListEntry index={i} entry={e} key={i} />;
                })}
            </div>
        );
    }
}

class ListEntry extends Component {
    render () {
        const { entry } = this.props;
        return (
            <div className="ListEntry">
                <div className="ListEntry-Index">
                    {this.props.index + 1}
                </div>
                <div className="ListEntry-Stuff">
                    <span className="ListEntry-Name">
                        {entry.name}
                    </span>
                    <br/>
                    {entry.desc}
                </div>
            </div>
        );
    }
}

class Home extends Component {
    render () {
        const foods = [
            { name: "Pizza", desc: "Donec ut eros velit" },
            { name: "Sausage", desc: "Duis quis lectus non arcu " },
            { name: "Hamburger", desc: "Quisque elit mi" },
            { name: "Chicken", desc: "Pellentesque congue sapien " },
        ];

        const planets = [
            { name: "Earth", desc: "Just right" },
            { name: "Mercury", desc: "Really hot!" },
            { name: "Uranus", desc: "Damn cold" }
        ];

        return (
            <div>
                <h1>Foods</h1>

                <List entries={foods} />

                <h1>Planets</h1>

                <List entries={planets} />
            </div>
        );
    }
}

export default Home;

// EOF
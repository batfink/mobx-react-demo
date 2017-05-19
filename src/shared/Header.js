import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

function LinkButton (props) {
    return (
        <Button onClick={() => document.location = props.href }>
            {props.children}
        </Button>
    )
}

const impls = [
    "Local State",
    "App Shared State",
    "Redux",
    "Mobx Shared State",
    "Injected Mobx"
];

class Header extends Component {

    render () {
        return (
            <div className="Header">
                <b>React Demo</b>
                <ButtonToolbar>
                    <LinkButton href="/">
                        Home
                    </LinkButton>
                    {impls.map (function (e, i) {
                        return (
                            <LinkButton key={e} href={"/widget" + (i + 1)}>
                                {e}
                            </LinkButton>
                        );
                    })}
                </ButtonToolbar>
            </div>
        )
    }
}

export default Header;

// EOF
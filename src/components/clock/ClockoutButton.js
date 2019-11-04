import React from 'react'
import { Button } from 'reactstrap';

function ClockoutButton(props) {
    return (
        <div>
            <Button color = "danger" size = "lg" block onClick={props.onClick}>
             Clock out
            </Button>
        </div>
    );
}

export default ClockoutButton;

import React from 'react'
import { Button } from 'reactstrap';

function ClockinButton(props) {
    return (
    <Button color = "success" size = "lg" block onClick={props.onClick}>
      Clock in
    </Button>
  );
}

export default ClockinButton;

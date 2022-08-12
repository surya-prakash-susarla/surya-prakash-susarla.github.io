import React from "react";
import { Button } from "react-bootstrap";

class MainComponent extends React.Component {

  public render(): JSX.Element {
    return (
      <React.Fragment>
        {this.getMainSection()}
      </React.Fragment>
    );
  }

  public getMainSection = (): JSX.Element => {
    return <Button>sample button</Button> 
  }
}

export default MainComponent;

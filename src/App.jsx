import React from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Button variant="primary">Primary</Button>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}



export default App;

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';

export default class CustomSignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    Auth.signOut();
  }

  render() {
    return (
        <React.Fragment>
           
        <Button light outline sm border="0" onClick={this.signOut}>Sign Out</Button>
        
        </React.Fragment>
    )
  }
}
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from 'aws-amplify-react'
import { SignIn } from "aws-amplify-react";
import { SignUp } from "aws-amplify-react";
import { Greetings } from "aws-amplify-react";
import { CustomSignIn } from "./CustomSignIn";
import Amplify from 'aws-amplify'
import config from './aws-exports'
import CustomSignUp from './CustomSignUp';
import VideoApp from './VideoApp';

Amplify.configure(config)

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Authenticator hide={[SignIn,Greetings]} amplifyConfig={config}>
          <CustomSignIn />
        
          <VideoApp />   
       
        </Authenticator>
      
      </div>
    );
  }
}

export default App;

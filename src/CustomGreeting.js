import React, { Component } from 'react'
import { Greetings } from 'aws-amplify-react'
import { NavBar, Nav, NavRight } from 'aws-amplify-react'
import VideoApp from './VideoApp';

export default class CustomGreetings extends Greetings {
    constructor(props) {
        super(props);
    }
    render() {
        const authState  = this.props.authState || this.state.authState;
        const signedIn = (authState === 'signedIn');

        const theme = this.props.theme;
        const greeting = signedIn? this.userGreetings(theme) : this.noUserGreetings(theme);
        if (!greeting) { return null; }

        return (
            <VideoApp />           
        );
    }
}
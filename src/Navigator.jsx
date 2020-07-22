import React, { Component } from 'react';
import CustomSignOut from './CustomSignOut';

export default class Navigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">
                            <img src="logo.png" height="30" />
                            </a>
                        </div>
                            <ul class="nav navbar-nav navbar-right">
                                <CustomSignOut />
                            </ul>
                      
                    </div>
                </nav>

            </React.Fragment>

        )
    }
}
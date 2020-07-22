import React from "react";
import { SignIn } from "aws-amplify-react";

export class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent(theme) {
    return (
        <div class="container">
        <div class="d-flex justify-content-center h-100">
      
        {this._validAuthStates.includes(this.props.authState) && (
              <div class="card">
              <div class="card-header">
                  <h3>Sign In</h3>
                  <div class="d-flex justify-content-end social_icon">
                      <span><i class="fab fa-facebook-square"></i></span>
                      <span><i class="fab fa-google-plus-square"></i></span>
                      <span><i class="fab fa-twitter-square"></i></span>
                  </div>
              </div>
              <div class="card-body">
                  <form>
                      <div class="input-group form-group">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="fas fa-user"></i></span>
                          </div>
                          <input
            className="form-control"
            id="username"
            key="username"
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />                           
                      </div>
                      <div class="input-group form-group">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="fas fa-key"></i></span>
                          </div>
                          <input
            className="form-control"
            id="password"
            key="password"
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="******************"
          />
                      </div>
                      <div class="row align-items-center remember">
                          <input type="checkbox" />Remember Me
                      </div>
                      <div class="form-group">
                      <button
            className="form-control login-btn"
            type="button"
            onClick={() => super.signIn()}
          >
            Login
          </button>
                      </div>
                  </form>
              </div>
              <div class="card-footer">
                
                  <div class="row align-items-center remember justify-content-center">
                      Don't have an account?
            <a href="#" onClick={() => super.changeState("signUp")}>
              Create account
            </a>
          
                  </div>
                  <div class="row align-items-center remember justify-content-center">
                 
         
            <a href="#" onClick={() => super.changeState("forgotPassword")}>
            Forgot your password?
            </a>
            
            </div>
              </div>
          </div>
          )}
          
        </div>
    </div>
    );
  }
}
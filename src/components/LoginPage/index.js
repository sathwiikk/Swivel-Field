import { Component } from "react";
import "./index.css";

class LoginPage extends Component {
  state = { emailAddress: "", password: "" };

  changeUsername = (event) => {
    this.setState({ emailAddress: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitDetails = async (event) => {
    event.preventDefault();
    const { emailAddress, password } = this.state;
    const details = { emailAddress, password };
    const url = "https://660992b50f324a9a288376f5.mockapi.io/login";
    const options = {
      method: "GET",
      headers: { "content-type": "application/json" },
    };
    const response_data = await fetch(url, options);
    if (response_data.ok === true) {
      const data = await response_data.json();
      console.log(data);
    }
  };

  render() {
    const { emailAddress, password } = this.state;
    return (
      <div className="loginPageContainer">
        <div className="boardContainer">
          <h1 className="boardHeading">Board.</h1>
        </div>
        <div className="signInDetailsContainer">
          <div className="alignmentContainer">
            <h1 className="signInHeading">Sign In</h1>
            <p className="accountSignInPara">Sign in to your account</p>
            <div className="signInOptionsContainer">
              <div className="optionContainer">
                <img
                  src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711867849/google-icon_1_xus49d.png"
                  alt="googleImage"
                  className="google"
                />
                <p className="signInGooglePara">Sign in with Google</p>
              </div>
              <div className="optionContainerForApple">
                <img
                  src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711874162/apple_1_bjex5c.png"
                  alt="appleImage"
                  className="google"
                />
                <p className="signInGooglePara">Sign in with Google</p>
              </div>
            </div>
            <form className="formContainer" onSubmit={this.onSubmitDetails}>
              <p className="emailHeading">Email address</p>
              <input
                type="text"
                className="emailInput"
                onChange={this.changeUsername}
                value={emailAddress}
              />
              <p className="emailHeading">Password</p>
              <input
                type="password"
                className="emailInput"
                onChange={this.changePassword}
                value={password}
              />
              <p className="forgotPasswordPara">Forgot password?</p>
              <button className="signInButton" type="submit">
                Sign In
              </button>
            </form>
            <p className="noAccountPara">
              Don't have an account?{" "}
              <span className="registerHere">Register here</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

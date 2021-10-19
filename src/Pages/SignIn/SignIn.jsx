//import { Nav } from "Pages/Home/Nav";
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./style2-signin.css";

export class SignIn extends React.Component {
  state = { action: this.props.action };

  render() {
    return (
      <>
        {/*   <Nav /> */}
        <div
          className={`container ${
            this.state.action === "signUp" ? "sign-up-mode" : ""
          }`}
        >
          <div className="container__forms">
            <div className="form">
              <form action="" className="form__sign-in">
                <h2 className="form__title">Sign In</h2>
                <div className="form__input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="form__input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" required />
                </div>
                <Link to="/user">
                  <input className="form__submit" type="submit" value="Login" />
                </Link>
              </form>

              <form action="" className="form__sign-up">
                <h2 className="form__title">Sign Up</h2>
                <div className="form__input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="form__input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Email" required />
                </div>
                <div className="form__input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="form__input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <Link to="/user">
                  <input
                    className="form__submit"
                    type="submit"
                    value="Sign Up"
                  />
                </Link>
              </form>
            </div>
          </div>
          <div className="container__panels">
            <div className="panel panel__left">
              <div className="panel__content">
                <h3 className="panel__title">New here ?</h3>
                <p className="panel__paragraph">
                  We are very excited to have you on board. Create an account
                  now and start your journey with us.
                </p>
                <button
                  className="signIn-btn btn-transparent"
                  id="sign-up-btn"
                  onClick={() => this.setState({ action: "signUp" })}
                >
                  Sign Up
                </button>
              </div>
              <img
                className="panel__image"
                src="https://stories.freepiklabs.com/storage/11588/market-launch-amico-2628.png"
                alt=""
              />
            </div>
            <div className="panel panel__right">
              <div className="panel__content">
                <h3 className="panel__title">One of us ?</h3>
                <p className="panel__paragraph">
                  We are glad to see you back. Hope you are having an amazing
                  experience.
                </p>
                <button
                  className="signIn-btn btn-transparent"
                  id="sign-in-btn"
                  onClick={() => this.setState({ action: "signIn" })}
                >
                  Sign In
                </button>
              </div>
              <img
                className="panel__image"
                src="https://www.pngkey.com/png/full/444-4444270_ia-press-play-website.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

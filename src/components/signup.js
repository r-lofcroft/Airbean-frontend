import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div>
                    <label>First name</label>
                    <input type="text" placeholder="First name" />
                </div>

                <div>
                    <label>Last name</label>
                    <input type="text" placeholder="Last name" />
                </div>

                <div>
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />
                </div>

                <button type="submit" >Sign Up</button>
                <p>
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
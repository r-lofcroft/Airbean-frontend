import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div>
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />
                </div>

                <div>
                    <div >
                        <input type="checkbox"  id="customCheck1" />
                        <label  htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" >Submit</button>
                <p >
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
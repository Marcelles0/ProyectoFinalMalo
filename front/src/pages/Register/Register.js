import React from "react";
import { Link } from "react-router-dom";
import styleRegister from "./Register.module.css";


export default function Register (){
    return (
        <div className={styleRegister.section}>
            <section>
                <h1>Register</h1>
            </section>
            <section className={styleRegister.noColor}>
                <div className={styleRegister.container}>
                    <div>
                        <div>
                            <div>
                                <div>Name</div>
                                <input id="Name" type="text" placeholder="Name"></input>
                            </div>
                            <div>
                                <div>Email</div>
                                <input id="Email" type="text" placeholder="Email"></input>
                            </div>
                            <div>
                                <div>Password</div>
                                <input id="Password" type="password" placeholder="Password"></input>
                            </div>
                            <div>
                                <div>Confirm Password</div>
                                <input id="Password2" type="password" placeholder="Confirm Password"></input>
                            </div>
                        </div>
                        <div className={styleRegister.blueLink}>
                            <input className={styleRegister.checkbox} id="rememberCheck" type="checkbox"></input>
                            <label>By signing up for Databox, you agree to our <Link to={`/register`}>Terms of Service</Link> and <Link to={`/register`}>Privacy Policy.</Link></label>
                            <button id="submit" className={styleRegister.buttonRegister}>Register</button>
                            <div>You Have Account? <Link to={`/login`}>Log In</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
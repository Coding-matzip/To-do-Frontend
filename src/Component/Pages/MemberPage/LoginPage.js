import React, { useEffect } from 'react';
import { siteTitle } from '../../Config';
import './MemberPage.css';

function LoginPage() {
    useEffect(() => {
        document.title = `로그인 - ${siteTitle}`;
    }, [])

    return (
        <div>
            <section>
                <div id="main-content">
                    <div id="content-name">Login</div>
                    <form method="post">
                        <div className="input-area">
                            <div className="element label"><label for="email_field">Email</label></div>
                            <div className="element"><input type="email" name="email" id="email_field" required></input></div>
                        </div>
                        <div className="input-area">
                            <div className="element label"><label for="email_field">Password</label></div>
                            <div className="element"><input type="password" name="password" id="password_field" required></input></div>
                        </div>
                        <div id="button-area">
                            <span><button className="login" type="submit">Sign Up</button></span>
                            <span><button className="login" type="submit">Log In</button></span>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default LoginPage

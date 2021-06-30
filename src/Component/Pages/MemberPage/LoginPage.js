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
                        <table>
                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td><input type="email" name="email" required /></td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td><input type="password" name="password" required /></td>
                                </tr>
                            </tbody>
                        </table>
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

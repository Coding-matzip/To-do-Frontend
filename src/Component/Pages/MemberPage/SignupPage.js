import React, { useEffect } from 'react';
import { siteTitle } from '../../Config';

function SignupPage() {
    useEffect(() => {
        document.title = `회원가입 - ${siteTitle}`;
    }, [])

    return (
        <div>
            <section>
                <div id="main-content">
                    <div id="content-name">Sign Up</div>
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
                                <tr>
                                    <td>Confirm Password</td>
                                    <td><input type="password" name="password" required /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div id="button-area">
                            <span><button className="signup" type="submit">Register</button></span>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default SignupPage

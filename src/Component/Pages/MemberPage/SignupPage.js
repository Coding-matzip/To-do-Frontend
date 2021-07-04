import React, { useEffect } from 'react';
import { siteTitle } from '../../Config';
import './MemberPage.css';
import kakaoLoginButton from '../../../image/kakao_login_medium_narrow.png';

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
                        <div className="input-area">
                            <div className="element label"><label for="email_field">Email</label></div>
                            <div className="element"><input type="email" name="email" id="email_field" required></input></div>
                        </div>
                        <div className="input-area">
                            <div className="element label"><label for="password_field">Password</label></div>
                            <div className="element"><input type="password" name="password" id="password_field" required></input></div>
                        </div>
                        <div className="input-area">
                            <div className="element label"><label for="confirm_password_field">Confirm Password</label></div>
                            <div className="element"><input type="password" name="confirmPassword" id="confirm_password_field" required></input></div>
                        </div>
                        <div id="button-area">
                            <span><button className="signup" type="submit">Register</button></span>
                        </div>
                    </form>
                    <hr></hr>
                    <div id="social-login-name">Social Login</div>
                    <button type="button" id="kakao-login-btn"><img src={kakaoLoginButton} alt="Kakao Social Login Button"></img></button>
                </div>
            </section>
        </div>
    )
}

export default SignupPage

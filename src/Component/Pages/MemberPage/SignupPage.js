import React, { useEffect } from 'react';
import { siteTitle } from '../../Config';

function SignupPage() {
    useEffect(() => {
        document.title = `회원가입 - ${siteTitle}`;
    }, [])

    return (
        <div>
            <section>
                SignupPage
            </section>
        </div>
    )
}

export default SignupPage

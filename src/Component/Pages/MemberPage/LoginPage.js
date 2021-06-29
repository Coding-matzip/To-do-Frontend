import React, { useEffect } from 'react';
import { siteTitle } from '../../Config';

function LoginPage() {
    useEffect(() => {
        document.title = `로그인 - ${siteTitle}`;
    }, [])

    return (
        <div>
            <section>
                LoginPage
            </section>
        </div>
    )
}

export default LoginPage

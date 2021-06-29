import React, { useEffect } from 'react';
import { siteTitle } from '../../Config';

function LandingPage() {
    useEffect(() => {
        document.title = siteTitle;  //Title 변경.
    })

    return (
        <div>
            <section>
                LandingPage
            </section>
        </div>
    )
}

export default LandingPage;

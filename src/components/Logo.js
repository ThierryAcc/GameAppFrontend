import React from 'react'
import './Logo.css';

class Logo extends React.Component {

    render() {
        

        return (
            <>
                <span><img className="logo" src="logo.png" alt="" /></span>
                <span className="logo-text">furious gamerz</span>
            </>
        );
    }

}

export default Logo;
import React from 'react';
import logo from '../../assets/images/logo.png';
import ConnectingButtons from '../../components/ConnectingButtons/connectingbuttons.component';
import './homepage.styles.css';

const HomePage = () => {
    return (
        <div className='homepage_container'>
            <div className='homepage_panel'>
                <img src={logo} className='homepage_image' alt="logo"></img>
                <ConnectingButtons />
            </div>
        </div>
    );
};

export default HomePage;
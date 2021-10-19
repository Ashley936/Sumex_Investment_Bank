import { useState } from 'react';
import avatar from '../../assets/avatar.jpg';
import './Headerdrop.css';

export const Header = () => {

    const [header, setheader] = useState(false);
    const headerdrop = () => {
        if (!header) {
            setheader(true);
        } else {
            setheader(false);
        }
    }

    return (
        <>
            <div className="user-header">
                <h2>
                    <label htmlFor="nav-toggle">
                        <span className="las la-bars"></span>
                    </label>
                    Dashboard
                </h2>
                <div className="user-wrapper" onClick={headerdrop}>
                    <img src={avatar} alt="user" width="40px" height="40px" />
                </div>
            </div>
            <div className={`${header === false ? "headerdrop" : "showheader"}`}>
                <h3>Vivek</h3>
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/security">Change Password</a></li>
                    <li><a href="/">Log Out</a></li>
                </ul>
            </div>
        </>
    )
}

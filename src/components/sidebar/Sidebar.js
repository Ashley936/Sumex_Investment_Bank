// import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
    let location = useLocation().pathname;

    // useEffect(() => {
    //     let sidebar = document.querySelector(".sidebar");
    // })

    return (
        <>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h1><span className="lab la-accusoft"></span> <span>Sumex</span></h1>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li><Link to="/user" className={location === "/" ? "active" : ""}>
                            <span className="las la-home"></span><span>Dashboard</span>
                        </Link></li>

                        <li><Link to="/transfer" className={location === "/transfer" ? "active" : ""}>
                            <span className="las la-exchange-alt"></span><span>Transfer</span>
                        </Link></li>

                        <li><Link to="/history" className={location === "/history" ? "active" : ""}>
                            <span className="lar la-file-excel"></span><span>History</span>
                        </Link></li>

                        <li><Link to="/profile" className={location === "/profile" ? "active" : ""}>
                            <span className="lar la-user-circle"></span><span>Profile</span>
                        </Link></li>

                        <li><Link to="/card" className={location === "/card" ? "active" : ""}>
                            <span className="lar la-credit-card"></span><span>Card</span>
                        </Link></li>

                        <li><Link to="/loan" className={location === "/loan" ? "active" : ""}>
                            <span className="las la-clipboard-list"></span><span>Loan</span>
                        </Link></li>

                        <li><Link to="/kyc" className={location === "/kyc" ? "active" : ""}>
                            <span className="las la-shield-alt"></span><span>KYC</span>
                        </Link></li>

                        <li><Link to="/security" className={location === "/security" ? "active" : ""}>
                            <span className="las la-bolt"></span><span>Security</span>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

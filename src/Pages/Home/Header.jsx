import React from "react";

export const HomeHeader = () => {
    return (
        <header>
        <div className="header">
            <div className="main__heading">Sumex Investment Bank</div>
            <div className="sub__heading color__wheat">Experience the future of banking</div>
            <div className="btn">
                <a href="signIn.html"> <button className="login-button"><span>Sign up</span></button></a>
                <a href="signIn.html"> <button className="join-button"><span>Sign In</span></button></a>
            </div>
        </div>
        <div className="liq"></div>
        </header>
    )
}
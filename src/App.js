import { Home } from "Pages/Home/Home";
import { SignIn } from "Pages/SignIn/SignIn";
import UserHomePage from "Pages/User-main/UserHomePage";
import React from "react";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup">
                <SignIn action="signUp" />
            </Route>
            <Route exact path="/signin">
                <SignIn action="signIn" />
            </Route>
            <Route exact path="/user" component={UserHomePage} />
            <Route path="/*" component={UserHomePage} />{/* Replace this with error page later */}
        </Switch>
    )
}
export default App;
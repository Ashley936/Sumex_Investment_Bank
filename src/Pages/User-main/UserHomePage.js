import { Sidebar } from "components/sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "Pages/User-main/Main";
import './style-user.css';
function UserHomePage() {
  return (
    <div id="user-home-page-wrapper">
      <Router>
        <Sidebar />
        <Main />
      </Router>
    </div>
  );
}

export default UserHomePage;

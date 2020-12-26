import './App.css';
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Principal from "./screens/principal/principal";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/principal"/>
                </Route>
                <Route path="/principal">
                    <Principal/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;

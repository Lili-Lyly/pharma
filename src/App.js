import './App.css';
import Register from "./screens/register/Register";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Principal from "./screens/principal/principal";
import NotFound from "./screens/error/error";
import AddItem from "./screens/add-item/add-item";
import NewLogin from "./screens/new-login/new-login";

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
                    <NewLogin/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/add-item">
                    <AddItem></AddItem>
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </Router>

    );
}

export default App;

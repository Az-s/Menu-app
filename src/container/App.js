import { Route, Switch } from "react-router-dom";
import DishMenu from "./DishMenu/DishMenu";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={DishMenu} />
      </Switch>
    </div >
  );
}

export default App;

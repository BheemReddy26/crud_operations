import { Route, Switch } from "react-router-dom";
import GetAll from "./components/getIndex";

import {
  GetOne,
  PostStudent,
  //UpdateStudent,
  DeleteStudent,
} from "./components/operationIndex";

import Home from "./components/homeIndex";
import Header from "./components/headerIndex";
const App = () => {
  return (
    <> 
    <Header />
     
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path="/allStudents" component={GetAll} />
        <Route exact path="/getStudent/:id" component={GetOne} />
        <Route exact path="/postStudent/:id" component={PostStudent} />
        <Route exact path="/deleteStudent/:id" component={DeleteStudent} />
      </Switch>
    </>
  );
};
export default App;

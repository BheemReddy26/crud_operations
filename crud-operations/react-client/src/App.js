import { Route, Switch , Redirect} from "react-router-dom";
import GetAll from "./components/Students/GetAll";
import LoginForm from "./components/Students/LoginForm";
import ProtectedRoute from "./components/Helpers/ProtectedRouter";
import NotFound from "./components/UI/NotFound";


import {
  GetOne,
  PostStudent,
  //UpdateStudent,
  DeleteStudent,
} from "./components/Students/Operations";

import Home from "./components/Students/Home";

const App = () => {
  return (
    <> 

     
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path = "/" component = {Home} />
        <ProtectedRoute exact path="/allStudents" component={GetAll} />
        <ProtectedRoute exact path="/getStudent/:id" component={GetOne} />
        <ProtectedRoute exact path="/postStudent/:id" component={PostStudent} />
        <ProtectedRoute exact path="/deleteStudent/:id" component={DeleteStudent} />
        <Route path='/not-found' component={NotFound} />
        <Redirect to ="not-found" />

      </Switch>
    </>
  );
};
export default App;

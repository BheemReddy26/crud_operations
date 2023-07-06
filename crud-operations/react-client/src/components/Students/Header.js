import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "../../App.css";

const Header = (props) => {
  const { history } = props;
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light App-header">
      <ul className="d-flex flex-direction-row list-unstyled">
        <li>
          <Link to="/">
            <button className="btn ">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/allStudents">
            <button className="btn ">All Students</button>
          </Link>
        </li>
        <li>
          <Link to="/getStudent/:id">
            <button className="btn ">Student Details</button>
          </Link>
        </li>

        <li>
          <Link to="/deleteStudent/:id">
            <button type="button" className="btn ">
              Delete Student
            </button>
          </Link>
        </li>
        <li>
          <button className="btn btn-danger" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Header);

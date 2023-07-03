import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light ">

    <ul className='d-flex flex-direction-row list-unstyled'>
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
          <button  className="btn ">Student Details</button>
        </Link>
      </li>
      
      <li>
        <Link to="/deleteStudent/:id">
          <button  className="btn ">Delete Student</button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;

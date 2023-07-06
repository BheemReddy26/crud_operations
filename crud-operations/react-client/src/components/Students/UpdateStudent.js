import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const UpdateStudent = (props) => {
  const { details } = props;
  console.log(details,1)
  const { student_id, first_name, last_name, standard } = details[0];
  const [student, setStudent] = useState({
    id: student_id,
    firstName: first_name,
    lastName: last_name,
    standard,
  });


  const [edit, setEdit] = useState(false);
  useEffect(() => {
    setStudent((prevState) => ({
      ...prevState,
      id: student_id,
    firstName: first_name,
    lastName: last_name,
    standard,
    }))

  },[student_id,first_name, last_name, standard])
 
  const editHandler = () => {
    setEdit((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)

    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(student,'stirrir')
  };

  const saveHandler = async () => {
    setEdit((prevState) => !prevState);
    const bodyDetails = {
      student_id,
    first_name:student.firstName,
    last_name:student.lastName,
    standard:student.standard
    } 
    console.log(bodyDetails)
    
    const options = {
      method:"PUT",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(bodyDetails)
    }

    try {
      const response = await fetch(`http://localhost:8081/api/students/updateStudent/${student.id}`, options)
       const data = await response.json();
       console.log(data)
      } 
      catch (error) {
        console.log(error)
      }
    


    
  };

 

  return (
    <div>
    
      <table className="table table-light">
        <thead className="thead-light">
          <tr style={{ border: "solid" }} >
            <th style={{ borderRightWidth: "2px" }}>Student Id</th>
            <th style={{ borderRightWidth: "2px" }}>First Name</th>
            <th style={{ borderRightWidth: "2px" }}>Last Name</th>
            <th style={{ borderRightWidth: "2px" }}>Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: "solid" }}>
            <td style={{ borderRightWidth: "2px" }}>
              <span>{student.id}</span>
            </td>
            <td style={{ borderRightWidth: "2px" }}>
              {edit ? (
                <input
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  value = {student.firstName}
                 
                />
              ) : (
                <span>{student.firstName}</span>
              )}
            </td>
            <td style={{ borderRightWidth: "2px" }}>
              {edit ? (
                <input
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                  value = {student.lastName}
                />
              ) : (
                <span>{student.lastName}</span>
              )}
            </td>
            <td>
              {edit ? (
                <input
                  type="number"
                  name="standard"
                  onChange={handleInputChange}
                  value={student.standard}
                />
              ) : (
                <span>{student.standard}</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      {!edit && (
        <button onClick={editHandler} className="btn btn-primary">
          Edit
        </button>
      )}
      {edit && (
        <Link to="/allStudents"><button onClick={saveHandler} className="btn btn-success">
          Save
        </button>
        </Link>
      )}
    </div>
  );
};
export default UpdateStudent;

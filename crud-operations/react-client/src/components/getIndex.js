import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const GetAll = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/students/allStudents"
        );
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //console.log(data);

  

  const renderTable = () => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
      const { student_id, first_name, last_name, standard } = data[i];
      rows.push(
        <tr key={student_id}>
          <td>{student_id}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{standard}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div>
      <table className="table table-light">
        <thead className="thead-light">
          <tr>
            <th scope="col">Student Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>

     <Link to="/postStudent/:id"> <button className="btn btn-primary">Add</button></Link> 
    </div>
  );
};

export default GetAll;

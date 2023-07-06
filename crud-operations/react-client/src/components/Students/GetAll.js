import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

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
        <tr key={student_id} >
          <td style={{ borderRightWidth: "2px" }}>{student_id}</td>
          <td style={{ borderRightWidth: "2px" }}>{first_name}</td>
          <td style={{ borderRightWidth: "2px" }}>{last_name}</td>
          <td style={{ borderRightWidth: "2px" }}>{standard}</td>
           <button >Edit</button>
           <button>Delete</button>
       
        </tr>
           
      );
    }
    return rows;
  };

  return (
    <>
      <Header />
      {data.length >= 1 && (
        <div className="d-flex p-2">
          <table className="table table-light" style={{ }}>
            <thead className="thead-light">
              <tr style={{}}>
                <th style={{ borderRightWidth: "2px" }} scope="col">Student Id</th>
                <th style={{ borderRightWidth: "2px" }}>First Name</th>
                <th style={{ borderRightWidth: "2px" }}>Last Name</th>
                <th style={{ borderRightWidth: "2px" }}>Standard</th>
             
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      )}
      <div style={{textAlign:"right"}}> <Link to="/postStudent/:id" >
     
     <button className="btn btn-primary"  style={{ width:"250px"}} >Add</button>
   </Link></div>
     
    </>
  );
};

export default GetAll;

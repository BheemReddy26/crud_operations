import { useEffect, useState } from "react";
import UpdateStudent from "./updateStudentIndex";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function GetOne() {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const [totalStudents, setTotalStudents] = useState(0);

  const fetchData = async () => {
    try {
      if (id > 0) {
        const response = await fetch(
          `http://localhost:8081/api/students/allStudents/${id}`
        );
        const data = [await response.json()];

        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (id > 0 && id <= totalStudents) {
      setError(false);
      fetchData();
    } else {
      setError(true);
      setErrorValue("The Id is not in the Student List ");
    }

    setId("");
  };

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/students/allStudents"
        );
        const data = await response.json();
        setTotalStudents(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData1();
    fetchData();
  }, []);
  const inputHandler = (e) => {
    setId(e.target.value);
  };

  //console.log(data)
  //console.log(data.length);

  return (
    <div className="d-flex bg-light flex-column">
      <form className="d-flex flex-column" onSubmit={submitHandler}>
        <label htmlFor="getStudent">Studnet Id</label>
        <input
          placeholder="Place Student Id"
          id="getStudent"
          name="getStudent"
          type="number"
          style={{ width: "130px" }}
          onChange={inputHandler}
          value={id}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100px", fontSize: "12px" }}
        >
          Get Details
        </button>
      </form>

      {data.length === 1 && !error && <UpdateStudent details={data} />}
      {error && <p>{errorValue}</p>}
    </div>
  );
}

export function PostStudent() {
  const [totalStudents, setTotalStudents] = useState(0);
  const [result, setResult] = useState();
  const [student, setStudent] = useState({
    student_id: totalStudents,
    first_name: "",
    last_name: "",
    standard: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/students/allStudents"
        );
        const data = await response.json();
        setTotalStudents(data.length + 1);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //console.log(totalStudents)
  const saveHandler = async () => {
    const bodyDetails = {
      student_id: totalStudents,
      first_name: student.first_name,
      last_name: student.last_name,
      standard: student.standard,
    };
    console.log(bodyDetails);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyDetails),
    };

    try {
      const response = await fetch(
        `http://localhost:8081/api/students/addStudent`,
        options
      );
      const data = await response.json;
      console.log(data);
      setResult("New Student added to database");
    } catch (error) {
      console.log(error);
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="d-flex flex-column" onSubmit={saveHandler}>
        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          className="w-25"
          name="first_name"
          onChange={inputHandler}
          value={student.first_name}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="lastName"
          className="w-25"
          value={student.last_name}
          onChange={inputHandler}
        />
        <label htmlFor="number">Standard</label>
        <input
          type="number"
          name="standard"
          id="number"
          className="w-25"
          value={student.standard}
          onChange={inputHandler}
        />
     
          <button
            type="submit"
            className="w-25 btn btn-success
         mt-2"
          >
            Add
          </button>

      </form>
      {result && <p>{result}</p>}
    </>
  );
}

export function DeleteStudent() {
  const [totalStudents, setTotalStudents] = useState(0);

  const [id, setId] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/students/allStudents"
        );
        const data = await response.json();
        setTotalStudents(data.length + 1);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (id > 0) {
        const response = await fetch(
          `http://localhost:8081/api/students/deleteStudent/${id}`,
          { method: "DELETE" }
        );
        const data = await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (id > 0 && id < totalStudents) {
      setResult("The details of the student are deleted from the database");
      fetchData();
    } else {
      setResult("Something went Wrong");
    }

    setId("");
  };

  useEffect(() => {
    fetchData();
  }, []);
  const inputHandler = (e) => {
    setId(e.target.value);
  };

  //console.log(data)
  //console.log(data.length);

  return (
    <div className="d-flex bg-light flex-column">
      <form className="d-flex flex-column" onSubmit={submitHandler}>
        <label htmlFor="getStudent">Studnet Id</label>
        <input
          placeholder="Place Student Id"
          id="getStudent"
          name="getStudent"
          type="number"
          style={{ width: "130px" }}
          onChange={inputHandler}
          value={id}
        />
        <button
          type="submit"
          className="btn btn-danger"
          style={{ width: "100px", fontSize: "12px" }}
        >
          Delete
        </button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

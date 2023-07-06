import { useEffect, useState } from "react";
import UpdateStudent from "./UpdateStudent";
import Header from "./Header";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {LoginLabelField, LoginInputField,LoginFormStyle, DeleteFormContainer, DeleteContainer,ErrorMessageP, AddInputField,LoginButton} from './StyledComponent'

export function GetOne() {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalData, setTotalData] = useState([])


  const allIds = totalData.map(eachItem=> {
    return eachItem.student_id
  })
 // console.log(allIds)
  const check = allIds.filter(eachItem => eachItem===parseInt(id))
  console.log(check);

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
        setTotalData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData1();
    fetchData();
  });
  const inputHandler = (e) => {
    setId(e.target.value);
  };

  //console.log(data)
  //console.log(data.length);

  return (
    <div className="d-flex bg-light flex-column">
      <Header />
      <LoginFormStyle className="d-flex flex-column" onSubmit={submitHandler}>
        <div className="d-flex flex-column" style={{width:'400px'}}>
        <LoginLabelField htmlFor="getStudent">Studnet Id</LoginLabelField>
        <LoginInputField
          placeholder="Place Student Id"
          id="getStudent"
          name="getStudent"
          type="number"
    
          onChange={inputHandler}
          value={id}
        />
        <LoginButton
          type="submit"
          className="w-50"
        >
          Get Details
        </LoginButton>
        {error && <ErrorMessageP >{errorValue}</ErrorMessageP>}

        </div>
      </LoginFormStyle>

      {data.length === 1 && !error && <UpdateStudent details={data} />}
     
    </div>
  );
}

export function PostStudent(props ) {
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
      headers: { 'x-auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlhdCI6MTY4ODU0MTM2M30.9Zd74i4ULkQB25iuGzZUMc2SZ2EOdq4pzL0LSXkcycc",
        "Content-Type": "application/json" },
      body: JSON.stringify(bodyDetails),
    };

    try {
      const response = await fetch(
        `http://localhost:8081/api/students/addStudent`,
        options
      );

     
        const data = await response.json();
        console.log(data);
        setResult("New Student added to database");
        //history.replace("/allStudents")

      
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key==="Enter") {
      event.preventDefault()
    }
  }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
    <Header />
      <LoginFormStyle  onSubmit={saveHandler}>
        <LoginLabelField htmlFor="first_name">First Name</LoginLabelField>
        <AddInputField 
          id="first_name"
          onKeyDown={handleKeyPress} 
          name="first_name"
          onChange={inputHandler}
          value={student.first_name}
        />

        <LoginLabelField htmlFor="lastName">Last Name</LoginLabelField>
        <AddInputField
          type="text"
          name="last_name"
          id="lastName"
          onKeyDown={handleKeyPress} 
          value={student.last_name}
          onChange={inputHandler}
        />
        <LoginLabelField htmlFor="number">Standard</LoginLabelField>
        <AddInputField
          type="number"
          name="standard"
          id="number"
          onKeyDown={handleKeyPress} 
          value={student.standard}
          onChange={inputHandler}
        />
      <Link to="/allStudents"><button onClick={saveHandler} className="btn btn-success">
         Save
        </button>
        </Link>

      </LoginFormStyle>
      {result && <p>{result}</p>}
    </>
  );
}

export function DeleteStudent() {

  const [totalData, setTotalData] = useState([])

  const [id, setId] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/students/allStudents"
        );
        const data = await response.json();
    
        setTotalData(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const allIds = totalData.map(eachItem=> {
    return eachItem.student_id
  })
 // console.log(allIds)
  const check = allIds.filter(eachItem => eachItem===parseInt(id))
  console.log(check);

  const fetchData = async () => {
    try {
     
      if (check.length>=1) {
        const response = await fetch(
          `http://localhost:8081/api/students/deleteStudent/${id}`,
          { method: "DELETE" }
        );
        const data = await response.json(); 
        console.log(data)
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (check.length>=1) {
      setResult("The details of the student are deleted from the database");
      fetchData();
    } else {
      setResult("The given Id didn't match any Student");
    }

    setId("");
  };

  useEffect(() => {
    fetchData();
  });
  const inputHandler = (e) => {
    setId(e.target.value);
  };

  //console.log(data)
  //console.log(data.length);

  return (
    <DeleteContainer >
      <Header />
      <DeleteFormContainer onSubmit={submitHandler}>
        <div className="d-flex flex-column" style={{width:"350px"}}>
        <LoginLabelField htmlFor="getStudent">Studnet Id</LoginLabelField>
        <LoginInputField
          placeholder="Place Student Id"
          id="getStudent"
          name="getStudent"
          type="number"
   
          onChange={inputHandler}
          value={id}
        />
        <button
          type="submit"
          className="btn btn-danger"
          style={{ width: "100px", fontSize: "12px", marginTop:"20px" }}
        >
          Delete
        </button>
        </div>
      </DeleteFormContainer>
      {result && <ErrorMessageP>{result}</ErrorMessageP>}
 
    </DeleteContainer>
  );
}

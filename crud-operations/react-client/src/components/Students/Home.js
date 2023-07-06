import {Heading, MainDiv} from './StyledComponent';
import Header from './Header';
const Home = () => {
  return (
    <MainDiv className=''>
      <Header></Header>
      <Heading>This is a sample web application which displays details of Students</Heading>
      <p>
        {" "}
        To get the Details of all Students press the "All Students" button in
        the Navbar at the top.
      </p>
      <p>
        {" "}
        To know the information of specific student click on the "Student
        Details" Button.
      </p>
      <p>
        {" "}
        To Delete the information of specific student click on the "Delete
        Student" Button.
      </p>
    </MainDiv>
  );
};

export default Home;

import {createContext, useContext} from 'react';
import { use } from '../../../node-express-server/studentInfo/studentsRouter';



const studentContext = createContext();


const useStudentContex = () => useContext(studentContext);


const StudentProvider = ({children}) => {
   // const 
}
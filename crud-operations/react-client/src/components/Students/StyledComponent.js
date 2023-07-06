import styled from "styled-components";

export const Heading = styled.h1`
  color: black;
  font-family: "Roboto";
`;

export const MainDiv = styled.div`
  display: felx;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  min-height: 100vh;
  background-color: #a5dcfc;
`;

export const LoginDiv = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: left;
  min-height:100vh ;
  background-color:#418bc6 ;
`;

export const LoginInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
`;

export const LoginLabelField = styled.label`
  margin-bottom: 0px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 22px;
  line-height: 16px;
  color: black;
  text-align:left;
  margin-top: 5px;
margin-bottom: 5px;
`;

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;
export const LoginFormStyle1 = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-top:100px;
  margin-bottom:100px;
  padding: 20px;
  border-radius: 8px;
  width:100%;
  background-color:#c9d4eb;
  max-width:350px;
`;


export const LoginFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-top:100px;
  margin-bottom:100px;
  padding: 20px;
  border-radius: 8px;
  background-color:#c9d4eb;
  
`;


export const LoginButton = styled.button`
font-family: 'Roboto';
font-weight: bold;
font-size: 14px;
color: #ffffff;
height: 40px;
width: 100%;
margin-top: 20px;
margin-bottom: 2px;
background-color: #0b69ff;
border-radius: 8px;
border: none;
`

export const DeleteContainer = styled.div`
display:felx;
felx-direction:column;
font-size:22px;

background-color:lightblue;
height:100vh
`

export const DeleteFormContainer = styled.form` display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding: 20px;
border-radius: 8px;
width: 100%;

background-color:#c9d4eb;
`

export const ErrorMessageP = styled.p`
align-self: start;
justify-content:;
font-size: 12px;
margin-top: 10px;
margin-bottom: 0px;
font-family: 'Roboto';
font-size: 22px;
line-height: 16px;
color: #Black;`

export const AddInputField = styled.input`
font-size: 14px;
height:30px;
width:300px;
border: 1px solid #d7dfe9;
background-color: #e2e8f0;
border-radius: 4px;
margin-top: 5px;
margin-bottom: 10px;
padding: 8px 16px 8px 16px;
`
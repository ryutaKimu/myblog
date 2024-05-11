import axios from "axios";
import styled from "@emotion/styled";
import { Button,TextField, Typography } from "@mui/material";
import React, { FC,useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthUserContextType, useAuthUserContext } from "../../provider/AuthProvider";
import { RoleType, UserType } from "../../types/adminType";

type CustomLocation = {
    state: { from: { pathname:string } }
  };

export const Login: FC = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleUserNameChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    }

    const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.target.value);
    }

    const handleLogin = ()=>{
        axios.post("/admin/login",{
            name: name,
            password: password
        }).then(response =>{
            navigate("/admin/home");
        }).catch(error=>{
            console.error(error.response.data);
        })
    }

    useEffect(()=>{
        const fechCSRFToken= async()=>{
            try{
                await axios.get('/sanctum/csrf-cookie');
            }catch(error){
                console.error('CSRF トークンの取得に失敗しました:', error);
            }
        }
        fechCSRFToken();
    },[]);

    const location:CustomLocation = useLocation() as CustomLocation;
    const fromPathName:string = location.state.from.pathname;
    const authUser:AuthUserContextType = useAuthUserContext();

    const signin= (role:RoleType)=>{
       const user:UserType ={
        name: "no-name",
        role:role
       }
       authUser.signin(user, () => { 
        navigate(fromPathName, { replace: true })
      });
    }


  return (
    <Container>
      <LoginCard>
        <Typography>管理者ログイン</Typography>
      <TextField fullWidth label="管理者名" style={{marginTop:"45px"}} value={name} onChange={handleUserNameChange} />
      <TextField fullWidth label="パスワード"style={{marginTop:"45px"}} value={password} onChange={handlePasswordChange} />
      <Button variant="contained" fullWidth style={{marginTop:"25px"}} onClick={()=>{handleLogin(); signin(RoleType.Admin)}}>ログイン</Button>
      </LoginCard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: #f0f0f0;
`

const LoginCard = styled.div`
  background-color: #fff;
  width: 30%;
  height: 40%;
  padding: 23px;
  border-radius: 10%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

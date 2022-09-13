import axios from "axios";
import * as React from "react";
import { useState } from "react";
import {Form} from 'react-bootstrap';
//import { useNavigate } from "react-router";
//import {Link} from 'react-router-dom';
import backimage from '../../assets/images/doctors.svg'
import User from '../../assets/images/user.png';
import { AuthContext } from "../../context/AuthContext";
import './Login.css';

const Login = () =>{
    const URL='https://10.42.0.1:5002/Auth/UserLogin'

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {user,loading,error,dispatch} = React.useContext(AuthContext)

       //const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const credentials = {username, password}
        //console.log(user)
      // post(URL,user)
      dispatch({type:"LOGIN_START"})

      try{
       // const response = post(URL,credentials)
       const res = await axios.post(URL,credentials)
        dispatch({type:"LOGIN_SUCCESS", payload: res.data})
        console.log(user)
        //Navigation
        //navigate("/")
        
      }
      catch(err){
        dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
        //console.log(error)
      }
      
      
    }

    

    return(
        <div className="container">
             <div className="row m-auto mt-5 p-5">
                <div className="col-lg-4 col-sm-12 text-center" >
                    
             <Form onSubmit={handleSubmit} id='formBody'> 
                 <img src={User} alt="" width={90} className='card-top text-center mb-3'></img>  
                 <Form.Group className="mb-3 " controlId="Username">
                    <Form.Control 
                       type="text" 
                       value={username} 
                       placeholder="Enter username"
                       onChange={(e)=>(setUsername(e.target.value))} />
                 </Form.Group>     

                <Form.Group className="mb-3" controlId="Password">
                    <Form.Control 
                       type="password" 
                       value={password} 
                       placeholder="Password" 
                       onChange={(e)=>(setPassword(e.target.value))}/>
                </Form.Group>

                {error && <h6 className=" mb-2 text-danger">{error.detail}</h6> }

                <button  className='btn btn-primary px-5' type="submit" disabled={loading}>{ loading ?"Signing In ..":"Log In"}</button>
                              
                
                <div className="p-2 mt-2">
                    <p className="text-muted">&copy; 2022 HRMS All rights reserved</p>
                </div>
                </Form>

                 </div>

                 <div className="col-lg-8 mt-5 col-sm-4 text-center p-5">
                    <img src={backimage} alt='' width={580}></img>
                 </div>
             </div>
                
        </div>
    )
}
export default Login;
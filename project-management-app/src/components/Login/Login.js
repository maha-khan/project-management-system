import React, { useState } from "react";
import '../../App.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [uemail,setEmail]= useState('');
    const [upass,setPass]= useState('');
    const LoginUser = (e) =>{
        e.preventDefault();
        const userdata ={
            email: uemail,
            password: upass
        }
        console.log(userdata);
    
    if(uemail != "" && upass !=""){
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/login`, userdata).then(res =>{
                if(res.data.status == '200'){
                    alert("Login Done!");
                    localStorage.setItem('authtoken', uemail);
                    navigate('/dashboard');

                }
                else if(res.data.status == '401'){
                    alert("Invalid Credentials!");
                }
            });
        });
    }else{
        alert("fields can't be empty!");
    }
    }
return(
    <div className="centerp">
        <div className="back">
            <div className="div-center">
                <div className="content">
                <h3 className="text-center">Project Management System</h3>
                    <h3>Login</h3>
                    <hr />
                        <form>
                            <div className="form-group p-2">
                                <label >Email address</label>
                                <input type="email" className="form-control" value={uemail} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                             </div>
                            <div className="form-group p-2">
                                <label>Password</label>
                                <input type="password" className="form-control" value={upass} onChange={e => setPass(e.target.value)} placeholder="Password" />
                            </div>
                             <button type="submit" className="btn btn-primary m-2" onClick={LoginUser}>Login</button>
                             <hr />
                            <Link to={'/register'}><button type="button" className="btn btn-link text-decoration-none fw-bold" >SignUp </button></Link>
                        </form>

                </div>
            </div>
        </div>
    </div>
);
}
export default Login;
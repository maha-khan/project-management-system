import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [uname,setName]= useState('');
    const [uemail,setEmail]= useState('');
    const [upass,setPass]= useState('');

    const Register = (e) =>{
        e.preventDefault();
        const userdata ={
            name: uname,
            email: uemail,
            password: upass
        }
        console.log(userdata);
    
    if(uname != "" && uemail != "" && upass !=""){
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, userdata).then(res =>{
                if(res.data.status == '200'){
                    alert("Registration Done!");
                    navigate('/');
                }
                else{
                    alert("there's some error in registration!");
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


        <h3>Register</h3>
        <hr />
        <form >
        <div className="form-group p-2">
            <label>Name</label>
            <input type="name" className="form-control" value={uname} onChange={e => setName(e.target.value)}  placeholder="Name" />
        </div>
        <div className="form-group p-2">
            <label>Email address</label>
            <input type="email" className="form-control" value={uemail} onChange={e => setEmail(e.target.value)}  placeholder="Email" />
        </div>
        <div className="form-group p-2">
            <label>Password</label>
            <input type="password" className="form-control" value={upass} onChange={e => setPass(e.target.value)}  placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary m-2" onClick={Register}>Signup</button>
        <hr />
        
        <Link to={'/'}><button type="submit" className="btn btn-link" >Login</button></Link>

        </form>

        </div>
        </div>
        </div>
        </div>
);
}
export default Register;
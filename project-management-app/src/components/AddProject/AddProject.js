import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const AddProject = () => {
    const [pname, setPName] = useState('');
    const [pdes, setPDes] = useState('');
    const [ptime, setTime] = useState('');
    const [pgithub, setGit] = useState('');
    const [pUrl, setUrl] = useState('');
    const [pTech, setTech] = useState('');
    const [pImg, setImg] = useState('');
    const navigate = useNavigate();

    const Add_Project = (e) => {
        e.preventDefault();
        const projectDetails = {
            p_name: pname,
            p_des: pdes,
            start_date: ptime,
            tech_stacks: pTech,
            github_link: pgithub,
            domain_link: pUrl,
            image: pImg
        }
        console.log(projectDetails);

        if (pname != "" && pdes != "" && ptime != "" && pUrl != "" && pTech != "" && pgithub != "" && pImg != "") {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/api/addProject`, projectDetails).then(res => {
                    if (res.data.status == '200') {
                        alert("Project Added Successfully!");
                        window.location.reload(false);
                    }
                    else {
                        alert("there's some errors in your insertion!");
                    }
                });
            });
        } else {
            alert("fields can't be empty!");
        }
    }
    return (
        <div className="centerp">
            {localStorage.getItem('authtoken') ? (
                <div className="back">
                    <div className="div-center">
                        <div className="content">
                            <h3>Add New Project</h3>
                            <hr />
                            <form >
                                <div className="form-group">
                                    <label>Project Name</label>
                                    <input type="text" className="form-control" value={pname} onChange={e => setPName(e.target.value)} placeholder="Project Name" />
                                </div>
                                <div className="form-group p-1">
                                    <label>Project Description</label>
                                    <textarea className="form-control" value={pdes} onChange={e => setPDes(e.target.value)} placeholder="Project Description"></textarea>
                                    {/* <input type="text" className="form-control" value={pdes} onChange={e => setEmail(e.target.value)}  placeholder="Project Description" /> */}
                                </div>
                                <div className="form-group p-1">
                                    <label>Start Date</label>
                                    <input type="date" className="form-control" value={ptime} onChange={e => setTime(e.target.value)} placeholder="Password" />
                                </div>
                                <div className="form-group p-1">
                                    <label>Tech Stacks</label>
                                    <input type="text" className="form-control" value={pTech} onChange={e => setTech(e.target.value)} placeholder="Give technologies here" />
                                </div>
                                <div className="form-group p-1">
                                    <label>Github link</label>
                                    <input type="text" className="form-control" value={pgithub} onChange={e => setGit(e.target.value)} placeholder="Paste Github Url" />
                                </div>
                                <div className="form-group p-1">
                                    <label>Domain link</label>
                                    <input type="text" className="form-control" value={pUrl} onChange={e => setUrl(e.target.value)} placeholder="Paste domain Url if hosted" />
                                </div>
                                <div className="form-group p-1">
                                    <label>Image Link</label>
                                    <input type="text" className="form-control" value={pImg} onChange={e => setImg(e.target.value)} placeholder="Paste Image link here" />
                                </div>

                                <button type="submit" className="btn btn-success mr-2 ml-2 mt-2" onClick={Add_Project}>Add Project</button>
                                <hr />
                                <Link to={'/dashboard'} className="text-decoration-none">Back to dashboard</Link>

                            </form>

                        </div>
                    </div>
                </div>
            ) : (
                <>        <h2 className="text-center head ">You Are Not Logged in <button type="submit" onClick={function logoutSubmit(e) {
                    e.preventDefault(); localStorage.removeItem('authtoken')
                    navigate('/')
                }} className="btn logout btn-success text-center" >Go to Login</button></h2>
                </>
            )}
        </div>
    );
}

export default AddProject;
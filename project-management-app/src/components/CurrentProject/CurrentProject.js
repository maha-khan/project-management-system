import React, { useEffect, useState } from "react";
import '../../App.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const CurrentProject = () => {
    const [projects, setProject] = useState([]);
    const navigate = useNavigate();
    const getProject = () => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/projectList`).then(res => {
                if (res.data.status == '200') {
                    // alert("project got!");
                    setProject(res.data.message)
                    console.log(res.data.message)
                }
                else {
                    alert("Project not found!");
                }
            });
        });
    }
    const Complete = (id) => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.put(`/api/completed/${id}`).then(res => {
                if (res.data.status == '200') {
                    alert("project moved to Completed!");
                    window.location.reload(false);

                }
            });
        });
    }
    const Archive = (e, id) => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.put(`/api/archive/${id}`).then(res => {
                if (res.data.status == '200') {
                    alert("project moved to archive!");
                    window.location.reload(false);

                }
            });
        });
    }
    useEffect(() => {
        getProject();
    }, []);

    return (
        <div className="centerp">
            {localStorage.getItem('authtoken') ? (
                <><div className="text-center mt-2">
                    <Link to={'/dashboard'} className="text-decoration-none btn btn-dark ">Back to dashboard</Link>
                </div><h3 className="text-center head pb-4">Current Projects</h3><div className="row">
                        <div className="col-sm-1"></div>
                        {projects.map((project, idx) => <div key={idx} className="col-sm-3 card-group">
                            <div className="card">
                                <img className="card-img-top" src={project.image} alt="no image" />
                                <div className="card-body">
                                    <h5 className="card-title text-center text-bold"><strong>{project.p_name}</strong></h5>
                                    <label><strong>Tech Stacks</strong></label>
                                    <p className="card-text ">{project.tech_stacks}</p>
                                    <label><strong>Project Description</strong></label>
                                    <p className="card-text">{project.p_des}</p>
                                    <label><strong>Github Link</strong></label>
                                    <p className="card-text">{project.github_link}</p>
                                    <label><strong>Live Url</strong></label>
                                    <p className="card-text">{project.domain_link}</p>
                                </div>
                                <div className="text-center m-2">
                                    <button type="button" className="btn btn-warning " onClick={e => Archive(e, project.id)}>Archive?</button> &nbsp;&nbsp;<button type="button" className="btn btn-success" onClick={e => Complete(project.id)}>Completed</button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{project.status}</small>
                                </div>
                            </div>
                        </div>
                        )}
                        <div className="col-sm-1"></div>

                    </div></>
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
export default CurrentProject;
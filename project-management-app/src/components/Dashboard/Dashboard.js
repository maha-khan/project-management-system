import React, { useState } from "react";
import '../../App.css'
import axios from "axios";
import { createRoutesFromChildren } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();
    return (

        <div>
            {localStorage.getItem('authtoken') ? (
                <div className="back">
                    <h2 className="text-center head ">Welcome to Dashboard<button type="submit" onClick={function logoutSubmit(e) {
                        e.preventDefault(); localStorage.removeItem('authtoken')
                        navigate('/')
                    }} className="btn logout btn-danger text-center" >LogOut</button></h2>
                    <div className="main">
                        <div className=" row ">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4 link">
                                <div className=" center">
                                    <Link to={'/dashboard/projects/all'}><h2>Current Projects</h2></Link>
                                </div>
                            </div>
                            <div className="col-sm-4 link">
                                <div className="center ">
                                    <Link to={'/add-project'}><h2>Add Projects</h2></Link>
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>

                        <div className="row pt-4">
                            <div className="col-sm-2"></div>

                            <div className="col-sm-4 link">
                                <div className="center ">
                                    <Link to={'/dashboard/projects/completed'}><h2>Completed Projects</h2></Link>
                                </div>
                            </div>
                            <div className="col-sm-4 link">
                                <div className="center">
                                    <Link to={'/dashboard/projects/archived'}><h2>Archive Projects</h2></Link>
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
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
export default Dashboard;
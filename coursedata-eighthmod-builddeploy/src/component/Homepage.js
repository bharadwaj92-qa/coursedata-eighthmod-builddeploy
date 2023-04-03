import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './display.css';

const url = "http://localhost:8900/courses"

export default function Homepage() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            {/* <h3>
                <Link to='/enquiries'>
                    <button type="button">
                        <b>Enquire</b>
                    </button>
                </Link>
            </h3> */}
            <nav>
                <ul>
                    <Link to='/enquiries'>
                        <li><a href="#">Enquire</a></li>
                    </Link>
                </ul>
            </nav>
            <h1>Courses</h1>
            {courses &&
                <div>
                    {courses.map((crs) => (
                        <div>
                            <hr
                                style={{
                                    background: 'lime',
                                    color: 'lime',
                                    borderColor: 'lime',
                                    height: '3px',
                                }}
                            />
                            <h3 className='cardtext'><b>{crs.name}</b></h3>
                            {/* <Link to={`${fd.name}`}>
                                <img src={fd.image_url} alt="" />
                            </Link> */}
                            <img className="card" src={crs.img} alt="" />
                            <p className='cardtext'><b>Fee:</b> {crs.fee}</p>
                            <p className='cardtext'><b>Details:</b> {crs.details}</p>
                            <Link to='/enquiries'>
                                <button type="button">
                                    <b>Enquire</b>
                                </button>
                            </Link>
                        </div>

                    ))}
                </div>
            }



        </div>
    )
}


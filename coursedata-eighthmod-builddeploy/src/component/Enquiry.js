import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFields } from '../redux/courseSlice'
import { Link } from 'react-router-dom'
const url = "http://localhost:8900/enquiries";

export default function Enquiry() {

    const dispatch = useDispatch()
    const [enq, setEnq] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setEnq(data))
    }, []);

    const displayEnquiryHistory = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setEnq(data))
        return enq.map((enqy) => (
            <><p>Student Name: {enqy.name}</p><p>Subject Name: {enqy.subject}</p></>

        ))
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const random = Math.floor(Math.random() * 1000);
        const data = {
            id: random,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            subject: formData.subject
        };
        console.log(data);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(() => {
                alert('Submitted');
            });
        dispatch(updateFields(data));
        // displayEnquiryHistory();

    };

    const userData = useSelector(state => state.course);
    // console.log("data in useselector is" + userData.email)

    return (
        <div className="container"><b>Enquiry form</b>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        id="phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        id="subject" />
                </div>
                <button type="submit"
                    className="btn btn-success"
                    onClick={handleSubmit}>
                    <b>Submit</b>
                </button>
            </form>
            <Link to='/'>
                <button type="button">
                    <b>Go to Home</b>
                </button>
            </Link>
            <div className="row">
                <h1>Enquiry History</h1>
                {displayEnquiryHistory()}
            </div>
        </div>
    );
}

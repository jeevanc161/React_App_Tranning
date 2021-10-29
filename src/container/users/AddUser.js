import React from 'react'
import { useState } from "react";
import UserForm from '../../components/UserForm'
import ListUser from './ListUser'

const AddUser = (props) => {

    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [users, ] = useState([]);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {  
        event.preventDefault();
        if(handleValidation(inputs)){
            let data = inputs
            users.push(data)
            setInputs("");
            setErrors("");
            document.getElementById("profile_pic").value = "";
        }        

    }

    const handleValidation = (values) => {
        let isFormValid = true;
        const errors = {}
        if (!values.name) {
            errors.name = "Name is requird"
            isFormValid = false;
        }
        if (!values.email) {
            errors.email = "Email is requird"
            isFormValid = false;
        }
        if (!values.education) {
            errors.education = "Education is requird"
            isFormValid = false;
        }
        if (!values.dob) {
            errors.dob = "Date of Birth is requird"
            isFormValid = false;
        }
        if (!values.password) {
            errors.password = "Password is requird"
            isFormValid = false;
        }
        if (!values.confirm_password) {
            errors.confirm_password = "Confirm Password is requird"
            isFormValid = false;
        }
        if (values.confirm_password !== values.password ) {
            errors.password_match = "Password Not Match"
            isFormValid = false;
        }
        if (!values.profile_pic) {
            errors.profile_pic = "Profile Picture is requird"
            isFormValid = false;
        }
        setErrors(errors);
        return isFormValid;
    }

    return (
        <div className='row'>
        <div className='col-sm-6'>
            <div className="card mt-4">
                <div className='card-body'>
                <UserForm handleSubmit = {handleSubmit} handleChange = {handleChange} inputs = {inputs} errors = {errors} /> 
                </div>
            </div>
        </div>
        <div className='col-sm-6' >
            <div className="card mt-4">
                <div className='card-body'>
                    <ListUser   data={users} />
                </div>
            </div>
        </div>
    </div>
       
    )
}

export default AddUser



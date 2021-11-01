import React from 'react'
import { useState } from "react";
import UserForm from '../../components/UserForm'
import ListUser from './ListUser'

const AddUser = (props) => {

    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidation(inputs)) {
            let data = inputs
            console.log(data.profile_pic)
            let value = document.getElementById('submit').value.split(' ')
            if (value[0] === 'Edit') {
                users.splice(value[1], 1, data)
            } else {
                users.push(data)
            }
            setInputs("");
            setErrors("");
            document.getElementById("profile_pic").value = "";
            document.getElementById('submit').innerHTML = 'Send'
            document.getElementById('submit').value = 'Submit'
        }

    }

    const deleteRow = (index) => {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);

    }

    const editRow = (index) => {
        const user = [...users];
        const data = user[index];
        setInputs(data);
        document.getElementById('submit').innerHTML = 'Edit'
        document.getElementById('submit').value = `Edit ${index}`

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
        if (values.confirm_password !== values.password) {
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
                        <UserForm handleSubmit={handleSubmit} handleChange={handleChange} inputs={inputs} errors={errors} />
                    </div>
                </div>
            </div>
            <div className='col-sm-6' >
                <div className="card mt-4">
                    <div className='card-body'>
                        <ListUser data={users} deleteRow={deleteRow} editRow={editRow} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddUser



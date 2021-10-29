import React from 'react'


const UserForm = ({errors , handleChange , handleSubmit , inputs}) => {

    return (
        <div className='mt-5'>
             <h5 className="card-title text-center alert alert-primary">Add User</h5>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="input" className="form-control"
                            placeholder="Name" name='name' value={inputs.name || ""}
                            onChange={handleChange} />
                        <label className='text-danger'>{errors.name}</label>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control"
                            name='email' placeholder="Email"
                            value={inputs.email || ""} onChange={handleChange} />
                        <label className='text-danger'>{errors.email}</label>
                    </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className="form-group col-md-6" >
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" className="form-control" id="dob"
                            name='dob' placeholder="yyyy/mm/dd"
                            value={inputs.dob || ""} onChange={handleChange} />
                        <label className='text-danger'>{errors.dob}</label>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="education">Eduction</label>
                        <select id="education" className="form-control"
                            name='education' value={inputs.education || ""} onChange={handleChange}>
                            <option value='Gratuate'>Gratuate</option>
                            <option value='PG' >Post Gratuate</option>
                            <option value='12'>12 th</option>
                            <option value='10'>10 th</option>
                            <option value='none'>None</option>
                        </select>
                        <label className='text-danger'>{errors.education}</label>
                    </div>
                </div>
                <br></br>
                <div className="form-group row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"
                            placeholder="Password" name="password"
                            value={inputs.password || ""} onChange={handleChange} />
                        <label className='text-danger'>{errors.password}</label>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="confirm-Password">Confirm Password</label>
                        <input type="password" className="form-control" id="confirm-Password"
                            placeholder="confirm-Password" name='confirm_password'
                            value={inputs.confirm_password || ""} onChange={handleChange} />
                        <label className='text-danger'>{errors.confirm_password}</label>
                        <label className='text-danger'>{errors.password_match}</label>
                    </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className="form-group col-md-6">
                        <label htmlFor="profile_pic">Profile Picture</label>
                        <input type="file" className="form-control" id="profile_pic" name='profile_pic' onChange={handleChange} />
                        <label className='text-danger'>{errors.profile_pic}</label>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <br></br>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="gender" name='gander' value="male" onChange={handleChange} />
                            <label className="form-check-label" htmlFor="">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="gender" name='gander' value="female" onChange={handleChange} />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Female</label>
                        </div>
                    </div>
                </div>
                <br></br>

                <button type="submit" className="btn btn-success">Sign in</button>
            </form>
        </div>
    )
}

export default UserForm



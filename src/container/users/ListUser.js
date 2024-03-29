import React from 'react'

const ListUser = (props) => {

    let count = 0;
    return (
        <div className='mt-5'>
            <h5 className="card-title text-center alert alert-primary">List User</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((user, index) => {
                        let temp = ++count
                        return (
                            <tr key={temp}>
                                <td>{temp}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.dob}</td>
                                <td>
                                    <button onClick={() => props.deleteRow(index)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => props.editRow(index)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default ListUser;

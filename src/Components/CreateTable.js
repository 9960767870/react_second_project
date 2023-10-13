
import React from 'react'

export default function CreateTable({ userData, editUser, deleteUser, count }) {
    return (
        <div className='container' style={{ marginLeft: "25px", width: "100vw", marginTop: "148px", height: "624px" }}>
            <table className="table caption-top">
                <caption>List of users</caption>
                {console.log(userData)}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Password</th>
                        <th scope="col">EmailId</th>
                        <th scope="col">language</th>
                        <th scope="col">TextArea</th>

                        <th scope="col">Gender</th>
                        <th scope="col">FileName</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.srno}</td>
                            <td>{data.name}</td>
                            <td>{data.password}</td>
                            <td>{data.email}</td>
                            <td>{data.languege}</td>
                            <td>{data.teaxtarea}</td>

                            <td>{data.selectgender}</td>
                            <td>{data.file}</td>
                            <td>
                                <button type="button" className='btn btn-success' onClick={() => editUser(index)} >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button type="button" className='btn btn-danger' onClick={() => deleteUser(index)} >
                                    Delete
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
